import Link from "next/link";

export default function NavBar() {
  return (
    <nav>
      <Link href="/">Home</Link>
      <br />
      <Link href="/page/About.jsx">About</Link>
      <br />
      <Link href="/page/Contact.jsx">Contact</Link>
      <br />
      <Link href="/page/Slug.jsx">Slug</Link>
    </nav>
  );
}
