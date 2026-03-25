import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="w-full flex  py-5 items-center justify-between border-b border-gray-400">
      <Link href="/">
        <span className="font-bold text-xl">NextApp</span>
      </Link>
      <ul className="flex items-center gap-5">
        <li>
          <Link href="/">
            <span>Home</span>
          </Link>
        </li>
         <li>
          <Link href="/employee">
            <span>Employee</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
