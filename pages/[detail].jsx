// components
import Layout from "../components/Layout";
import MovieBanner from "../components/MovieBanner";
import MovieDescription from "../components/MovieDescription";
import MovieCredits from "../components/MovieCredits";
import MovieScreenshots from "../components/MovieScreenshots";

// api
import { fetchMoviesById } from "../config/api";

export default function DetailMovie({ detailMovie }) {
  return (
    <Layout title="Detail Movie">
      <MovieBanner movieData={detailMovie} />
      <MovieDescription title={detailMovie.title} description={detailMovie.overview} />
      <MovieCredits credits={detailMovie.credits} />
      <MovieScreenshots images={detailMovie.images} />
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const data = await fetchMoviesById(context.query.id);

  return {
    props: {
      detailMovie: data,
    },
  };
}
