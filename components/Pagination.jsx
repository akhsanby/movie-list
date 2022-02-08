// styles
import styles from "../styles/Pagination.module.scss";
import ReactPaginate from "react-paginate";

export default function Pagination({ movies, currentPage, setCurrentPage }) {
  return (
    <div>
      <ReactPaginate previousLabel={<i className="fas fa-chevron-left"></i>} nextLabel={<i className="fas fa-chevron-right"></i>} breakLabel="...." pageCount={500} onPageChange={(event) => setCurrentPage(event.selected + 1)} containerClassName={styles.pageNumber} activeClassName={styles.pageActive} />
    </div>
  );
}
