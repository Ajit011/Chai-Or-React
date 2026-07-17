import { useState } from "react";
import "./ProductCard.css";

function ProductCard({ brand, title, price, discount, image }) {
  const [liked, setLiked] = useState(false);

  return (
    <div className="product-card">
      <img src={image} alt={title} />

      <div className="product-info">
        <h3>{brand}</h3>

        <p>{title}</p>

        <div className="price">
          <h4>₹{price}</h4>
          <span className="discount">{discount}</span>
        </div>

        <button
          className="wishlist-btn"
          onClick={() => setLiked(!liked)}
        >
          {liked ? "❤️ Wishlisted" : "🤍 Add to Wishlist"}
        </button>
      </div>
    </div>
  );
}

export default ProductCard;