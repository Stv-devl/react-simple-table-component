import React from "react";
import usePagination from "../../hook/usePagination";

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
    <div className="paging-container">
      {pageNumber > 3 ? (
        <button onClick={() => changePage(Math.max(1, currentPage - 1))}>
          Previous
        </button>
      ) : null}
      <>
        {pagination && pageNumber > 1
          ? pagination.map((page, index) => (
              <button
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
          onClick={() => changePage(Math.min(pageNumber, currentPage + 1))}
        >
          Next
        </button>
      ) : null}
    </div>
  );
};

export default Paging;
