import React from "react";
import styles from "./Cart.module.scss";
import CartItem from "./CartItem/CartItem";
import CartPrice from "./CartPrice/CartPrice";

const Cart = ({ cartItems }) => {
    return (
        <div className={styles.overlay}>
            <div className={styles.cart}>
                <h3 className={styles.cart__title}>Корзина</h3>
                <div className={styles.cart__items}>
                    <CartItem />
                    <CartItem />
                </div>
                <div className={styles.cart__order}>
                    <CartPrice name="Итого" value="21498" />
                    <CartPrice name="Налог 5%" value="1074" />
                    <button
                        className={styles.cart__btn}
                        style={{ backgroundImage: "url(/images/svg/btn-order-arrow.svg)" }}
                    >
                        Оформить заказ
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Cart;
