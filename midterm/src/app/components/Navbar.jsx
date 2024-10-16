import Link from "next/link";

export default function NavBar() {
  return (
    <nav>
      <Link href="/">Home</Link>
      <Link href="../page/About.jsx">About</Link>
      <Link href="../page/Contact.jsx">Contact</Link>
      <Link href="../page/Slug.jsx">Slug</Link>
    </nav>
  );
}
