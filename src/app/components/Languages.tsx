import Image from "next/image";
import React from "react";

export default function Languages() {
  return (
    <div className="w-full py-12">
      <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
        <div className="grid w-full grid-cols-2 gap-4 md:grid-cols-4 lg:gap-6 xl:gap-8">
          <div className="flex flex-col items-center justify-center p-4 border border-gray-200 rounded-lg shadow-sm md:p-6 dark:border-gray-800">
            <Image
              alt="Logo"
              className="aspect-[1/1] rounded-lg overflow-hidden object-contain object-center"
              height="64"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png"
              width="64"
            />
            <div className="leading-none font-semibold mt-2 text-sm">
              JavaScript
            </div>
          </div>

          <div className="flex flex-col items-center justify-center p-4 border border-gray-200 rounded-lg shadow-sm md:p-6 dark:border-gray-800">
            <Image
              alt="Logo"
              className="aspect-[1/1] rounded-lg overflow-hidden object-contain object-center"
              height="64"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png"
              width="64"
            />
            <div className="leading-none font-semibold mt-2 text-sm">Node</div>
          </div>
          <div className="flex flex-col items-center justify-center p-4 border border-gray-200 rounded-lg shadow-sm md:p-6 dark:border-gray-800">
            <Image
              alt="Logo"
              className="aspect-[1/1] rounded-lg overflow-hidden object-contain object-center"
              height="64"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png"
              width="64"
            />
            <div className="leading-none font-semibold mt-2 text-sm">React</div>
          </div>
          <div className="flex flex-col items-center justify-center p-4 border border-gray-200 rounded-lg shadow-sm md:p-6 dark:border-gray-800">
            <Image
              alt="Logo"
              className="aspect-[1/1] rounded-lg overflow-hidden object-contain object-center"
              height="64"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Nextjs-logo.svg/500px-Nextjs-logo.svg.png"
              width="64"
            />
            <div className="leading-none font-semibold mt-2 text-sm">Next</div>
          </div>
          <div className="flex flex-col items-center justify-center p-4 border border-gray-200 rounded-lg shadow-sm md:p-6 dark:border-gray-800">
            <Image
              alt="Logo"
              className="aspect-[1/1] rounded-lg overflow-hidden object-contain object-center"
              height="64"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Docker_%28container_engine%29_logo.png/560px-Docker_%28container_engine%29_logo.png"
              width="64"
            />
            <div className="leading-none font-semibold mt-2 text-sm">
              Docker
            </div>
          </div>
          <div className="flex flex-col items-center justify-center p-4 border border-gray-200 rounded-lg shadow-sm md:p-6 dark:border-gray-800">
            <Image
              alt="Logo"
              className="aspect-[1/1] rounded-lg overflow-hidden object-contain object-center"
              height="64"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Typescript.svg/128px-Typescript.svg.png"
              width="64"
            />
            <div className="leading-none font-semibold mt-2 text-sm">
              TypeScript
            </div>
          </div>
          <div className="flex flex-col items-center justify-center p-4 border border-gray-200 rounded-lg shadow-sm md:p-6 dark:border-gray-800">
            <Image
              alt="Logo"
              className="aspect-[1/1] rounded-lg overflow-hidden object-contain object-center"
              height="64"
              src="https://repository-images.githubusercontent.com/180328715/fca49300-e7f1-11ea-9f51-cfd949b31560"
              width="64"
            />
            <div className="leading-none font-semibold mt-2 text-sm">
              Zustand
            </div>
          </div>
          <div className="flex flex-col items-center justify-center p-4 border border-gray-200 rounded-lg shadow-sm md:p-6 dark:border-gray-800">
            <Image
              alt="Logo"
              className="aspect-[1/1] rounded-lg overflow-hidden object-contain object-center"
              height="64"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/MongoDB_Logo.svg/2560px-MongoDB_Logo.svg.png"
              width="64"
            />
            <div className="leading-none font-semibold mt-2 text-sm">
              MongoDB
            </div>
          </div>
          <div className="flex flex-col items-center justify-center p-4 border border-gray-200 rounded-lg shadow-sm md:p-6 dark:border-gray-800">
            <Image
              alt="Logo"
              className="aspect-[1/1] rounded-lg overflow-hidden object-contain object-center"
              height="64"
              src="https://miro.medium.com/v2/resize:fit:1400/1*dU4B5Jg2opVXRmGhiBYXdQ.png"
              width="64"
            />
            <div className="leading-none font-semibold mt-2 text-sm">MySQL</div>
          </div>
          <div className="flex flex-col items-center justify-center p-4 border border-gray-200 rounded-lg shadow-sm md:p-6 dark:border-gray-800">
            <Image
              alt="Logo"
              className="aspect-[1/1] rounded-lg overflow-hidden object-contain object-center"
              height="64"
              src="https://obuldanrptloktxcffvn.supabase.co/storage/v1/object/public/images/integrations/directus/directus_logo.jpeg"
              width="64"
            />
            <div className="leading-none font-semibold mt-2 text-sm">
              Directus
            </div>
          </div>
          <div className="flex flex-col items-center justify-center p-4 border border-gray-200 rounded-lg shadow-sm md:p-6 dark:border-gray-800">
            <Image
              alt="Logo"
              className="aspect-[1/1] rounded-lg overflow-hidden object-contain object-center"
              height="64"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/1200px-Postgresql_elephant.svg.png"
              width="64"
            />
            <div className="leading-none font-semibold mt-2 text-sm">
              PostgreSQL
            </div>
          </div>
          <div className="flex flex-col items-center justify-center p-4 border border-gray-200 rounded-lg shadow-sm md:p-6 dark:border-gray-800">
            <Image
              alt="Logo"
              className="aspect-[1/1] rounded-lg overflow-hidden object-contain object-center"
              height="64"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/GraphQL_Logo.svg/1200px-GraphQL_Logo.svg.png"
              width="64"
            />
            <div className="leading-none font-semibold mt-2 text-sm">
              GraphQL
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
