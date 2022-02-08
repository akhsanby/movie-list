/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-no-target-blank */
import { Fragment } from "react";
import Image from "next/image";

// styles
import styles from "../styles/MovieBanner.module.scss";

// config
import { imageBaseUrl } from "../config/image";
import { displayGenre, displayDate } from "../config/other";

export default function MovieBanner({ movieData }) {
  const videoTrailer = movieData.videos.results.find((video) => video.type === "Trailer" && video.official === true);

  return (
    <section className={styles.movieBanner}>
      <div className={styles.movieBannerImg}>
        <Image src={imageBaseUrl(movieData.backdrop_path)} alt="banner" layout="fill" />
      </div>

      <div className={styles.bannerContainer}>
        <div className={styles.titleContainer}>
          <div className={styles.titleTop}>
            <div className={styles.movieTitle}>
              <h1>{movieData.title}</h1>
              <h3>{movieData.tagline}</h3>
            </div>
            <div className={styles.moreAboutMovie}>
              <div className={styles.rating}>
                <i className="fas fa-star"></i>
                <span>{movieData.vote_average}</span>
              </div>
              <span>{displayDate(movieData.release_date)}</span>
              <span>{movieData.runtime}min</span>
            </div>
            <div className={styles.language}>
              <span>{movieData.original_language === "en" ? "English" : "Other"}</span>
            </div>
          </div>

          <div className={styles.titleBottom}>
            <div className={styles.category}>
              <strong>Category</strong>
              <br />
              {movieData.genres.map((genre, index) => (
                <Fragment key={index}>
                  <span>{displayGenre(genre.id)}</span>
                </Fragment>
              ))}
            </div>
            {videoTrailer ? (
              <a href={`https://www.youtube.com/watch?v=${videoTrailer.key}`} target="_blank" className={styles.watchBtn}>
                Watch Trailer
              </a>
            ) : (
              <a className={styles.watchBtnDisabled}>Trailer Not Available</a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
