import React, { useEffect, useState } from "react";
import style from "./Home.module.css";
import { headerImg } from "./data";
import Button from "@mui/material/Button";
import AppsIcon from "@mui/icons-material/Apps";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import SearchIcon from "@mui/icons-material/Search";
import { sideBarList } from "./data";
import HomeListCard from "../../components/cards/homeListCard/homeListCard";
import { useNavigate } from "react-router-dom";
import ButtonStandardFilled from "../../components/buttons/ButtonStandardFilled";
import CartItemOnHomePage from "../../components/cards/cartItemOnHomePage/CartItemOnHomePage";
import { useDispatch, useSelector } from "react-redux";
import {
  decreaseItemQnty,
  increaseItemQnty,
  setCurrTotalSellingPrice,
} from "../../redux/OrderSlice";

export default function Home() {
  const cartStatus = useSelector((state) => state.orderData.cartData);
  const currTotalSellingPrice = useSelector(
    (state) => state.orderData.currTotalSellingPrice
  );
  const [currTotalPrice, setCurrTotalPrice] = useState(0);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [cartItemCount, setCartItemCount] = useState();

  useEffect(() => {
    cartStatus.map((ele) => {
      if (ele.count > 0) {
        // setCartItemCount(cartItemCount + 1);
        let sellingTotal = ele.count * ele.sellingPrice;
        setCurrTotalSellingPrice(sellingTotal);
        dispatch(setCurrTotalSellingPrice(sellingTotal));
        let priceTotal = ele.count * ele.price;
        setCurrTotalPrice(priceTotal);
        // console.log(currTotalSellingPrice);
      }
    });
    console.log("currTotalSellingPrice", currTotalSellingPrice);
  }, [cartStatus]);

  function handleDecrease(index) {
    let temp = [...cartStatus];
    let item = { ...temp[index] };

    dispatch(decreaseItemQnty(item));
    // console.log("cartStatus --->", cartStatus);
    dispatch(setCurrTotalSellingPrice(""));
  }
  function handleIncrease(index) {
    let temp = [...cartStatus];
    let item = { ...temp[index] };

    if (item.count === 10) {
      alert("The seller has only 10 of these available");
    } else {
      dispatch(increaseItemQnty(item));
      dispatch(setCurrTotalSellingPrice(""));
    }
  }

  return (
    <div>
      <div className={style.header}>
        <div className={style.leftSection}>
          <img src={headerImg} alt="headerImg" className={style.headerImg} />
          <h3>E-Commerce</h3>
        </div>
        <div className={style.middleSection}>
          <div className={style.searchBar}>
            <SearchIcon />
            <input type="text" placeholder="Search for products..." />
          </div>
        </div>
        <div className={style.rightSection}>
          <Button
            startIcon={<AppsIcon fontSize={"large"} />}
            variant="outlineed"
          >
            Categories
          </Button>
          <Button
            onClick={() => navigate("/bag")}
            startIcon={<WorkOutlineIcon fontSize={"large"} />}
            variant="outlineed"
          >
            Bag
          </Button>
          <Button
            startIcon={<PersonOutlineIcon fontSize={"large"} />}
            variant="outlineed"
          >
            Account
          </Button>
        </div>
      </div>
      <div className={style.body}>
        <div className={style.leftSideBar}>
          <div className={style.sidebar__content}>
            {sideBarList.map((item, i) => (
              <div key={i} className={style.sideBarItem}>
                {item}
              </div>
            ))}
          </div>
        </div>
        <div>
          <div className={style.midSection}>
            <HomeListCard />
          </div>
        </div>
        <div className={style.rightSideBar}>
          {currTotalSellingPrice == 0 ? (
            <div className={style.bag__container}>
              <div className={style.CartHeader}>
                <div className={style.bagCount}>
                  <div>Bag</div>
                </div>
              </div>
              <div className={style.emptyCart}>
                <h4>Your bag is empty</h4>
                <div>Looks like you haven't made your choice yet.</div>
              </div>
            </div>
          ) : (
            <div className={style.bag__container}>
              <div className={style.CartHeader}>
                <div className={style.bagCount}>
                  <div>Bag</div>
                  <div className={style.cartCounter}>2</div>
                </div>
                <div>clear bag</div>
              </div>
              <div>
                {cartStatus.map((ele, index) => {
                  if (ele.count > 0) {
                    return (
                      <CartItemOnHomePage
                        key={ele.itemId}
                        {...ele}
                        handleDecrease={() => handleDecrease(index)}
                        handleIncrease={() => handleIncrease(index)}
                      />
                    );
                  }
                })}
              </div>
              <div className={style.bagTotalBox}>
                <div>Subtotal</div>
                <div>$305</div>
              </div>
              <ButtonStandardFilled
                value={"Go to bag"}
                width={"100%"}
                height={"2.5rem"}
                onClick={() => navigate("/bag")}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
