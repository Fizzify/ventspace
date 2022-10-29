import NextLink from "next/link";
import React from "react";

interface ITabLink {
  href: string;
  children: React.ReactNode;
}

const TabLink = ({ href, children }: ITabLink) => {
  return (
    <li className="inline mx-2 hover:opacity-50">
      <NextLink href={href} passHref>
        <a target="__blank">{children}</a>
      </NextLink>
    </li>
  );
};

export default TabLink;
