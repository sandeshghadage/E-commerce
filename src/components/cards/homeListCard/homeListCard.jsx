import React, { useState } from "react";
import { cardData } from "./cardData";
import styles from "./homeCard.module.css";
import { useSelector, useDispatch } from "react-redux";
import { getLocalData, setLocalData } from "../../../utils/LocalStorage";
import { addProduct } from "../../../redux/OrderSlice";

export default function HomeListCard() {
  const [data, setData] = useState([...cardData]);
  // const cartStatus = useSelector((state) => state.orderData.cartData);
  // const dispatch = useDispatch();

  console.log("cartStatus ---->", cartStatus);
  function handleDecrease(index) {
    let temp = [...data];
    let item = { ...temp[index] };

    if (item.count === 1) {
      item.isVisible = false;
    } else {
      item.count -= 1;
      alert(`Product quantity updated to ${item.count} `);
    }
    temp[index] = item;
    setData(temp);
    setLocalData(temp);
    console.log("cartStatus --->", cartStatus);
  }
  function handleIncrease(index) {
    let temp = [...data];
    let item = { ...temp[index] };

    if (item.count === 10) {
      alert("The seller has only 10 of these available");
    } else {
      item.count += 1;
      temp[index] = item;
      setData(temp);
      setLocalData(temp);
    }
  }
  function handleAddItem(index) {
    let temp = [...data];
    let item = { ...temp[index] };

    item.isVisible = true;
    item.count += 1;
    temp[index] = item;
    setData(temp);
    setLocalData(temp);
  }
  return (
    <div>
      {data.map((ele, i) => (
        <div className={styles.wrapper}>
          <img src={ele.img} alt="" />
          <div>
            <h4>{ele.itemName}</h4>
            <br />
            <span>per kg</span>
            <div className={styles.lastDiv}>
              <h4>{ele.price}</h4>
              {ele.isVisible ? (
                <div className={styles.btnDiv}>
                  <button onClick={() => handleDecrease(i)}>-</button>
                  <p>{ele.count}</p>
                  <button onClick={() => handleIncrease(i)}>+</button>
                </div>
              ) : (
                <button
                  className={styles.addBtn}
                  onClick={() => handleAddItem(i)}
                >
                  ADD +
                </button>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
