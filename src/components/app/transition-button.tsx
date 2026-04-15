import { cn } from "@/lib/utils";

export const TransitionButton = ({
  children,
  className,
  isButton = true,
  disabled,
}: {
  children: React.ReactNode;
  className?: string;
  isButton?: boolean;
  disabled?: boolean;
}) => {
  if (isButton) {
    return (
      <button
        type="submit"
        disabled={disabled}
        className={cn(
          "transitionButton px-10 py-3 rounded-full text-lg font-mono font-medium transition-all duration-300 ease-in-out cursor-pointer",
          disabled && "opacity-50 pointer-events-none",
          className,
        )}
      >
        <span className="z-1">{children}</span>
      </button>
    );
  }

  return (
    <div
      className={cn(
        "transitionButton px-10 py-3 rounded-full text-lg font-mono font-medium transition-all duration-300 ease-in-out cursor-pointer",
        className,
      )}
    >
      <span className="z-1">{children}</span>
    </div>
  );
};
