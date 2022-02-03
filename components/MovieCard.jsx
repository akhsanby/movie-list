/* eslint-disable @next/next/no-img-element */
// styles
import styles from "../styles/MovieCard.module.scss";

export default function MovieCard() {
  return (
    <div className={styles.postBox}>
      <div className={styles.postImg}>
        <img src="/Images/post-1.jpg" alt="post" />
      </div>

      <div className={styles.mainMovieCardText}>
        <span className={styles.quality}>Full HD</span>

        <div className={styles.buttonText}>
          <div className={styles.movieName}>
            <span>2014</span>
            <a href="#">Paranormal Activity: The Marked Ones</a>
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
