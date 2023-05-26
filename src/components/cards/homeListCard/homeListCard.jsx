import React, { useState } from "react";
import { cardData } from "./cardData";
import styles from "./homeCard.module.css";

export default function HomeListCard() {
const [data,setData] = useState([...cardData])
  
  function handleDecrease(index) {
    let temp = [...data]
    let item = { ...temp[index] }
    
    if (item.count === 1) {
      item.isVisible=false
    }
    else {
      item.count -= 1
      alert(`Product quantity updated to ${item.count} `)
    }
    temp[index] = item;
    setData(temp)
  }
  function handleIncrease(index) {
    let temp = [...data]
    let item = { ...temp[index] }
    
    if (item.count === 10) {
      alert("The seller has only 10 of these available")
    }
    else {
      item.count += 1
      temp[index] = item;
      setData(temp)
      alert(`Product quantity updated to ${item.count} `)
    }
  }
  function handleAddItem(index) {
    let temp = [...data]
    let item = { ...temp[index] }

    item.isVisible = true;
    temp[index] = item;
    setData(temp)
  }
  return (
    <div >
          {data.map((ele,i) => (
              <div className={styles.wrapper}>
                  <img src={ele.img} alt="" />
              <div>
                      <h4>{ele.itemName}</h4><br/>
              <span>per kg</span>
              <div className={styles.lastDiv}>
                  <h4>{ele.price}</h4>
                  {ele.isVisible ? <div className={styles.btnDiv}>
                    <button onClick={()=>handleDecrease(i)}>-</button>
                    <p>{ele.count}</p>
                    <button onClick={()=>handleIncrease(i)}>+</button>
                  </div>:   <button className={styles.addBtn} onClick={()=>handleAddItem(i)}>ADD +</button>}
               
              </div>
             </div>

          </div>
          ))}
    </div>
  );
}
