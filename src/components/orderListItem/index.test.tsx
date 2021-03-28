import { render, screen } from "@testing-library/react";
import { OrderListItem } from ".";
import { Order } from "../../interfaces/order";

const activeOrder: Order = {
  name: "贈-短慧萬用鍋HD2133+三合一濾網「LG樂金」韓國原裝...",
  logo: "https://static.oopocket.com/store/iconTreemall@3x.png",
  status: {
    code: 1,
    type: "處理中",
  },
  date: "108/6/2",
};

const inactiveOrder: Order = {
  name: "Livi優活 抽取式衛生紙(100抽x10包x10串/箱)",
  logo: "https://static.oopocket.com/store/iconTreemall@3x.png",
  status: {
    code: 3,
    type: "已取消",
  },
  date: "107/6/12",
};

test("Should render shipping date", () => {
  render(<OrderListItem order={activeOrder} />);
  const linkElement = screen.getByText(/預計出貨/i);
  expect(linkElement).toBeInTheDocument();
});

test("image should have inactive class", () => {
  render(<OrderListItem order={inactiveOrder} />);
  const linkElement = screen.getByRole("img");
  expect(linkElement).toHaveClass("inactive");
});

test("Status type should have active class", () => {
  render(<OrderListItem order={activeOrder} />);
  const statusTypeElement = screen.getByText(/處理中/i);
  expect(statusTypeElement).toHaveClass("active");
});

test("name should been Ellipsis", () => {
  const { getByText } = render(<OrderListItem order={activeOrder} />);
  const nameElement = getByText(
    "贈-短慧萬用鍋HD2133+三合一濾網「LG樂金」韓國原裝..."
  );

  expect(nameElement.textContent).toHaveLength(32);
});
