import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

const CartWidget = () => {
    const {cartTotal} = useContext(CartContext);

    return  (
<Link to={"/cart"} className="btn position-relative" title="Ir al Carrito">
    <img src={"../images/cart3.svg"} alt={"Carrito"} width={24} />
   {cartTotal() > 0 && <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{cartTotal()}</span>}
</Link> 
)
    
}

export default CartWidget;















