import Link from "next/link";

const Navbar = () => {
    return (
        <nav>
            <h1>UlisesNav</h1>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/projects">Projects</Link>
        </nav>
    );
}
 
export default Navbar;