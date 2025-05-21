import { cn } from "@/lib/utils";

interface SplitButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  className?: string;
  datatext?: string;
}

export const SplitButton = (props: SplitButtonProps) => {
  return (
    <button
      data-button-text={props.datatext || (props.children as string) || ""}
      aria-label={(props.children as string) || ""}
      {...props}
      className={cn(
        "split-button outline-none ring-0 border-0 cursor-pointer",
        props.className
      )}
    >
      <span>{props.children}</span>
    </button>
  );
};
