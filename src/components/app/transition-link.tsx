"use client";

import { sleep } from "@/lib/utils";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/navigation";

interface TransitionLinkProps extends LinkProps {
  children: React.ReactNode;
  className?: string;
}

export const TransitionLink = ({
  children,
  href,
  ...props
}: TransitionLinkProps) => {
  const router = useRouter();

  const handleTransition = async (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    e.preventDefault();

    const body = document.querySelector("body");

    body?.classList.add("page-transition");

    router.push(href as string);
    await sleep(400);

    body?.classList.remove("page-transition");
  };

  return (
    <Link href={href} {...props} onClick={handleTransition}>
      <span className="absolute inset-0 w-full h-0.5 bg-gray-900 transition-transform duration-300 transform scale-x-0 group-hover:scale-x-100"></span>
      <span className="relative">{children}</span>
    </Link>
  );
};
