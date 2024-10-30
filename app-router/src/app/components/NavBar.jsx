import Link from "next/link";

export default function NavBar() {
  return (
    <nav>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/blog">Blog</Link>
      <Link href="/">\</Link>
      <Link href="/rest-api">Axios</Link>
      <Link href="/"></Link>
    </nav>
  );
}
