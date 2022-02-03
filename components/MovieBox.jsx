/* eslint-disable @next/next/no-img-element */

import styles from "../styles/MovieBox.module.scss";

export default function MovieBox() {
  return (
    <div className={styles.mainSliderBox}>
      <div className={styles.mainSliderImg}>
        <img src="/Images/p-1.jpg" alt="Poster" />
      </div>

      <div className={styles.mainSliderText}>
        <span className={styles.quality}>Full HD</span>
        <div className={styles.buttonText}>
          <div className={styles.movieName}>
            <span>2014</span>
            <strong>Paranormal Activity: The Marked Ones</strong>
          </div>
          <div className={styles.categoryRating}>
            <div className={styles.category}>
              <a href="">Horror</a>, <a href="">Mistery</a>,<a href="">Thriller</a>
            </div>
            <div className={styles.rating}>
              5.2 <img src="/Images/IMDb-icon.png" alt="imdb" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
