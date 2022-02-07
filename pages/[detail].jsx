import Layout from "../components/Layout";
import MovieBanner from "../components/MovieBanner";
import MovieDescription from "../components/MovieDescription";
import MovieScreenshots from "../components/MovieScreenshots";

// api
import { fetchMoviesById, fetchMovieImagesById } from "../config/api";

export default function DetailMovie({ detailMovie, imagesMovie }) {
  return (
    <Layout title="Detail Movie">
      <MovieBanner movieData={detailMovie} />
      <MovieDescription title={detailMovie.title} description={detailMovie.overview} />
      <MovieScreenshots images={imagesMovie} />
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const [detailMovie, imagesMovie] = await Promise.all([fetchMoviesById(context.query.id), fetchMovieImagesById(context.query.id)]);
  return {
    props: {
      detailMovie,
      imagesMovie,
    },
  };
}
