import React, { useMemo } from "react";

/**
 * Custom hook for managing pagination logic.
 * @param {number} pageNumber - The total number of pages.
 * @param {number} maxButtons - The maximum number of pagination buttons to display.
 * @param {number} middleButtons - The number of pagination buttons to display in the middle section.
 * @param {number} currentPage - The current active page number.
 * @returns {Object} - The pagination array.
 */

const usePagination = ({
  pageNumber,
  maxButtons,
  middleButtons,
  currentPage,
}) => {
  const pagination = useMemo(() => {
    let pageArray;

    const initialArray = [1, pageNumber];
    const dots = "...";

    const getArray = (length, startPage) => {
      return Array.from({ length }, (_, i) => startPage + i);
    };

    if (pageNumber <= maxButtons) {
      pageArray = Array.from({ length: pageNumber - 2 }, (_, i) => i + 2);
    } else if (currentPage <= 3) {
      pageArray = [...getArray(maxButtons - 2, 2), dots];
    } else if (currentPage > 3 && currentPage <= pageNumber - 3) {
      pageArray = [dots, ...getArray(middleButtons, currentPage - 1), dots];
    } else if (currentPage > pageNumber - 3) {
      pageArray = [
        dots,
        ...getArray(maxButtons - 2, pageNumber - maxButtons + 2),
      ];
    }

    initialArray.splice(1, 0, ...pageArray);

    return initialArray;
  }, [currentPage, pageNumber, maxButtons, middleButtons]);

  return { pagination };
};

export default usePagination;
