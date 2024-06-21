import React from "react";
import usePagination from "../../hook/usePagination";
import styles from "../../styles/index.module.scss";

const Paging = ({
  pageNumber,
  currentPage,
  maxButtons,
  middleButtons,
  changePage,
}) => {
  const { pagination } = usePagination({
    pageNumber,
    currentPage,
    maxButtons,
    middleButtons,
  });

  return (
    <div className={styles.pagingcontainer}>
      {pageNumber > 3 ? (
        <button
          className={styles.btnpaging}
          onClick={() => changePage(Math.max(1, currentPage - 1))}
        >
          Previous
        </button>
      ) : null}
      <>
        {pagination && pageNumber > 1
          ? pagination.map((page, index) => (
              <button
                className={`${styles.btnpaging} ${
                  page === currentPage ? styles.active : ""
                }`}
                key={index}
                disabled={page === "..." || page === currentPage}
                onClick={(e) => changePage(parseInt(e.target.textContent))}
              >
                {page}
              </button>
            ))
          : null}
      </>
      {pageNumber > 3 ? (
        <button
          className={styles.btnpaging}
          onClick={() => changePage(Math.min(pageNumber, currentPage + 1))}
        >
          Next
        </button>
      ) : null}
    </div>
  );
};

export default Paging;
