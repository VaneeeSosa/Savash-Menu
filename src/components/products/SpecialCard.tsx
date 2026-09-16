import type { Product } from "../../types/menu";

import "../../styles/SpecialCard.css";

interface SpecialCardProps {
  product: Product;
  index: number;
}

function SpecialCard({
  product,
  index,
}: SpecialCardProps) {
  return (
    <article
      className={`special-card special-card--${
        (index % 4) + 1
      }`}
    >
      <div className="special-card__number">
        {String(index + 1).padStart(2, "0")}
      </div>

      {product.image && (
        <div className="special-card__image-wrap">
          <img
            src={product.image}
            alt={product.name}
            className="special-card__image"
          />
        </div>
      )}

      <div className="special-card__content">
        <h3 className="special-card__title">
          {product.name}
        </h3>

        {product.description && (
          <p className="special-card__description">
            {product.description}
          </p>
        )}
      </div>

      {product.price !== null && (
        <div className="special-card__price">
          ${product.price}
        </div>
      )}
    </article>
  );
}

export default SpecialCard;