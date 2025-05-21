"use client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { SplitButton } from "./app/split-button";
import Link from "next/link";

export const DownloadCVButton = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <SplitButton className="bg-[#0E2148] w-fit px-10 rounded font-semibold font-mono !p-3 text-background">
          Download CV
        </SplitButton>
      </DialogTrigger>
      <DialogContent className="!p-4">
        <DialogHeader>
          <DialogTitle>Download CV</DialogTitle>
          <DialogDescription>
            Choose your preferred language for the CV:
          </DialogDescription>
        </DialogHeader>
        <div className="flex gap-4">
          <Link href={"/assets/cv/henrique-almeida-cv-en.pdf"} download>
            <SplitButton className="bg-[#0E2148] text-background !p-2 rounded font-medium font-mono">
              English
            </SplitButton>
          </Link>
          <Link href={"/assets/cv/henrique-almeida-cv-pt.pdf"} download>
            <SplitButton className="bg-[#0E2148] text-background !p-2 rounded font-medium font-mono">
              Portuguese
            </SplitButton>
          </Link>
        </div>
      </DialogContent>
    </Dialog>
  );
};
