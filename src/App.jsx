import "./App.scss";
import phonesData from "./data/phones.data.json";
import Header from "./components/Header/Header";
import Card from "./components/Card/Card";
import Cart from "./components/Cart/Cart";
import React from "react";

import { useState } from "react";

function App() {
    const cartInit = {
        price: 0,
        opened: false,
    };

    const [cart, setCartState] = useState(cartInit);
    const [cartItems, setCartItems] = useState([]);

    const openCart = () => {
        setCartState((prev) => {
            const copy = Object.assign({}, { ...prev });
            copy.opened = !copy.opened;
            return copy;
        });
    };

    const addCartItem = (id) => {
        phonesData.map((phone, index) => {
            if (index === id) {
                setCartItems((prev) => {
                    const copy = prev.slice();
                    copy.push(phone);
                    return copy;
                });
            }
        });
    };

    cart.opened
        ? document.body.classList.add("blocked")
        : document.body.classList.remove("blocked");

    return (
        <div className="container">
            <Cart cart={cart} openCart={openCart} cartItems={cartItems} />
            <Header cartPrice={cart.price} openCart={openCart} />
            <main>
                <div className="catalog-top">
                    <h1>Каталог телефонов</h1>
                    <div className="catalog-search">
                        <img src="/images/svg/search.svg" alt="Search" />
                        <input type="text" placeholder="Поиск..." />
                    </div>
                </div>
                <div className="catalog">
                    {phonesData.length ? (
                        phonesData.map((phone, index) => {
                            return (
                                <Card
                                    key={index}
                                    id={index}
                                    name={phone.name}
                                    imgSrc={phone.imgSrc}
                                    price={phone.price}
                                    addCartItem={addCartItem}
                                />
                            );
                        })
                    ) : (
                        <div className="msg-empty" />
                    )}
                </div>
            </main>
        </div>
    );
}

export default App;
