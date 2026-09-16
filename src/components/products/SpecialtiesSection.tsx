import { useMemo, useState } from "react";

import type { Product } from "../../types/menu";

import SpecialCard from "./SpecialCard";
import ProductPagination from "./ProductPagination";

import "../../styles/SpecialtiesSection.css";

interface SpecialtiesSectionProps {
  id: string;
  title: string;
  description?: string;
  products: Product[];
}

const PRODUCTS_PER_PAGE = 5;

function SpecialtiesSection({
  id,
  title,
  description,
  products,
}: SpecialtiesSectionProps) {
  const [currentPage, setCurrentPage] =
    useState(1);

  const totalPages = Math.ceil(
    products.length / PRODUCTS_PER_PAGE
  );

  const visibleProducts = useMemo(() => {
    const start =
      (currentPage - 1) *
      PRODUCTS_PER_PAGE;

    return products.slice(
      start,
      start + PRODUCTS_PER_PAGE
    );
  }, [products, currentPage]);

  const handlePageChange = (page: number) => {
    if (
      page < 1 ||
      page > totalPages
    ) {
      return;
    }

    setCurrentPage(page);

    requestAnimationFrame(() => {
      document
        .getElementById(id)
        ?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
    });
  };

  return (
    <section
      id={id}
      className="specialties-section"
    >
      <div className="specialties-section__header">
        <h2 className="specialties-section__title">
          {title}
        </h2>

        {description && (
          <p className="specialties-section__description">
            {description}
          </p>
        )}
      </div>

      <div className="specialties-grid">
        {visibleProducts.map(
          (product, index) => (
            <SpecialCard
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

export default SpecialtiesSection;