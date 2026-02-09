import Image from 'next/image';
import { getNotehub } from '@/components/services/lib';
import Link from 'next/link';
import css from './Project.module.css';

export default async function Projects() {
  const project = await getNotehub();

  return (
      <section className={css.projects}>
      <h2>
        MY <span>PROJECT</span>
      </h2>

          <div className={css.card}>
              <div className={css.image}>
          <Image
            src={`https://opengraph.githubassets.com/1/${project.full_name}`}
            alt={project.name}
            fill
            priority
          />
        </div>

              <div className={css.content}>
          <h3>{project.name}</h3>
          <p>{project.description}</p>

                  <div className={css.meta}>
            <span>{project.language}</span>
            <span> {project.stargazers_count}</span>
          </div>

          <Link href={project.html_url} target="_blank" rel="noopener noreferrer">
            VIEW ON GITHUB ↗
          </Link>
        </div>
      </div>
    </section>
  );
}

