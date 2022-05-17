import { useState, useEffect } from "react";
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";

// components
import { PaginationStyles } from "./Pagination.styles";

// types
import { PaginationInterface } from "src/types/components/Pagination.types";

function Pagination({ page, pageSize, total, onChange }: PaginationInterface) {
  const [activePage, setActivePage] = useState(page || 1);

  useEffect(() => {
    setActivePage(page);
  }, [page])

  const lastPage = Math.ceil(total / pageSize);
  const pagesTyRender = new Array(lastPage).fill(null);

  const handleChange = (newPage: number) => {
    onChange && onChange(newPage);

    setActivePage(newPage);
  }

  const renderPageBlock = (pageNumber: number) => (
    <div
      key={`page-${pageNumber}`}
      onClick={() => handleChange(pageNumber)}
      className={`pagination-single-page ${pageNumber === activePage ? "pagination-single-page_active" : ""}`}
    >
      { pageNumber }
    </div>
  )

  if (lastPage === 1) return null;

  return (
    <PaginationStyles>
      <div className="pagination-single-page" onClick={() => activePage !== 1 && handleChange(activePage - 1)}>
        <BsArrowLeftCircle/>
      </div>
      { activePage !== 1
        ? renderPageBlock(1)
        : null
      }
      {
        pagesTyRender.slice(activePage, activePage + 3).map((_, index) => renderPageBlock(activePage + index))
      }
      { renderPageBlock(lastPage) }
      <div className="pagination-single-page" onClick={() => activePage !== lastPage && handleChange(activePage + 1)}>
        <BsArrowRightCircle/>
      </div>
    </PaginationStyles>
  );
}

export default Pagination;
