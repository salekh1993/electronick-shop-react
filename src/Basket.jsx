import React from 'react';
import './Main.css';

const Basket = ({basket, removeProduct}) => {
    if(basket.length === 0){
        return <h1>Корзина пустая</h1>
    }
    return (
        <div className='main'>
            {basket.map((elem) => {
             return (
                <div className='container'>
                        <img src={elem.image}/>
                        <p>{elem.name}</p>
                        <p>{elem.price}</p>
                        <button className='btnBasket' onClick={() => removeProduct(elem.id)}>Удалить из корзины</button>
                </div>
             )
            })}
        </div>
    );
};

export default Basket;