import Link from "./link";
import TabLink from "./tab_link";

const Header = () => {
  return (
    <header className="flex justify-around items-center py-5 bg-neutral-100 shadow">
      <Link href="/">
        <h3 className="font-light tracking-widest text-3xl uppercase cursor-pointer">
          Ventspace
        </h3>
      </Link>
      <ul>
        <Link href="/create">Create</Link>
        <TabLink href="https://github.com/Fizzify/ventspace">GitHub</TabLink>
      </ul>
    </header>
  );
};

export default Header;
