/* eslint-disable @next/next/no-img-element */
import { Fragment } from "react";

// styles
import styles from "../styles/MovieCard.module.scss";

// config
import { imageBaseUrl } from "../config/image";
import { displayGenre, displayYear } from "../config/other";

export default function MovieCard({ popularMovie }) {
  return (
    <div className={styles.postBox}>
      <a href="#" className={styles.postBoxOverlay}></a>
      <div className={styles.postImg}>
        <img src={imageBaseUrl(popularMovie.poster_path)} alt="poster" />
      </div>

      <div className={styles.mainMovieCardText}>
        <span className={styles.quality}>Full HD</span>

        <div className={styles.buttonText}>
          <div className={styles.movieName}>
            <span>{displayYear(popularMovie.release_date)}</span>
            <a href="#">{popularMovie.title}</a>
          </div>

          <div className={styles.categoryRating}>
            <div className={styles.category}>
              {popularMovie.genre_ids.map((genre, index) => (
                <Fragment key={index}>
                  <a href="">{displayGenre(genre)}</a>
                </Fragment>
              ))}
            </div>

            <div className={styles.rating}>
              {popularMovie.vote_average} <img src="/Images/IMDb-icon.png" alt="imdb" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
