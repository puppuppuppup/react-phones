import styles from "./Card.module.scss";

const Card = ({ id, name, imgSrc, price, addCartItem }) => {
    return (
        <div className={ styles.card } >
            <img
                className={ styles.card__fav }
                src="/images/svg/fav.svg"
                alt="Add to favorite"
                width={32}
                height={32}
            />
            <img className={ styles.card__img } src={ imgSrc ? imgSrc : "https://imgholder.ru/200x261/cacaca/fff&text=Empty&font=kelson" } alt="" />
            <p className={ styles.card__name }>
                { name }
            </p>
            <div className={ styles.card__bottom }>
                <div className={ styles.card__price }>
                    <span>Цена:</span>
                    <b>{ price } руб.</b>
                </div>
                <button className={ styles.card__add } onClick={() => addCartItem(id)}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 4.5v15m7.5-7.5h-15"
                        />
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default Card;
