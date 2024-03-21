import React from "react";

interface ParagraphProps {
  children: React.ReactNode;
  classStyle: string;
}
export default function Paragraph({ children, classStyle }: ParagraphProps) {
  return (
    <p
      className={`${classStyle} opacity-65  text-slate-900 dark:text-white    `}
    >
      {children}
    </p>
  );
}
