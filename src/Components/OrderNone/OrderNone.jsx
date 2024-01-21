import React from "react";
import { useDispatch } from "react-redux";
import { resetFilterOrder } from "../../redux/actions";
import { NONE } from "../../redux/action-types";
import style from "./OrderNone.module.scss";

const OrderNone = () => {
  const dispatch = useDispatch();

  const onClick = () => {
    dispatch(resetFilterOrder());
  };
  return (
    <div>
      <button className={style.button_order} value={NONE} onClick={onClick}>
        RESET
      </button>
    </div>
  );
};

export default OrderNone;
