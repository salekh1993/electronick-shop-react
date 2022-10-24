import { useState } from 'react';
import './App.css';
import Header from './Header.jsx'
import Main from './Main';
import {Routes, Route} from "react-router-dom"
import Basket from './Basket'

function App() {
  const [basket, setBasket] = useState([]);

  const addProducts = (product) => {
    setBasket([...basket, product])
  }
  const removeProduct = (id) => {
   setBasket(basket.filter(elem => elem.id !== id)) 
  }
  

  return (
    <div className="App">
       
       <Header basket={basket}/>
       <Routes>
        <Route path="/" element={<Main addition={addProducts} basket={basket}/>}/>
        <Route path="/basket" element={<Basket removeProduct={removeProduct} basket={basket}/>}/>
       </Routes>
 
    </div>
  );
}

export default App; 
