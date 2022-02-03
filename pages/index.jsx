import Layout from "../components/Layout";
import SliderContainer from "../components/SliderContainer";
import MovieCard from "../components/MovieCard";
import Pagination from "../components/Pagination";

// styles
import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <Layout title="Home">
      <SliderContainer />
      <section id={styles.latest}>
        <div className={styles.latestHeading}>
          <h1>Latest Movies</h1>
        </div>
        <div className={styles.postContainer}>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((el) => (
            <MovieCard key={el} />
          ))}
        </div>
      </section>
      <Pagination />
    </Layout>
  );
}
