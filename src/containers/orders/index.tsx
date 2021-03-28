import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { OrderList, LoadingScreen } from "../../components";
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

  if (orders.isLoading) {
    return <LoadingScreen></LoadingScreen>;
  }

  return (
    <>
      <OrderList title="進行中" orders={orders.data.progressing}></OrderList>
      <OrderList title="已完成" orders={orders.data.done}></OrderList>
    </>
  );
};
