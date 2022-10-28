import NextLink from "next/link";
import React from "react";

interface ILink {
  href: string;
  children: React.ReactNode;
}

const Link = ({ href, children }: ILink) => {
  return (
    <li>
      <NextLink href={href}>{children}</NextLink>
    </li>
  );
};

export default Link;
