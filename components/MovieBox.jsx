/* eslint-disable @next/next/no-img-element */
import { Fragment } from "react";
import Link from "next/link";

// styles
import styles from "../styles/MovieBox.module.scss";

// config
import { imageBaseUrl } from "../config/image";
import { displayGenre, displayYear, convertToSlug } from "../config/other";

export default function MovieBox({ upcomingMovie }) {
  const voteRating = () => {
    if (upcomingMovie.vote_average === 0) {
      return "unrated";
    } else {
      return upcomingMovie.vote_average;
    }
  };

  return (
    <div className={styles.mainSliderBox}>
      <div className={styles.mainSliderOverlay}></div>
      <div className={styles.mainSliderImg}>
        <img src={imageBaseUrl(upcomingMovie.poster_path)} alt="Poster" />
      </div>

      <div className={styles.mainSliderText}>
        <div className={styles.rating}>
          <i className="fas fa-star"></i>
          <span>{voteRating()}</span>
        </div>
        <div className={styles.buttonText}>
          <div className={styles.movieName}>
            <span>{displayYear(upcomingMovie.release_date)}</span>
            <Link
              href={{
                pathname: "/[detail]",
                query: { id: upcomingMovie.id },
              }}
              as={`${convertToSlug(upcomingMovie.title)}-${displayYear(upcomingMovie.release_date)}`}
              passHref
            >
              {upcomingMovie.title}
            </Link>
          </div>
          <div className={styles.category}>
            {upcomingMovie.genre_ids.map((genre, index) => (
              <Fragment key={index}>
                <span>{displayGenre(genre)}</span>
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
