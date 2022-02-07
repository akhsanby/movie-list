/* eslint-disable @next/next/no-img-element */
import { Fragment } from "react";

// config
import { imageBaseUrl } from "../config/image";

// styles
import styles from "../styles/MovieScreenshots.module.scss";

export default function MovieScreenshots({ images }) {
  return (
    <section className={styles.screenshots}>
      <strong>Screenshots</strong>
      <div className={styles.screenshotsContainer}>
        {images.backdrops.splice(0, 4).map((image, index) => (
          <Fragment key={index}>
            <img src={imageBaseUrl(image.file_path)} alt="ss1" />
          </Fragment>
        ))}
      </div>
    </section>
  );
}
