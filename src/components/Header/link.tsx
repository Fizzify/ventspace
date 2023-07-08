import Link from "next/link";
import React from "react";

type NavLinkType = {
  href: string;
  children: React.ReactNode;
  newTab: boolean;
};

const NavLink = ({ href, children, newTab }: NavLinkType) => {
  return (
    <li className="mx-2 inline hover:opacity-50">
      <Link href={href} target={newTab ? "_blank" : ""}>
        {children}
      </Link>
    </li>
  );
};

export default NavLink;
