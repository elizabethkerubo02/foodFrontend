import React, { useEffect, useState } from 'react';
import './food.css';
import NavC from '../../utility/NavC';

export default function Cart({ user, setUser, setLogin, login }) {
  const [ids, setIds] = useState([1]);
  const [foods, setFood] = useState([]);
  const [quantities, setQuantities] = useState({});
  const [showTime, setShowTime] = useState(false);
  const [selectedFoodIndex, setSelectedFoodIndex] = useState(null);

  useEffect(() => {
    fetch('https://backendfood-co7z.onrender.com/foods/1')
      .then((r) => r.json())
      .then((data) => {
        console.log("file: Food.jsx:16 -> .then -> data:", data);
        setFood([data]);
      });
  
  },[]);

  const elements = foods.map((food, index) => {
    return(
      <div className="foodCard" key={food.id+food.category}>
        <div className="foodTop">
          <img className="foodImg" src={food.picture} alt='food'></img>
        </div>
        <div className="foodBottom">
          <div className="foodHead" key={food.id+food.category +index}>
            <h1 style={{textAlign:'center', textDecoration: 'underline'}}>{food.name}</h1>
            <h3 style={{textAlign:'left'}}>Category: {food.category}</h3>
            <p style={{textAlign:'center', marginBottom:'7%'}} >{food.ingredients}</p>
            <p  style={{fontWeight: "bold", marginBottom:'1%'}} >Allergens : <span>{food.allergen ? ' Contains Allergens' : ' No Allergens'}</span></p>
            <p  style={{fontWeight: "bold", marginBottom:'1%'}} >Vegetarian : <span>{food.vegetarian ? ' Yes' : ' No'}</span></p>
            <p  style={{fontWeight: "bold", marginBottom:'1%'}} >Ratings: <span>{food.ratings}</span></p>
            <p  style={{fontWeight: "bold", marginBottom:'1%'}} >Price : ksh <span>{food.price}</span></p>
            <div className="foodBuy">Add to cart</div>
          </div>
        </div>
      </div>
    )
  })

  return (
    <div id='gFood'>
      <NavC />
      <div className="gFoodContainer">
        {elements}
      </div>
    </div>
  );
}
