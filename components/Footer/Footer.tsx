import css from "./Footer.module.css";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className={css.footer}>
      <div className={css.container}>
        <ul className={css.list}>
          <li>
            <Link
              href="https://www.linkedin.com/in/malchevska-anna/"
              target="_blank"
              rel="noopener noreferrer"
              className={css.link}
            >
              Linkedin
            </Link>
          </li>
          <li>
            <Link
              href="https://github.com/Ann00012"
              target="_blank"
              rel="noopener noreferrer"
              className={css.link}
            >
              GitHub
            </Link>
          </li>
        </ul>
        <p className={css.copy}>© 2026 Anna Malchevska</p>
      </div>
    </footer>
  );
}
