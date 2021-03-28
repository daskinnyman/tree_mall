import { OrderListHeader, OrderListItem } from "..";
import { Order } from "../../interfaces/order";

export const OrderList = ({
  title,
  orders,
}: {
  title: string;
  orders: Order[];
}) => {

  const convertToTime = (dateString: string): number => {
    const year = +dateString.split("/")[0] + 1911;
    const month = +dateString.split("/")[1];
    const date = +dateString.split("/")[2];

    return new Date(year, month - 1, date).getTime();
  };

  const sortByDate = (a: Order, b: Order): number => {
    return convertToTime(b.date) - convertToTime(a.date);
  };

  return (
    <>
      <OrderListHeader title={title} />
      {orders.sort(sortByDate).map((order: Order, idx) => (
        <OrderListItem key={idx} {...order} />
      ))}
    </>
  );
};
