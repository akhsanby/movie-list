import styles from "../styles/Footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      {/* <!-- footer logo --> */}
      <a href="#" className={styles.logo}>
        {" "}
        Movies<span>hd</span>{" "}
      </a>
      {/* <!-- copyright --> */}
      <span className={styles.copyright}> Copyright 2021 - GoingToInternet </span>
    </footer>
  );
}
