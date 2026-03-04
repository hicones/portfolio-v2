"use client";

import { useLocale } from "next-intl";
import { useRouter, usePathname } from "@/i18n/routing";
import { ChangeEvent, useTransition } from "react";
import { cn } from "@/lib/utils";
import { LuChevronDown } from "react-icons/lu";

export const LocaleSwitcher = ({
  darkMode = false,
}: {
  darkMode?: boolean;
}) => {
  const [isPending, startTransition] = useTransition();
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const onSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const nextLocale = e.target.value as "en" | "pt-BR" | "es";
    startTransition(() => {
      router.replace(pathname, { locale: nextLocale });
    });
  };

  return (
    <div
      className={cn(
        "relative flex items-center",
        isPending && "opacity-50 transition-opacity",
      )}
    >
      <select
        defaultValue={locale}
        onChange={onSelectChange}
        disabled={isPending}
        className={cn(
          "appearance-none bg-transparent py-1 pl-3 pr-8 rounded-full text-sm font-medium border focus:outline-none transition-colors cursor-pointer disabled:cursor-not-allowed",
          darkMode
            ? "text-white border-white/20 hover:border-white hover:bg-white/10"
            : "text-foreground border-gray-200 hover:border-gray-800 hover:bg-gray-50",
        )}
      >
        <option value="en" className="text-black">
          EN
        </option>
        <option value="pt-BR" className="text-black">
          PT-BR
        </option>
        <option value="es" className="text-black">
          ES
        </option>
      </select>
      <LuChevronDown
        className={cn(
          "absolute right-3 pointer-events-none",
          darkMode ? "text-white" : "text-black",
        )}
      />
    </div>
  );
};
