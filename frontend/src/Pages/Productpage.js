import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { detailProduct } from "../actions/productAction";
function Productpage(props) {
  const [qty, setQty] = useState(1);
  const productDetail = useSelector((state) => state.productDetail);
  const { product, loading, error } = productDetail;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(detailProduct(props.match.params.id));
    return () => {
      //
    };
  }, []);

  const handleAddToCart = () => {
    props.history.push("/cart/" + props.match.params.id + "?qty=" + qty)
  }
  return (
    <div>
      <div className="back-to-result">
        <Link to="/"> Back to result</Link>
      </div>
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div> {error}</div>
      ) : (
            <div className="details">
              <div className="detail-image">
                <img src={product.image} alt={product.id} />
              </div>
              <div className="detail-info">
                <ul>
                  <li>{product.name}</li>
                  <li>
                    {product.rating} Stars ({product.numReviews} Review)
              </li>
                  <li>
                    <b>${product.price}</b>
                  </li>
                  <li>
                    Desciiption
                <div>{product.description}</div>
                  </li>
                </ul>
              </div>
              <div className="detail-action">
                <ul>
                  <li>Price : {product.price}</li>
                  <li>Status : {product.countInStock > 0 ? "In Stock" : "Unavailable"}</li>
                  <li>
                    Qty :
                <select
                      value={qty}
                      onChange={(e) => {
                        setQty(e.target.value);
                      }}
                    >
                      {[...Array(product.countInStock).keys()].map((x) => (
                        <option key={x + 1} value={x + 1}>
                          {x + 1}
                        </option>
                      ))}
                    </select>
                  </li>
                  <li>
                    {
                      product.countInStock > 0 &&
                      <button onClick={handleAddToCart} className="button-add-cart primary ">
                        Add to cart
                      </button>
                    }
                  </li>
                </ul>
              </div>
            </div>
          )}
    </div>
  );
}

export default Productpage;
