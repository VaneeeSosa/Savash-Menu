import { useMemo, useState } from "react";

import type { Product } from "../../types/menu";

import ProductCard from "./ProductCard";
import ProductPagination from "./ProductPagination";

import "../../styles/ProductSection.css";

interface ProductSectionProps {
  id: string;
  title: string;
  description?: string;
  products: Product[];
}

const PRODUCTS_PER_PAGE = 5;

function ProductSection({
  id,
  title,
  description,
  products,
}: ProductSectionProps) {
  const [currentPage, setCurrentPage] =
    useState(1);

  const totalPages = Math.ceil(
    products.length / PRODUCTS_PER_PAGE
  );

  const visibleProducts = useMemo(() => {
    const start =
      (currentPage - 1) *
      PRODUCTS_PER_PAGE;

    const end =
      start + PRODUCTS_PER_PAGE;

    return products.slice(start, end);
  }, [products, currentPage]);

  const handlePageChange = (page: number) => {
    if (
      page < 1 ||
      page > totalPages
    ) {
      return;
    }

    setCurrentPage(page);

    /*
      Esperamos un frame para que React
      actualice el contenido antes del scroll.
    */
    requestAnimationFrame(() => {
      const section =
        document.getElementById(id);

      section?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  };

  return (
    <section
      id={id}
      className="menu-section"
    >
      <div className="menu-section__header">
        <h2 className="menu-section__title">
          {title}
        </h2>

        {description && (
          <p className="menu-section__description">
            {description}
          </p>
        )}
      </div>

      <div className="product-grid">
        {visibleProducts.map(
          (product, index) => (
            <ProductCard
              key={product.id}
              product={product}
              index={index}
            />
          )
        )}
      </div>

      <ProductPagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </section>
  );
}

export default ProductSection;