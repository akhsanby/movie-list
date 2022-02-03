/* eslint-disable @next/next/no-img-element */
import styles from "../styles/MovieScreenshots.module.scss";

export default function MovieScreenshots() {
  return (
    <section className={styles.screenshots}>
      <strong>Screenshots</strong>
      <div className={styles.screenshotsContainer}>
        <img src="/Movie-Data/Pirates-of-the-Caribbean-Salazar's-Revenge/screenshot-1.jpg" alt="ss1" />
        <img src="/Movie-Data/Pirates-of-the-Caribbean-Salazar's-Revenge/screenshot-2.jpg" alt="ss2" />
        <img src="/Movie-Data/Pirates-of-the-Caribbean-Salazar's-Revenge/screenshot-3.jpg" alt="ss3" />
        <img src="/Movie-Data/Pirates-of-the-Caribbean-Salazar's-Revenge/screenshot-4.jpg" alt="ss4" />
      </div>
    </section>
  );
}
