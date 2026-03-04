import { cn } from "@/lib/utils";

export const PageTitle = ({
  title,
  className,
}: {
  title: string;
  className?: string;
}) => {
  return (
    <h2
      className={cn(
        "fixed top-8 lg:top-0 left-0 z-0 w-full text-center text-[25vw] font-normal text-[#797979] opacity-15",
        className,
      )}
    >
      {title}
    </h2>
  );
};
