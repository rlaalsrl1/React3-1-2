import styles from "@/app/css/my.module.css"
import NavBar from "./components/NavBar";

export default function Home() {
  return (

    <div>
          <NavBar></NavBar>
          <h1 className={styles.name}>김민기</h1>
            <h1 className={styles.no}>202030405</h1>
            <h1 className={styles.path}>final\src\app\page.js</h1>
    </div>

  );
}
