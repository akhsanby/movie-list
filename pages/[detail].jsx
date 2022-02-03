import Layout from "../components/Layout";
import MovieBanner from "../components/MovieBanner";
import MovieDescription from "../components/MovieDescription";
import MovieScreenshots from "../components/MovieScreenshots";

export default function DetailMovie() {
  return (
    <Layout title="Detail Movie">
      <MovieBanner />
      <MovieDescription />
      <MovieScreenshots />
    </Layout>
  );
}
