import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
    return (
        <>
            <nav>
                <h1>UlisesNav</h1>
                <Image src="/next.svg" width={150} height={30} />
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
                <Link href="/projects">Projects</Link>
                <Link href="/blog">Blog</Link>
            </nav>
        </>
    );
}
 
export default Navbar;