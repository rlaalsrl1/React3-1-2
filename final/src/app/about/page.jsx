import NavBar from "../components/NavBar";
import styles from "@/app/css/my.module.css"
export default function AboutPage(){
    return(
        <div>

            <h1 className={styles.name}>김민기</h1>
            <h1 className={styles.no}>202030405</h1>
            <h1 className={styles.path}>final\src\app\about\page.jsx</h1>
        </div>
    )
}