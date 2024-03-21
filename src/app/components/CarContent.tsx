import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import React from "react";
import Paragraph from "./Paragraph";

import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Earth, GithubIcon } from "lucide-react";

interface CardContentProps {
  title: string;
  description: string;
  image: Array<string>;
  inprogress: boolean;
  badges: React.ReactNode;
  hasgithub: boolean;
  hasdemo: boolean;
  urlgithub: string;
}

export default function CarContent({
  title,
  description,
  image,
  inprogress,
  badges,
  hasgithub,
  hasdemo,
  urlgithub,
}: CardContentProps) {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  );
  return (
    <div className="flex justify-center items-center w-full max-w-6xl mx-auto pt-20">
      <div className="flex flex-col md:flex-row justify-center items-center gap-10 px-5">
        <div className=" md:text-left">
          <h1 className="text-4xl font-bold pb-6 dark:text-white text-slate-950">
            {title}
          </h1>
          <Paragraph classStyle="text-lg max-w-prose ">{description}</Paragraph>
          <div className="flex  gap-4 pt-4 text-center">{badges}</div>
          {inprogress ? (
            <Badge className="mt-4" variant="destructive">
              En desarrollo
            </Badge>
          ) : null}
          <div className="flex gap-4">
            {hasgithub ? (
              <a href={urlgithub} target="_blank">
                <Button className="mt-4">
                  <GithubIcon className="mr-2 h-4 w-4" />
                  Ver Repositorio
                </Button>
              </a>
            ) : null}
            {hasdemo ? (
              <a href="https://catshort-link.vercel.app/" target="_blank">
                <Button className="mt-4">
                  <Earth className="mr-2 h-4 w-4" />
                  Ver Demo
                </Button>
              </a>
            ) : null}
          </div>
        </div>
        <Card className="w-full lg: max-w-xl lg: max-h-[330px]  ">
          <div className="aspect-square ">
            <Carousel
              plugins={[plugin.current]}
              className="w-full"
              onMouseEnter={plugin.current.stop}
              onMouseLeave={plugin.current.reset}
            >
              <CarouselContent>
                {image.map((image, index) => (
                  <CarouselItem key={index}>
                    <div className="p-1">
                      <div className="aspect-video overflow-hidden rounded-lg">
                        <Image
                          alt="Image"
                          className="object-cover rounded-lg"
                          height={225}
                          src={image}
                          layout="responsive"
                          style={{
                            aspectRatio: "400/225",
                            objectFit: "cover",
                          }}
                          width={400}
                        />
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </Card>
      </div>
    </div>
  );
}
