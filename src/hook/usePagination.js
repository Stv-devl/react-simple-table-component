import React, { useMemo } from "react";

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
      pageArray = [...getArray(maxButtons - 1, 2), dots];
    } else if (currentPage >= 4 && currentPage <= pageNumber - 3) {
      pageArray = [dots, ...getArray(middleButtons, currentPage - 1), dots];
    } else if (currentPage >= pageNumber - 3) {
      pageArray = [dots, ...getArray(maxButtons - 2, pageNumber - 4)];
    }

    initialArray.splice(1, 0, ...pageArray);

    return initialArray;
  }, [currentPage, pageNumber, maxButtons, middleButtons]);

  return { pagination };
};

export default usePagination;
