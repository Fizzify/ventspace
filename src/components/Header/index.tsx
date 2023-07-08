import NavLink from "./link";

const Header = () => {
  return (
    <header className="flex items-center justify-around bg-neutral-100 py-5 shadow">
      <NavLink href="/" newTab={false}>
        <h3 className="cursor-pointer text-3xl font-light uppercase tracking-widest">
          Ventspace
        </h3>
      </NavLink>
      <ul>
        <NavLink href="/create" newTab={false}>
          Create
        </NavLink>
        <NavLink href="https://github.com/Fizzify/ventspace" newTab={true}>
          GitHub
        </NavLink>
      </ul>
    </header>
  );
};

export default Header;
