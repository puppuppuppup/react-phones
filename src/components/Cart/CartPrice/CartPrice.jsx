import styles from "./CartPrice.module.scss";
import React from "react";

const CartPrice = ({ name, value }) => {
    return <div className="price">
        <span className={ styles.price__name }>{ name }:</span>
        <div className={ styles.price__line }></div>
        <b className={ styles.price__value }>{ value } руб.</b>
    </div>;
};

export default CartPrice;
