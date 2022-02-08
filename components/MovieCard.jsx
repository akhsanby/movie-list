/* eslint-disable @next/next/no-img-element */
import { Fragment } from "react";
import Link from "next/link";
import Image from "next/image";

// styles
import styles from "../styles/MovieCard.module.scss";

// config
import { imageBaseUrl } from "../config/image";
import { displayGenre, displayYear, convertToSlug } from "../config/other";

export default function MovieCard({ popularMovie }) {
  return (
    <Link
      href={{
        pathname: "/[detail]",
        query: { id: popularMovie.id },
      }}
      as={`/${convertToSlug(popularMovie.title)}-${displayYear(popularMovie.release_date)}`}
    >
      <a>
        <div className={styles.postBox}>
          <div className={styles.postImg}>
            <Image src={imageBaseUrl(popularMovie.poster_path)} alt="poster" layout="fill" objectFit="cover" />
          </div>

          <div className={styles.mainMovieCardText}>
            <div className={styles.rating}>
              <i className="fas fa-star"></i>
              <span>{popularMovie.vote_average}</span>
            </div>

            <div className={styles.buttonText}>
              <div className={styles.movieName}>
                <span>{displayYear(popularMovie.release_date)}</span>
                <p>{popularMovie.title}</p>
              </div>

              <div className={styles.category}>
                {popularMovie.genre_ids.map((genre, index) => (
                  <Fragment key={index}>
                    <span>{displayGenre(genre)}</span>
                  </Fragment>
                ))}
              </div>
            </div>
          </div>
        </div>
      </a>
    </Link>
  );
}
