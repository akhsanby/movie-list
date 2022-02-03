import Layout from "../components/Layout";
import MovieCard from "../components/MovieCard";
import Pagination from "../components/Pagination";

// styles
import styles from "../styles/Search.module.scss";

export default function Search() {
  return (
    <Layout title="Search Movie">
      <section id={styles.latest}>
        <div className={styles.latestHeading}>
          <h1>Result For Movie</h1>
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
