"use client";
import { Button } from "@/components/ui/button";
import Paragraph from "./components/Paragraph";
import Title from "./components/Title";
import { Github, Linkedin, Mail } from "lucide-react";
import { Card } from "@/components/ui/card";
import React from "react";
import Image from "next/image";
import CardContent from "./components/CarContent";
import List from "./components/List";
import BadgeContent from "./components/BadgeContent";
import Languages from "./components/Languages";
import { Badge } from "@/components/ui/badge";
import Recommendations from "./components/Recommendations";

export default function Home() {
  const [showCard, setShowCard] = React.useState(false);
  const dividerRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const handleScroll = () => {
      if (!dividerRef.current) return;

      const dividerBottomPosition =
        dividerRef.current.getBoundingClientRect().bottom;
      const screenBottomPosition = window.innerHeight;

      setShowCard(dividerBottomPosition < screenBottomPosition);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <main className="dark:bg-gray-900 bg-white">
      <div className="text-center ">
        <Title>JavaScript developer.</Title>
        <Paragraph classStyle="text-2xl">
          Where creativity meets code.
        </Paragraph>
        <div className="flex gap-3 justify-center pt-8">
          <a href="https://github.com/antonig5" target="_blank">
            <Button>
              <Github className="mr-2 h-4 w-4" /> Github
            </Button>
          </a>
          <a href="mailto:giraldoantonio160@gmail.com">
            <Button>
              <Mail className="mr-2 h-4 w-4" /> Email
            </Button>
          </a>
          <a href="https://www.linkedin.com/in/antonio-giraldo-b51106233/">
            <Button>
              <Linkedin className="mr-2 h-4 w-4" /> Linkedin
            </Button>
          </a>
        </div>

        <div className="relative flex justify-center p-8">
          <Image
            alt="Placeholder"
            src="/assets/catbacgraund.png"
            width={900}
            height={800}
          />
          <div
            ref={dividerRef}
            className="absolute bottom-0 w-full border-b-2 border-gray-500"
          ></div>
          <Card
            className={`w-full max-w-4xl absolute bottom-0 transition-all ${
              showCard ? "translate-y-0" : "translate-y-full"
            }`}
            style={{
              transition: "transform 1.5s ease", // Ajusta la duración aquí a 1.5 segundos
            }}
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="relative aspect-square">
                <Image
                  alt="Placeholder"
                  className="object-cover rounded-lg"
                  height={400}
                  src="/assets/yo.png"
                  style={{
                    aspectRatio: "400/400",
                    objectFit: "cover",
                  }}
                  width={500}
                />
              </div>
              <div className="flex flex-col justify-center">
                <h3 className="text-lg font-semibold">Antonio Giraldo</h3>
                <p className="text-sm text-gray-500 mt-2  p-4 text-left">
                  I have been a JavaScript developer for 2 years, 1 year and a
                  half as a React developer and 6 months as a Node developer. as
                  a React developer and 6 months as a Node developer, and
                  currently I am learning Nest.
                  <strong>
                    {" "}
                    If you have an idea for a project, don’t hesitate to contact
                    me. contact me.
                  </strong>
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
      <div className="text-center justify-center container pt-20">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-slate-900 dark:text-white">
          Projects
        </h2>
      </div>
      <CardContent
        urlgithub="https://github.com/antonig5/Poadd/tree/main"
        hasgithub={true}
        hasdemo={false}
        inprogress
        title="Web app for adult advertisements."
        description="Developed with Next.js and the nextui library on the frontend side, on the backend side Node andExpress and the data is stored in MongoDB."
        image={[
          "/assets/Poadd/0.png",
          "/assets/Poadd/1.png",
          "/assets/Poadd/2.png",
          "/assets/Poadd/3.png",
          "/assets/Poadd/4.png",
        ]}
        badges={
          <>
            <Badge variant="secondary">Javascript</Badge>
            <Badge variant="secondary">Next.js</Badge>
            <Badge variant="secondary">Node</Badge>
            <Badge variant="secondary">Express</Badge>
            <Badge variant="secondary">MongoDB</Badge>
          </>
        }
      />
      <CardContent
        urlgithub="https://github.com/antonig5/catshort-link"
        hasdemo
        hasgithub
        inprogress={false}
        title="Link shortener and verifier."
        description="Web App to shorten URLs."
        image={["/assets/CatShort/0.png", "/assets/CatShort/1.png"]}
        badges={
          <>
            <Badge variant="secondary">Javascript</Badge>
            <Badge variant="secondary">Astro</Badge>
            <Badge variant="secondary">MongoDB</Badge>
            <Badge variant="secondary">Node</Badge>
            <Badge variant="secondary">Sequelize</Badge>
          </>
        }
      />
      <CardContent
        urlgithub="#"
        hasdemo={false}
        hasgithub={false}
        inprogress={false}
        title="Access control for parking lot"
        description="I created it as a final project for a local transport company and this access control is still in use today."
        image={[
          "/assets/Automotor/0.png",
          "/assets/Automotor/1.png",
          "/assets/Automotor/2.png",
          "/assets/Automotor/3.png",
        ]}
        badges={
          <>
            <Badge variant="secondary">Javascript</Badge>
            <Badge variant="secondary">React</Badge>
            <Badge variant="secondary">Directus</Badge>
            <Badge variant="secondary">MySQL</Badge>
            <Badge variant="secondary">Ant Design</Badge>
          </>
        }
      />
      <CardContent
        urlgithub="https://github.com/antonig5/Api-finance"
        hasdemo={false}
        hasgithub
        inprogress={false}
        title="Finance Api"
        description="Created with Node and Sequelize, the data is stored in PostgreSQL, it was created for a savings app."
        image={["/assets/Api-finance/0.png"]}
        badges={
          <>
            <Badge variant="secondary">Javascript</Badge>
            <Badge variant="secondary">Sequelize</Badge>
            <Badge variant="secondary">PostgreSQL</Badge>
            <Badge variant="secondary">Node</Badge>
            <Badge variant="secondary">Jest</Badge>
            <Badge variant="secondary">Docker</Badge>
          </>
        }
      />

      <div className="text-center justify-center container pt-20">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl  text-slate-900 dark:text-white">
          Experience
        </h2>
      </div>
      <List
        title="Esspia"
        description="Building an event management application for B2B, using Directus as a headless CMS for the backend and React 17 in the Frontend."
        image="data:image/png;base64,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"
        badges={
          <>
            <BadgeContent title="Javascript" color="yellow" />
            <BadgeContent title="React" color="blue" />
            <BadgeContent title="Directus" color="violet" />
          </>
        }
        role="Frontend Developer"
        date="2020-12-17 - 2021-06-10"
      />
      <List
        title="Globant"
        description="Creating APIs with NodeJs, using Docker for containerization and Sequelize for SQL database management, as well as implementing unit tests to ensure proper operation. Handling of both SQL and NoSQL databases for versatile data integration."
        image="https://s3-symbol-logo.tradingview.com/globant--600.png"
        badges={
          <>
            <BadgeContent title="Javascript" color="yellow" />
            <BadgeContent title="Node" color="green" />
            <BadgeContent title="Next" color="gray" />
            <BadgeContent title="MongoDB" color="emerald" />
            <BadgeContent title="Docker" color="cyan" />
          </>
        }
        role="Tech trainer"
        date="2023-01-20 - 2023-11-20"
      />
      <List
        title="Freelancer"
        description="Creation of user interfaces using React and Astro in the frontend, management and creation of Apis with Node in the backend."
        image="/assets/Freelancer/0.jpeg"
        badges={
          <>
            <BadgeContent title="Javascript" color="yellow" />
            <BadgeContent title="Node" color="blue" />
          </>
        }
        role="Javascript Developer"
        date="2023-12-01 - Currently"
      />
      <div className="text-center justify-center container pt-20">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
          Programming languages and technologies
        </h2>
      </div>
      <Languages />
      <div className="text-center justify-center container pt-20">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
          Recommendations
        </h2>
      </div>
      <div className="grid w-full max-w-6xl gap-8 mx-auto p-20 justify-center grid-cols-1 md:grid-cols-2">
        <Recommendations
          text="It is a pleasure to recommend Antonio, during the course of working with me I have found him to be highly proactive, a quick learner and always in exceptional working spirits. His positive attitude and strong aptitude make him a valuable member of any team."
          autor="Yesid Hernandez"
          image="/assets/Recommendations/Yesid.jpeg"
          role="Backend Developer"
        />
        <Recommendations
          text="Antonio is a very curious and innovative person. Always one step ahead of new technologies."
          autor="Alejandra Castaño"
          image="/assets/Recommendations/Alejandra.jpeg"
          role="Data Engineer"
        />
      </div>
    </main>
  );
}
