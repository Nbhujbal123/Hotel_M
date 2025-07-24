import "./filtermenu.css";
import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { assets } from "../../assets/frontend_assets/assets";

import { useContext } from "react";
import { MyContext } from "../ContextMenu/context";
import { food_list } from "../../assets/frontend_assets/assets";


export function Filtermenu() {
  // const [data, setData] = useState([]);
  const [itemCounts, setItemCounts] = useState({});
  const [table, settable] = useState();
  const [curindex, setcurindex] = useState(0);
  const [addclick, setaddclick] = useState(0);



  const { cat } = useParams();

  const cartt = useContext(MyContext)

  // Function to increase count
  const increment = (index) => {
    setItemCounts(prev => ({
      ...prev,
      [index]: (prev[index] || 0) + 1

    }));
    // console.log(index)
    setcurindex(prev => ({
      ...prev,
      [index]: index
    }));

  };

  // Function to decrease count
  const decrement = (index) => {
    setItemCounts(prev => ({
      ...prev,
      [index]: Math.max((prev[index] || 0) - 1, 0)
    }));

  };

  function handleSubmitOrder() {
    const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
    console.log("Submitted Cart Items:", cartItems);
  }


 const Addtocartclick = (count, id, name, category, price, image, table) => {
  if (!count || count <= 0) {
    alert("Please select a valid count before adding to cart.");
    return;
  }

  var tableNum = parseInt(table);

  var newItem = {
    count: count,
    _id: id,
    name: name,
    category: category,
    price: price,
    image: image,
    table: tableNum
  };

  // Get existing cart from localStorage
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  // Optional: Check if the item already exists (same id + table)
  const existingIndex = cart.findIndex(
    (item) => item._id === id && item.table === tableNum
  );

  if (existingIndex !== -1) {
    // If already in cart, update count
    cart[existingIndex].count += count;
  } else {
    // Otherwise add new item
    cart.push(newItem);
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  console.log("Updated cart:", cart);
};


  function getTable(e) {
    settable(e.target.value);
    setItemCounts(0);

  }

  // console.log(cat)
  if (cat == undefined) {

    return (
      <div>

        <div className="table-no">
          <select onChange={getTable}>
            <option value={0}>Table</option>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
            <option value={6}>6</option>
            <option value={7}>7</option>
            <option value={8}>8</option>
            <option value={9}>9</option>
            <option value={10}>10</option>
          </select>

          {/* <button onClick={handleSubmitOrder}>Submit order</button> */}

        </div>

        {/* <h2 style={{ color: "gray" }}>Top dishes near you...</h2> */}

        <div className="items">
          {food_list.map((item, index) => (
            <div key={index} className="item-box">
              <img src={item.image} width="200px" alt="not found" />


              {itemCounts[index] > 0 ? (
                <div className="food-item-counter">
                  <img
                    onClick={() => decrement(index)}
                    src={assets.remove_icon_red}
                    width="20px"
                    alt=""
                  />
                  <p className="counter">{itemCounts[index]}</p>
                  <img
                    onClick={() => increment(index)}
                    src={assets.add_icon_green}
                    width="20px"
                    alt=""
                  />
                </div>
              ) : (
                <img
                  className="add-icon"
                  onClick={() => increment(index)}

                  src={assets.add_icon_white}
                  alt=""
                  width="40px"
                />
              )}

              <div className="item-name">{item.name}</div>
              {/* <p className="item-description">{item.description}</p> */}
              <div className="item-price">₹ {item.price}</div>
              <button

                className="add-btn"

                style={{ backgroundColor: curindex[index] === index ? "red" : "gray" && addclick === item._id ? "green" : "gray" }}
                onClick={() => {
                  Addtocartclick(itemCounts[index], item._id, item.name, item.category, item.price, item.image, table, index);
                  console.log(addclick)
                }}
              >
                Add
              </button>

              {/* <button onClick={()=>Removefromcart(itemCounts[index],item.id)}>Remove From Cart</button> */}
            </div>
          ))}


        </div>
      </div>
    )

  }

  else {
    return (
      <div>

        <div className="table-no">
          <select onClick={getTable}>
            <option value={0}>Table</option>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
            <option value={6}>6</option>
            <option value={7}>7</option>
            <option value={8}>8</option>
            <option value={9}>9</option>
            <option value={10}>10</option>
          </select>

          {/* <button>Submit order</button> */}

        </div>

        {/* <h2 style={{ color: "gray" }}>Top dishes near you...</h2> */}

        <div className="items">
          {food_list.filter(item => item.category === cat)
            .map((selecteCatItem, index) => (
              <div key={index} className="item-box">
                <img src={selecteCatItem.image} width="200px" alt="not found" />

                {itemCounts[index] > 0 ? (
                  <div className="food-item-counter">
                    <img
                      onClick={() => decrement(index)}
                      src={assets.remove_icon_red}
                      width="20px"
                      alt=""
                    />
                    <p className="counter">{itemCounts[index]}</p>
                    <img
                      onClick={() => increment(index)}
                      src={assets.add_icon_green}
                      width="20px"
                      alt=""
                    />
                  </div>
                ) : (
                  <img
                    className="add-icon"
                    onClick={() => increment(index)}
                    src={assets.add_icon_white}
                    alt=""
                    width="40px"
                  />
                )}

                <div className="item-name">{selecteCatItem.name}</div>
                {/* <p className="item-description">{item.description}</p> */}
                <div className="item-price">₹ {selecteCatItem.price}</div>
                <button style={{ backgroundColor: curindex[index] === index ? "red" : "gray" }} className="add-btn" onClick={() => Addtocartclick(itemCounts[index], selecteCatItem._id, selecteCatItem.name, selecteCatItem.category, selecteCatItem.price, selecteCatItem.image, table)}>Add</button>
                {/* <button onClick={()=>Removefromcart(itemCounts[index],item.id)}>Remove From Cart</button> */}

              </div>
            ))}
        </div>
      </div>
    );
  }
}


