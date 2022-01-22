import React from 'react';
import ReactPaginate from "react-paginate";

const Pagination = ({setPageNumber, pageNumber, info}) => {

  const pageChange = (data) => {
    setPageNumber(data.selected + 1);
  }

  return (
    <ReactPaginate
      pageCount={info?.pages}
      className="pagination justify-content-center my-4 gap-4" previousLabel="Prev"
      previousClassName="fs-4 prev"
      nextClassName="fs-4 next"
      activeClassName="active"
      pageClassName="page-item"
      pageLinkClassName="page-link"
      onPageChange={pageChange}
    />
  );
};

export default Pagination;