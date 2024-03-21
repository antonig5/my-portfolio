import React from "react";
import Image from "next/image";
import Paragraph from "./Paragraph";

interface ListProps {
  title: string;
  description: string;
  image: string;
  date: string;
  badges: React.ReactNode;
  role: string;
}
export default function List({
  title,
  description,
  image,
  date,
  badges,
  role,
}: ListProps) {
  return (
    <div className="max-w-6xl mx-auto px-32 py-6 space-y-6">
      <div className="grid md:grid-cols-3 items-start gap-6 md:gap-12">
        <div className="flex items-start gap-4 md:col-span-2">
          <Image
            alt="Product Image"
            className="aspect-square object-cover border border-gray-200 w-24 rounded-lg overflow-hidden dark:border-gray-800"
            height={200}
            src={image}
            width={200}
          />
          <div className="grid gap-2">
            <h2 className="font-semibold text-lg leading-none">{title}</h2>
            <Paragraph classStyle="text-sm max-w-prose ">
              {description}
            </Paragraph>
            <div className="flex gap-2">{badges}</div>
          </div>
        </div>
        <div className="flex items-start gap-4 md:col-span-1 md:justify-end">
          <div className="grid gap-2 text-right">
            <h3 className="font-semibold">{role}</h3>
            <time>{date}</time>
          </div>
        </div>
      </div>
    </div>
  );
}
