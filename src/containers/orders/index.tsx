import "./index.scss";
import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { OrderList } from "../../components";
import { getAllOrders } from "../../ducks/order";
import { rootSate } from "../../ducks/stores";

export const Orders = () => {
  const dispatch = useDispatch();
  const orders = useSelector((state: rootSate) => state.order);

  const initData = useCallback(() => {
    dispatch(getAllOrders());
  }, [dispatch]);

  useEffect(() => {
    initData();
  }, [initData]);

  const renderLoading = () => {
    return (
      orders.isLoading && (
        <div className="w-100 h-100 d-flex justify-content-center align-items-center">
          <img
            className="Loading___img"
            src="https://static.oopocket.com/store/iconTreemall@3x.png"
            alt="tree_mall"
          />
        </div>
      )
    );
  };

  const renderList = () => {
    return (
      !orders.isLoading && (
        <>
          <OrderList
            title="進行中"
            orders={orders.data.progressing}
          ></OrderList>
          <OrderList title="已完成" orders={orders.data.done}></OrderList>{" "}
        </>
      )
    );
  };

  return (
    <>
      {renderLoading()}
      {renderList()}
    </>
  );
};
