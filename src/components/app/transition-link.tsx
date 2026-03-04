"use client";

import { sleep } from "@/lib/utils";
import { Link, useRouter } from "@/i18n/routing";
import { ComponentProps } from "react";

interface TransitionLinkProps extends ComponentProps<typeof Link> {
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
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) => {
    e.preventDefault();

    const body = document.querySelector("body");

    body?.classList.add("page-transition");

    await sleep(400);

    router.push(href as string);

    body?.classList.remove("page-transition");
  };

  return (
    <Link href={href} {...props} onClick={handleTransition}>
      <span className="absolute inset-0 w-full h-0.5 bg-gray-900 transition-transform duration-300 transform scale-x-0 group-hover:scale-x-100"></span>
      <span className="relative">{children}</span>
    </Link>
  );
};
