import NextHead from "next/head";
import React from "react";
import Header from "../../components/Header";

interface IWebsite {
  children: React.ReactNode;
}

const Website = ({ children }: IWebsite) => {
  return (
    <>
      <NextHead>
        <title>Ventspace | Venting</title>
        <meta
          title="viewport"
          content="width=device-width, initial-scale=1.0"
        />
      </NextHead>
      <main>
        <Header />
        {children}
      </main>
    </>
  );
};

export default Website;
