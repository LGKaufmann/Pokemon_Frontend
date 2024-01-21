import { useDispatch, useSelector } from "react-redux";
import { bottomPage, modifyPage, topPage } from "../../redux/actions";
import style from "./Pagination.module.scss";

const Pagination = () => {
  const currentPage = useSelector((state) => state.currentPage);
  const dispatch = useDispatch();

  function backPage() {
    dispatch(modifyPage(-1));
  }

  function nextPage() {
    dispatch(modifyPage(1));
  }

  function onTopPage() {
    dispatch(topPage());
  }

  function onBottomPage() {
    dispatch(bottomPage());
  }

  return (
    <div className={style.container_pagination}>
      <div>
        <button className={style.button_page} onClick={onBottomPage}>
          {"|<"}
        </button>
        <button className={style.button_page} onClick={backPage}>
          {"<"}
        </button>
      </div>
      <h3 className={style.page}>{currentPage}</h3>
      <div className={style.container_pagination2}>
        <button className={style.button_page} onClick={nextPage}>
          {">"}
        </button>
        <button className={style.button_page} onClick={onTopPage}>
          {">|"}
        </button>
      </div>
    </div>
  );
};

export default Pagination;
