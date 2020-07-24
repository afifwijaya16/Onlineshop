import React from "react";
import { Link } from "react-router-dom";
import data from "../data";
function Productpage(props) {
  //   console.log(props.match.params.id);
  const product = data.products.find((x) => x._id === props.match.params.id);
  return (
    <div className="product">
      <Link to={"/product/" + product._id}>
        <img className="product-image" src={product.image} alt="product" />
      </Link>
      <div className="product-name">
        <Link to={"/product/" + product._id}>{product.name}</Link>
      </div>
      <div className="product-brand">${product.brand}</div>
      <div className="product-price">{product.price}</div>
      <div className="product-rating">
        {product.rating} Stars ({product.numReview} review)
      </div>
    </div>
  );
}

export default Productpage;
