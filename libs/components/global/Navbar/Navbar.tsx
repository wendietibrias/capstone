import Link from "next/link";

const Navbar = () => {
    return (
        <nav className="w-full">
            <Link href="/">
               <span>NextApp</span>
            </Link>
        </nav>
    )
}

export default Navbar;