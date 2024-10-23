import Image from "next/image";
import styles from "./page.module.css";
import NavBar from "./components/Navbar";
import Link from "next/link";
import About from "@/page/About";
export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <h1>김민기 202030405 midterm\src\app\page.js</h1>
        <div>
          <NavBar />
        </div>
      </div>
    </main>
  );
}
