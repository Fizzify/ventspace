import NextLink from "next/link";
import React from "react";

interface ILink {
  href: string;
  children: React.ReactNode;
}

const Link = ({ href, children }: ILink) => {
  return (
    <li className="inline mx-2 hover:opacity-50">
      <NextLink href={href}>{children}</NextLink>
    </li>
  );
};

export default Link;
