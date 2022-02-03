/* eslint-disable @next/next/no-img-element */
import { Fragment } from "react";

// styles
import styles from "../styles/MovieBox.module.scss";

// config
import { imageBaseUrl } from "../config/image";
import { displayGenre, displayYear } from "../config/other";

export default function MovieBox({ upcomingMovie }) {
  return (
    <div className={styles.mainSliderBox}>
      <a href="#" className={styles.mainSliderOverlay}></a>
      <div className={styles.mainSliderImg}>
        <img src={imageBaseUrl(upcomingMovie.poster_path)} alt="Poster" />
      </div>

      <div className={styles.mainSliderText}>
        <span className={styles.quality}>Full HD</span>
        <div className={styles.buttonText}>
          <div className={styles.movieName}>
            <span>{displayYear(upcomingMovie.release_date)}</span>
            <strong>{upcomingMovie.title}</strong>
          </div>
          <div className={styles.categoryRating}>
            <div className={styles.category}>
              {upcomingMovie.genre_ids.map((genre, index) => (
                <Fragment key={index}>
                  <a href="">{displayGenre(genre)}</a>
                </Fragment>
              ))}
            </div>
            <div className={styles.rating}>
              {upcomingMovie.vote_average} <img src="/Images/IMDb-icon.png" alt="imdb" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
