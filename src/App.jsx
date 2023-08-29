import "./App.scss";
import phonesData from './data/phones.data.json'
import Header from "./components/Header/Header";
import Card from "./components/Card/Card";
import Cart from "./components/Cart/Cart";

import { useState } from "react";

function App() {

    const [cartPrice, setCartPrice] = useState(0);

    return (
        <div className="container">
            <Cart />
            <Header cartPrice={cartPrice} />
            <main>
                <div className="catalog-top">
                    <h1>Каталог телефонов</h1>
                    <div className="catalog-search">
                        <img src="/images/svg/search.svg" alt="Search" />
                        <input type="text" placeholder="Поиск..." />
                    </div>
                </div>
                <div className="catalog">
                    { phonesData.length 
                    ? phonesData.map((phone, index) => {
                        return <Card key={index} name={phone.name} imgSrc={phone.imgSrc} price={phone.price} />
                    }) 
                    : <div className="msg-empty"/>}
                </div>
            </main>
        </div>
    );
}

export default App;
