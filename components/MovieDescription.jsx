/* eslint-disable react/no-unescaped-entities */
import styles from "../styles/MovieDescription.module.scss";

export default function MovieDescription({ title, description }) {
  return (
    <section className={styles.movieDetails}>
      <strong>{title}</strong>
      <p>{description}</p>
    </section>
  );
}
