import Layout from "../components/Layout";
import MovieCard from "../components/MovieCard";
import Pagination from "../components/Pagination";

// styles
import styles from "../styles/Search.module.scss";

// api
import { fetchMovieByKeyword } from "../config/api";

export default function Search({ keyword, movieData }) {
  return (
    <Layout title="Search Movie">
      <section id={styles.latest}>
        <div className={styles.latestHeading}>
          <h1>Result For Movie : {keyword}</h1>
        </div>
        <div className={styles.postContainer}>
          {movieData.results.map((movie, index) => (
            <MovieCard key={index} popularMovie={movie} />
          ))}
        </div>
      </section>
      <Pagination />
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const data = await fetchMovieByKeyword(context.query.keyword);

  return {
    props: {
      keyword: context.query.keyword,
      movieData: data,
    },
  };
}
