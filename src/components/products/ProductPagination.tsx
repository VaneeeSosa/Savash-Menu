import "../../styles/ProductPagination.css";

interface ProductPaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

function ProductPagination({
  currentPage,
  totalPages,
  onPageChange,
}: ProductPaginationProps) {
  if (totalPages <= 1) {
    return null;
  }

  return (
    <nav
      className="product-pagination"
      aria-label="Paginación de productos"
    >
      <button
        type="button"
        className="product-pagination__arrow"
        onClick={() =>
          onPageChange(currentPage - 1)
        }
        disabled={currentPage === 1}
        aria-label="Página anterior"
      >
        ←
      </button>

      <div className="product-pagination__pages">
        {Array.from(
          { length: totalPages },
          (_, index) => {
            const page = index + 1;
            const active =
              page === currentPage;

            return (
              <button
                key={page}
                type="button"
                className={`product-pagination__page ${
                  active
                    ? "product-pagination__page--active"
                    : ""
                }`}
                onClick={() =>
                  onPageChange(page)
                }
                aria-current={
                  active ? "page" : undefined
                }
              >
                {page}
              </button>
            );
          }
        )}
      </div>

      <button
        type="button"
        className="product-pagination__arrow"
        onClick={() =>
          onPageChange(currentPage + 1)
        }
        disabled={currentPage === totalPages}
        aria-label="Página siguiente"
      >
        →
      </button>
    </nav>
  );
}

export default ProductPagination;