"use client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Link from "next/link";
import { TransitionButton } from "./app/transition-button";

export const DownloadCVButton = () => {
  return (
    <Dialog>
      <DialogTrigger>
        <TransitionButton isButton={false}>Download CV</TransitionButton>
      </DialogTrigger>
      <DialogContent className="w-full">
        <DialogHeader>
          <DialogTitle>Download CV</DialogTitle>
          <DialogDescription>
            Choose your preferred language for the CV:
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="flex gap-2 w-full items-center !justify-start">
          <Link href={"/assets/cv/henrique-almeida-cv-en.pdf"} download>
            <TransitionButton className="w-full">English</TransitionButton>
          </Link>
          <Link href={"/assets/cv/henrique-almeida-cv-pt.pdf"} download>
            <TransitionButton className="w-full">Portuguese</TransitionButton>
          </Link>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
