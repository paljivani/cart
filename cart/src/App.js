import React, { useState } from 'react';
import './App.css'

function MultiCard() {
  const [items, setItems] = useState([
    { name: 'Noodes', price: 30, quantity: 0 },
    { name: 'biriyani', price: 90, quantity: 0 },
    { name: 'chipsss', price: 100, quantity: 0 },
  ]);
  const [totalCost, setTotalCost] = useState(0);

  const handleIncrement = (index) => {
    const newItems = [...items];
    newItems[index].quantity++;
    setItems(newItems);
    setTotalCost(totalCost + newItems[index].price);
  };

  const handleDecrement = (index) => {
    const newItems = [...items];
    if (newItems[index].quantity > 0) {
      newItems[index].quantity--;
      setItems(newItems);
      setTotalCost(totalCost - newItems[index].price);
    }
  };

  return (
    <div className='card'>
      <div className='border'>
      <h2> Card</h2>
      <div className="multi-card">
        {items.map((item, index) => (
          <div className="item  card" key={index} >
            <h3 >{item.name}</h3>
            <p>Price: ₹{item.price}</p>
            <button onClick={() => handleIncrement(index)}>+</button>
            <h4>{item.quantity}</h4>
            <button onClick={() => handleDecrement(index)}>-</button>
        </div>
        ))}
      </div>
      <div className='box'>
      <p>Total Cost : ₹  {totalCost}</p>
      </div>
      
    </div>
    </div>
  );
}

export default MultiCard;
