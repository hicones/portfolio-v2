"use client";
import { usePathname, useRouter } from "next/navigation";

export const TransitionLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => {
  const router = useRouter();
  const pathName = usePathname();

  const triggerAnimation = () => {
    const element = document.getElementById("template");
    element?.classList.add("animate_template");
  };

  const onClick = () => {
    if (pathName !== href) {
      triggerAnimation();
      router.push(href);
    }
  };

  return <button onClick={onClick}>{children}</button>;
};
