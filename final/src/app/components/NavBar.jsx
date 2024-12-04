import Link from "next/link";

export default function NavBar() {
  return (
    <nav>
      <Link href="/">Home</Link>
    
      <Link href="/about">about</Link>
      
      <Link href="/contact">contact</Link>
    </nav>
  );
}
