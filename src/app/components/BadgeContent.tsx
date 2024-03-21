import { Badge } from "@/components/ui/badge";
import React from "react";

interface BadgeContentProps {
  title: string;
  color: string;
}
export default function BadgeContent({ title, color }: BadgeContentProps) {
  return (
    <div className="flex items-center gap-4">
      <Badge
        className={`bg-${color}-200 dark:bg-${color}-900`}
        variant="secondary"
      >
        <CircleIcon className="h-2 w-2 -translate-x-1" />
        {title}
      </Badge>
    </div>
  );
}
function CircleIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
    </svg>
  );
}
