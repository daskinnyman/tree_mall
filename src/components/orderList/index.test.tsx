import { render } from "@testing-library/react";
import { OrderList } from ".";
import { Order } from "../../interfaces/order";

const orders: Order[] = [
  {
    name: "BALMUDA The Toaster 百慕達烤麵包機-黑色",
    logo: "https://static.oopocket.com/store/iconTreemall@3x.png",
    status: {
      code: 2,
      type: "已成立",
    },
    date: "108/7/21",
  },
  {
    name: "贈-短慧萬用鍋HD2133+三合一濾網「LG樂金」韓國原裝...",
    logo: "https://static.oopocket.com/store/iconTreemall@3x.png",
    status: {
      code: 1,
      type: "處理中",
    },
    date: "108/6/2",
  },
];

test("Should render two items", () => {
  const { getAllByRole } = render(<OrderList title="進行中" orders={orders} />);
  const ImageElement = getAllByRole("img");
  expect(ImageElement).toHaveLength(2);
});
