/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-no-target-blank */
import { Fragment } from "react";

// styles
import styles from "../styles/MovieBanner.module.scss";

// config
import { imageBaseUrl } from "../config/image";
import { displayGenre, displayDate } from "../config/other";

export default function MovieBanner({ movieData }) {
  return (
    <section className={styles.movieBanner}>
      <div className={styles.movieBannerImg}>
        <img src={imageBaseUrl(movieData.backdrop_path)} alt="banner" />
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
                  <a href="">{displayGenre(genre.id)}</a>
                </Fragment>
              ))}
            </div>
            <a href="https://www.youtube.com/watch?v=ZgQkEf3dQ08" target="_blank" className={styles.watchBtn}>
              Watch Trailer
            </a>
          </div>
        </div>
        <div className={styles.playBtnContainer}>
          <div className={styles.playBtn}>
            <a href="javascript:void">
              <i className="fas fa-play"></i>
            </a>
          </div>
        </div>
        <div id="play" className={styles.play}>
          <a href="javascript:void" className={styles.closeMovie}>
            <i className="fas fa-times"></i>
          </a>
          <div className={styles.playMovie}>
            <video id="m-video" controls>
              <source src="/Movie-Data/Pirates-of-the-Caribbean-Salazar's-Revenge/Movie.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </section>
  );
}
