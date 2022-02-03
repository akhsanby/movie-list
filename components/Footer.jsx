import styles from "../styles/Footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <a href="#" className={styles.logo}>
        {" "}
        99Movies<span>.online</span>{" "}
      </a>
      <span className={styles.copyright}>
        {" "}
        Copyright 2022 - Modified with <i className="fas fa-heart"></i> by Akhsan{" "}
      </span>
    </footer>
  );
}
