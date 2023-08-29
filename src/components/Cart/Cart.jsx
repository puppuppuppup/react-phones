import React from "react";
import styles from "./Cart.module.scss"
import CartItem from "../CartItem/CartItem";

const Cart = ({ cartItems }) => {
    return (
        <div className={ styles.overlay }>
            <div className={ styles.cart }>
                <h3 className={styles.cart__title}>Корзина</h3>
                    <div className={ styles.cart__items }>
                        <CartItem />
                        <CartItem />
                    </div>
            </div>
        </div>
    );
};

export default Cart;
