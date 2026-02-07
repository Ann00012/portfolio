import css from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={css.container}>
      <h1 className={css.title}>
        Hello, I am <span className={css.spanTitle}>Fullstack developer</span>
      </h1>
      <div className={css.bottomRow}>
        <Link href="/Contacts" className={css.orderBtn}>
          <span className={css.arrow}>→</span> CONTACT ME
        </Link>
        <p className={css.description}>
          I am specializing in{" "}
          <span className={css.spanDescription}>React</span>,
          <span className={css.spanDescription}> TypeScript </span> and
          <span className={css.spanDescription}> Next.js</span>
          . <br />
          Focused on clean code, performance optimization, and user-friendly
          interfaces.
        </p>
      </div>
    </div>
  );
}
