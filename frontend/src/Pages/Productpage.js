import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { detailProduct } from "../actions/productAction"
function Productpage(props) {

  const productDetail = useSelector(state => state.productDetail);
  const { product, loading, error } = productDetail;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(detailProduct(props.match.params.id));
    return () => {
      //
    };
  }, [])
  return (
    <div>
      <div className="back-to-result">
        <Link to="/"> Back to result</Link>
      </div>
      {
        loading ? <div>Loading...</div> :
          error ? <div> {error}</div> : (
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
                  <li>Status : {product.status}</li>
                  <li>
                    Qty :
              <select>
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </select>
                  </li>
                  <li>
                    <button className="button-add-cart primary ">Add to cart</button>
                  </li>
                </ul>
              </div>
            </div>
          )
      }
    </div>
  );
}

export default Productpage;
