import styles from "./CartItem.module.scss";
import React from "react";

const CartItem = () => {
    return (
        <div className={ styles.item }>
            <img className={ styles.item__img } src="/images/phone-1.jpeg" alt="Phone photo" />
            <div className={ styles.item__info }>
                <p className={ styles.item__name }>
                    Apple iPhone 14 Pro Max dual-SIM 256 ГБ
                </p>
                <b className={ styles.item__price }>12 999 руб.</b>
            </div>
            <img className={ styles.item__delete } src="/images/svg/item-delete.svg" alt="Удалить предмет" />
        </div>
    );
};

export default CartItem;
