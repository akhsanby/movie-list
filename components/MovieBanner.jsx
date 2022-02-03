/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-no-target-blank */

import styles from "../styles/MovieBanner.module.scss";

export default function MovieBanner() {
  return (
    <section className={styles.movieBanner}>
      <div className={styles.movieBannerImg}>
        <img src="/Movie-Data/Pirates-of-the-Caribbean-Salazar's-Revenge/cover.jpg" alt="banner" />
      </div>

      <div className={styles.bannerContainer}>
        <div className={styles.titleContainer}>
          <div className={styles.titleTop}>
            <div className={styles.movieTitle}>
              <h1>Pirates of the Caribbean Salazar's Revenge</h1>
            </div>
            <div className={styles.moreAboutMovie}>
              <span className={styles.quality}>Full HD</span>
              <div className={styles.rating}>
                8.2 <img src="/Images/IMDb-icon.png" alt="imdb" />
              </div>
              <span>28 August 2017</span>
              <span>87min</span>
            </div>
            <div className={styles.language}>
              <span>English</span>
            </div>
          </div>

          <div className={styles.titleBottom}>
            <div className={styles.category}>
              <strong>Category</strong>
              <br />
              <a href="#">Horror</a>,<a href="#">Mistery</a>,<a href="#">Thriller</a>
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
