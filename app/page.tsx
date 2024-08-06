import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      Home page
      <Link href="/favorites">Favorites</Link>
    </main>
  );
}
