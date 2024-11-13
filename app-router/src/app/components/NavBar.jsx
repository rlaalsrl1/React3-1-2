import Link from "next/link";

export default function NavBar() {
  return (
    <nav>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/blog">Blog</Link>
      <Link href="/cssEx">CssEX</Link>
      <Link href="/cssEx2">CssEX2</Link>
      <Link href="/rest-api">Axios</Link>
      <Link href="/cssModule">CssModule</Link>
      <Link href="/sassEx">SassEx</Link>
      <Link href="/"></Link>
    </nav>
  );
}
