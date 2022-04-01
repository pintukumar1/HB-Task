import { useContext } from "react";
import { Link } from "react-router-dom";
import Card from "../components/UI/Card";
import LoadingSpinner from "../components/UI/LoadingSpinner";
import AppContext from "../context/app-context";
// import { addQty, subtractQty, removeFromCart } from "../actions/actions";
import "./Cart.css"

function Cart() {

  const appCtx = useContext(AppContext)

  function getTotal() {
    let total = 0;
    appCtx.products.map((product) => {
      if (product.inCart === true) {
        total = total + product.price * product.qty;
      }
      return "";
    });
    return total;
  }

  if (appCtx.products.length === 0) {
    return <LoadingSpinner/>
  }

  return (
    <div>
      {appCtx.products.map((product) => {
        if (product.inCart === true) {
          return (
            <Card className="cart-item__content" style={{textAlign: "center"}} key={product.id}>
              <Link to={`/products/${product.id}`}>
                <div className="cart-item__image">
                  <img src={product.image} alt="product" />
                </div>
                <div className="cart-item__info">
                  <p> {product.title}</p>
                  <span>{(product.qty * product.price).toFixed(2)}</span>
                </div>
              </Link>
              
              <div className="cart-nav">
                <div className="cart-qty">
                  <span>{product.qty}</span>
                  <p>Qty</p>
                </div>
                <button onClick={() => appCtx.addToCart(product.id)}>+</button>
              </div>
            </Card>
          );
        }
        return "";
      })}
      <div className="cart-total center">
        {getTotal() === 0 ? (
          <span className="start-shopping">Start Shopping!</span>
        ) : (
          `Total: ${getTotal().toFixed(2)}`
        )}
      </div>
      </div>
  );
}

export default Cart;
