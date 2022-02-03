// styles
import styles from "../styles/Pagination.module.scss";

export default function Pagination() {
  return (
    <div className={styles.pageNumber}>
      <i className="fas fa-chevron-left"></i>
      <a href="#" className={styles.pageActive}>
        1
      </a>
      <a href="#">2</a>
      <a href="#">3</a>
      ....
      <a href="#">100</a>
      <i className="fas fa-chevron-right"></i>
    </div>
  );
}
