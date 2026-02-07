import css from "./AboutMe.module.css";
import Image from "next/image";

export default function AboutMe() {
  return (
    <section className={css.aboutSection}>
      <h2 className={css.aboutTitle}>
        ABOUT <span className={css.spanMe}>ME</span>
      </h2>

      <div className={css.flexContainer}>
        <div className={css.leftColumn}>
          <div className={css.imageWrapper}>
            <Image
              src="/photo.avif"
              alt="Anna Malchevska"
              width={450}
              height={450}
              className={css.aboutPhoto}
              priority
            />
          </div>

          <div className={css.infoBlock}>
            <h3 className={css.subTitle}>EDUCATION</h3>
            <ul className={css.list}>
              <li>
                2024-2028 /Computer Science,The Ivan Franko National University
                of Lviv
              </li>
              <li>2025 - 2026 /Full Stack developer, GoIT IT School</li>
            </ul>
          </div>
        </div>

        <div className={css.rightColumn}>
          <div className={css.infoBlock}>
            <h3 className={css.subTitle}>BIO</h3>
            <p className={css.text}>
              I’m Anna Malchevska, a talented programmer specializing in
              software development. Experienced in working within Scrum teams
              and managing tasks through Agile methodologies.
            </p>
            <p className={css.text}>
              I am eager to take on new challenges and contribute to impactful
              projects with high-quality, maintainable, and clean code
            </p>
          </div>

          <div className={css.infoBlock}>
            <h3 className={css.subTitle}>TECH SKILLS</h3>
            <ul className={css.list}>
              <li>JavaScript</li>
              <li>TypeScript</li>
              <li>React</li>
              <li>REST API</li>
              <li>Next.js</li>
              <li>TanStack Query</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
