import UsePagination from '../../../hooks/UsePagination';

const Pagination = ({ page, changePage, totalPages }) => {
  let pagesArray = UsePagination(totalPages);
  return (
    <div className="page_wrapper">
      {pagesArray.map((p) => (
        <span
          onClick={() => changePage(p)}
          key={p}
          className={page === p ? 'page page_current' : 'page'}
        >
          {p}
        </span>
      ))}
    </div>
  );
};

export default Pagination;
