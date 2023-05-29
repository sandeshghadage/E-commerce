import React, { useState } from "react";
import { cardData } from "./cardData";
import styles from "./homeCard.module.css";
import { useSelector, useDispatch } from "react-redux";
import { getLocalData, setLocalData } from "../../../utils/LocalStorage";
import { addItem, decreaseItemQnty, increaseItemQnty } from "../../../redux/OrderSlice";

export default function HomeListCard() {
  const [data, setData] = useState([...cardData]);
  const cartStatus = useSelector((state) => state.orderData.cartData);
  const dispatch = useDispatch();

  console.log("cartStatus ---->", cartStatus);

  function handleDecrease(index) {
    let temp = [...cartStatus];
    let item = { ...temp[index] };

    dispatch(decreaseItemQnty(item))
    console.log("cartStatus --->", cartStatus);
  }
  function handleIncrease(index) {
    let temp = [...cartStatus];
    let item = { ...temp[index] };

    if (item.count === 10) {
      alert("The seller has only 10 of these available");
    } else {
     
      dispatch(increaseItemQnty(item))
    }
  }
  function handleAddItem(item) {
    dispatch(increaseItemQnty(item))
    console.log(item)

  }
  return (
    <div>
      {cartStatus.map((ele, i) => (
        <div className={styles.wrapper}>
          <img src={ele.img} alt="" />
          <div>
            <h4>{ele.itemName}</h4>
            <br />
            <span>per kg</span>
            <div className={styles.lastDiv}>
              <h4>{ele.price}</h4>
              {ele.count>=1? (
                <div className={styles.btnDiv}>
                  <button onClick={() => handleDecrease(i)}>-</button>
                  <p>{ele.count}</p>
                  <button onClick={() => handleIncrease(i)}>+</button>
                </div>
              ) : (
                <button
                  className={styles.addBtn}
                  onClick={() => handleAddItem(ele)}
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
