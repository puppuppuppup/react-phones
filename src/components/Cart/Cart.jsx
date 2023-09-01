import React, { useEffect } from "react";
import styles from "./Cart.module.scss";
import CartItem from "./CartItem/CartItem";
import CartPrice from "./CartPrice/CartPrice";

const Cart = ({ cart, openCart, cartItems }) => {

    return (
        <div className={ cart.opened ? `${styles.overlay} ${ styles.active }` : styles.overlay }>
            <div className={styles.cart}>
                <h3 className={styles.cart__title}>
                    Корзина
                    <img
                        className={styles.cart__close}
                        src="/images/svg/item-delete.svg"
                        alt="Закрыть корзину"
                        onClick={ openCart }
                    />
                </h3>
                <div className={styles.cart__items}>
                    { cartItems.length 
                    ? cartItems.map((item, index) => {
                        return <CartItem key={index} item={item} />
                    })
                    : <div>Empty</div>}
                </div>
                <div className={styles.cart__order}>
                    <CartPrice name="Итого" value="21498" />
                    <CartPrice name="Налог 5%" value="1074" />
                    <button
                        className={styles.cart__btn}
                        style={{
                            backgroundImage:
                                "url(/images/svg/btn-order-arrow.svg)",
                        }}
                    >
                        Оформить заказ
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Cart;
