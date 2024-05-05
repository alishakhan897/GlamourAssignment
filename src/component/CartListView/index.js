import React from 'react';
import CartContext from "../../Context/CartContext";
import { CartList } from "./styledComponent";
import CartItem from "../CartItems";

const CartListView = () => {
    return (
        <CartContext.Consumer>
            {value => {
                const { cartList } = value;

                return (
                    <CartList className="cart-list">
                        {cartList.map(eachCartItem => (
                            <CartItem key={eachCartItem.id} cartItemDetails={eachCartItem} />
                        ))}
                    </CartList>
                );
            }}
        </CartContext.Consumer>
    );
}

export default CartListView;
