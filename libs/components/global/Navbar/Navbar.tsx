import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="w-full flex bg-gray-800 px-20 text-white py-3 items-center justify-between border-b border-gray-400">
      <Link href="/">
        <span className="font-bold text-xl">Event0</span>
      </Link>
      <ul className="flex items-center gap-5">
        <li>
          <Link href="/">
            <span className="text-[0.8rem]">Home</span>
          </Link>
        </li>
             <li>
          <Link href="/about">
            <span className="text-[0.8rem]">About</span>
          </Link>
        </li>
                 <li>
          <Link href="/about">
            <span className="text-[0.8rem]">Event</span>
          </Link>
        </li>
       
      </ul>
    </nav>
  );
};

export default Navbar;
