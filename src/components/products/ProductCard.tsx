import type { Product } from "../../types/menu";
import "../../styles/ProductCard.css";


interface ProductCardProps {
  product: Product;
  index: number;
}

function ProductCard({
  product,
  index,
}: ProductCardProps) {
  return (
    <article
      className={`product-card product-card--${index + 1}`}
    >
      <div className="product-card__photo">
        {product.image ? (
          <img
            src={product.image}
            alt={product.name}
            className="product-card__image"
          />
        ) : (
          <div
            className="product-card__fake-cup"
            style={{
              "--drink": product.drinkColor ?? "#d8c6aa",
            } as React.CSSProperties}
          />
        )}
      </div>

      <div className="product-card__meta">
        <div className="product-card__type">
          {product.type ?? "bebida"}
        </div>

        <h3 className="product-card__name">
          {product.name}
        </h3>

        {product.description && (
          <p className="product-card__description">
            {product.description}
          </p>
        )}
      </div>

      {product.price !== null && (
        <div className="product-card__price">
          ${product.price}
        </div>
      )}
    </article>
  );
}

export default ProductCard;