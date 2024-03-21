import { Card, CardContent, CardHeader } from "@/components/ui/card";
import React from "react";
import Image from "next/image";
interface CardContentProps {
  text: string;
  autor: string;
  image: string;
  role: string;
}

export default function Recommendations({
  text,
  autor,
  image,
  role,
}: CardContentProps) {
  return (
    <Card className="w-full max-w-lg max-h-lg">
      <CardHeader>
        <div className="pl-6 justify-between flex items-end">
          <p>{autor}</p>
          <Image
            src={image}
            alt={autor}
            width={100}
            height={100}
            className="rounded-full"
            objectFit="cover"
          />
        </div>
      </CardHeader>
      <CardContent>
        <div className=" z-20 flex flex-1 flex-shrink flex-col justify-between space-y-10 rounded-b-3xl bg-marketing-surface-darkBlue p-6 text-marketing-text-primary ">
          <p className="text-[20px] font-normal italic leading-[28px] ">
            “{text}”
          </p>
          <div className="flex items-end justify-between">
            <span className="block font-bold">{role}</span>
            <Image
              src="https://www.globant.com/themes/custom/globant_corp_theme/images/2019/globant-logo-dark.svg"
              alt="logo"
              width={80}
              height={80}
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
