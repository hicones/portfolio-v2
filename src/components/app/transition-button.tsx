import { cn } from "@/lib/utils";

export const TransitionButton = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <button
      className={cn(
        "transitionButton px-10 py-3 rounded-full text-lg font-mono font-medium transition-all duration-300 ease-in-out cursor-pointer",
        className
      )}
    >
      <span className="z-[1]">{children}</span>
    </button>
  );
};
