import { useSelector, useDispatch } from "react-redux";
import { sortAttack } from "../../redux/actions";
import { ASCENDENT, DESCENDENT } from "../../redux/action-types";
import style from "./OrderByAttack.module.scss";

export default function OrderByAttack() {
  let sort = useSelector((state) => state.sortAttack);
  const dispatch = useDispatch();

  const onClick = (e) => {
    let valor = e.target.value;
    dispatch(sortAttack(valor));
  };

  return (
    <div className={style.order_container}>
      <div className={style.orderbar_item_title}>
        <h3>By Attack</h3>
      </div>
      <button
        className={sort[0] ? style.button_order_selected : style.button_order}
        value={ASCENDENT}
        onClick={onClick}
      >
        - / +
      </button>
      <button
        className={sort[1] ? style.button_order_selected : style.button_order}
        value={DESCENDENT}
        onClick={onClick}
      >
        + / -
      </button>
    </div>
  );
}
