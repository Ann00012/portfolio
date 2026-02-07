
import css from './RunningText.module.css';

export default function RunningText() { 
    return (
     <>
                <div className={css.marquee}>
                    <div className={css.marquee__inner}>
                        <p className={css.marquee__line}>TypeScript <span className={css.dot}>·</span> React <span className={css.dot}>·</span> Next.js</p>
                        <p className={css.marquee__line}>TypeScript <span className={css.dot}>·</span> React <span className={css.dot}>·</span> Next.js</p>
  </div>
                </div>
              </> 
    )
}