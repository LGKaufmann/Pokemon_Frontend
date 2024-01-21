import React from "react";
import OrderNone from "../OrderNone/OrderNone";
import OrderByName from "../OrderByName/OrderByName";
import Filters from "../Filters/Filters";
import style from "./Order.module.scss";
import OrderByAttack from "../OrderByAttack/OrderByAttack";

const Order = () => {
  return (
    <div className={style.orderbar}>
      <div>
        <OrderNone />
      </div>
      <div>
        <OrderByName />
      </div>
      <div>
        <OrderByAttack />
      </div>
      <div>
        <Filters />
      </div>
    </div>
  );
};

export default Order;
