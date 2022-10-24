import React from 'react';
import { products } from './database';
import './Main.css'

const Main = ({addition, basket}) => {
    return (
        <div className='main'>
            {products.map((elem) => {
             return (
                <div className='container'>
                        <img src={elem.image}/>
                        <p>{elem.name}</p>
                        <p>{elem.price}</p>
                        <button onClick={()=> addition(elem)} disabled={basket.includes(elem)}>{!basket.includes(elem)? 'Добавить в корзину' : 'Добавлено в корзину'}</button>
                </div>
             )
            })}
        </div>
    );
};

export default Main;