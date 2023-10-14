"use client";

import { Doc } from "@/convex/_generated/dataModel";

interface ToolbarProps {
  initialData: Doc<"documents">;
}

const Toolbar = ({ initialData }: ToolbarProps) => {
  return <div>Toolbar</div>;
};

export default Toolbar;
