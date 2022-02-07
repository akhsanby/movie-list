import NextNprogress from "nextjs-progressbar";
import "../styles/globals.scss";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NextNprogress color="#e70634" startPosition={0.3} stopDelayMs={200} height={2} showOnShallow={true} />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
