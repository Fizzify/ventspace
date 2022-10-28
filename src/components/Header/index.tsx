import Link from "next/link";

const Header = () => {
  return (
    <header className="flex justify-around items-center py-5 bg-neutral-100">
      <Link href="/">
        <h3 className="font-light tracking-widest text-3xl uppercase cursor-pointer">
          Ventspace
        </h3>
      </Link>
      <ul>
        <Link href="/create">Create</Link>
      </ul>
    </header>
  );
};

export default Header;
