"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";

interface CoverProps {
  url?: string;
  preview?: string;
}

const Cover = ({ preview, url }: CoverProps) => {
  return (
    <div
      className={cn(
        "relative w-full h-[35vh] group",
        !url && "h-[12vh]",
        url && "bg-muted"
      )}
    >
      {!!url && <Image src={url} alt="cover" fill className="object-cover" />}
    </div>
  );
};

export default Cover;
