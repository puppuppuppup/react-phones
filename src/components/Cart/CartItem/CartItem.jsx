import styles from "./CartItem.module.scss";
import React from "react";

const CartItem = ({ item }) => {
    return (
        <div className={ styles.item }>
            <img className={ styles.item__img } src={ item.imgSrc } alt="Phone photo" />
            <div className={ styles.item__info }>
                <p className={ styles.item__name }>
                    { item.name }
                </p>
                <b className={ styles.item__price }>{ item.price } руб.</b>
            </div>
            <img className={ styles.item__delete } src="/images/svg/item-delete.svg" alt="Удалить предмет" />
        </div>
    );
};

export default CartItem;
