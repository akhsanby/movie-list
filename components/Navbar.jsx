import { useState, useEffect } from "react";
import $ from "jquery";
import Link from "next/link";

// styles
import styles from "../styles/Navbar.module.scss";

export default function Navbar() {
  const [menuFixed, setMenuFixed] = useState(false);

  const handleMenuIcon = () => {
    $(window).scroll(function () {
      if ($(document).scrollTop() > 20) {
        return setMenuFixed(true);
      } else {
        return setMenuFixed(false);
      }
    });
  };

  useEffect(() => {
    handleMenuIcon();
  });

  return (
    <nav className={styles.navigation}>
      <input type="checkbox" className={styles.menuBtn} id="menu-btn" />
      <label htmlFor="menu-btn" className={menuFixed ? styles.menuIconFixed : styles.menuIcon}>
        <span></span>
      </label>

      <a href="#" className={styles.logo}>
        99Movies<span>.online</span>{" "}
      </a>

      <ul className={styles.menu}>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <a href="#">Genre</a>
        </li>
        <li>
          <a href="#">TV Shows</a>
        </li>
        <li>
          <a href="#">Movies</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>

      <form className={styles.searchBox}>
        <input type="text" name="search" placeholder="Search movie" className={styles.searchInput} />
        <button type="submit">
          <i className="fas fa-search"></i>
        </button>
      </form>
    </nav>
  );
}
