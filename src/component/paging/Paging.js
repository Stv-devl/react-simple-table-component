import React from "react";
import usePagination from "../../hook/usePagination";
import styles from "../../styles/index.module.scss";

/**
 * Paging component
 * Renders pagination controls for navigating through pages of data.
 * @param {number} pageNumber - The total number of pages.
 * @param {number} currentPage - The current active page.
 * @param {number} maxButtons - The maximum number of pagination buttons to display.
 * @param {number} middleButtons - The number of pagination buttons to display in the middle section.
 * @param {function} changePage - The function to handle changing the page.
 * @returns {JSX.Element} - The Paging component.
 */

const Paging = ({
  pageNumber,
  currentPage,
  maxButtons,
  middleButtons,
  changePage,
  pagingColor,
  checkedBtn,
}) => {
  const { pagination } = usePagination({
    pageNumber,
    currentPage,
    maxButtons,
    middleButtons,
  });

  const style = {
    "--pagingcolor": pagingColor || "#3498db",
    "--checkedbtn": checkedBtn || "##545353",
  };
  return (
    <div className={styles.pagingcontainer}>
      {pageNumber > 3 ? (
        <button
          style={style}
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
                style={style}
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
          style={style}
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
