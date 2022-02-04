import Link from "next/link";
import Image from "next/image"

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <Image src="/Javohir-logo3.png" width={77} height={77} />
      </div>
      <Link href="/"><a>Home</a></Link>
      <Link href="/about"><a>About</a></Link>
      <Link href="/friends"><a>Friends list</a></Link>
    </nav>
  );
}

export default Navbar;