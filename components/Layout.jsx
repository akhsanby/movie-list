import Head from "next/head";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ProgressBar from "./ProgressBar";

export default function Layout({ title, children }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        {/* <!-- fav icon --> */}
        <link rel="shortcut icon" href="/Images/fav-icon.png" />
        {/* <!-- custom icon --> */}
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/all.css" integrity="sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm" crossOrigin="anonymous" />
      </Head>
      <Navbar />
      <main>{children}</main>
      <Footer />
      <ProgressBar />
    </div>
  );
}
