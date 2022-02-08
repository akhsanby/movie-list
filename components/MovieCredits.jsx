/* eslint-disable @next/next/no-img-element */
import Image from "next/image";

// styles
import styles from "../styles/MovieCredits.module.scss";

// config
import { imageBaseUrl } from "../config/other";

export default function MovieCredits({ credits }) {
  return (
    <section className={styles.credits}>
      <strong>Casts</strong>
      <div className={styles.castContainer}>
        {credits.cast.map((cast, index) => (
          <div key={index}>
            <Image width={500} height={750} src={cast.profile_path ? imageBaseUrl(cast.profile_path) : "/img/500x750.png"} alt={cast.name} objectFit="cover" />
            <p>{cast.name}</p>
            <p>as {cast.character}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
