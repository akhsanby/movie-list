/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

// components
import Layout from "../components/Layout";
import SliderContainer from "../components/SliderContainer";
import MovieCard from "../components/MovieCard";
import Pagination from "../components/Pagination";

// styles
import styles from "../styles/Home.module.scss";

// api
import { fetchPopularMovies, fetchUpcomingMovies } from "../config/api";

export default function Home({ upcomingMovies, popularMovies }) {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    router.replace({
      pathname: "/",
      query: { page: currentPage },
    });
  }, [currentPage]);

  return (
    <Layout title="Home">
      <SliderContainer upcomingMovies={upcomingMovies} />
      <section id={styles.popular}>
        <div className={styles.popularHeading}>
          <h1>Popular Movies</h1>
        </div>
        <div className={styles.postContainer}>
          {popularMovies.results.map((popularMovie, index) => (
            <MovieCard key={index} popularMovie={popularMovie} />
          ))}
        </div>
      </section>
      <Pagination movies={popularMovies} currentPage={currentPage} setCurrentPage={setCurrentPage} />
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const currentPage = context.query.page;
  // Fetch data from external API
  const [popularMovies, upcomingMovies] = await Promise.all([fetchPopularMovies(currentPage), fetchUpcomingMovies()]);

  // Pass data to the page via props
  return {
    props: {
      popularMovies,
      upcomingMovies,
    },
  };
}
