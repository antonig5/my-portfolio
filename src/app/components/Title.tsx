import Head from "next/head";
import React from "react";
interface TitleProps {
  children: React.ReactNode;
}
const Title = ({ children }: TitleProps) => {
  return (
    <h1 className=" text-7xl font-bold p-8 text-slate-900 dark:text-white">
      {children}
    </h1>
  );
};

export default Title;
