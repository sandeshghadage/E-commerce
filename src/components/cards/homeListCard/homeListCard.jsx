import React from "react";
import { cardData } from "./cardData";
import styles from "./homeCard.module.css";

export default function HomeListCard() {


  return (
    <div >
          {cardData.map((ele) => (
              <div className={styles.wrapper}>
                  <img src={ele.img} alt="" />
              <div>
                      <h4>{ele.itemName}</h4><br/>
              <span>per kg</span>
              <div className={styles.lastDiv}>
                          <h4>{ ele.price}</h4>
                  <button>ADD +</button>
              </div>
             </div>

          </div>
          ))}
    </div>
  );
}
