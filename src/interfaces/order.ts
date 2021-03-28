type StatusType = "進行中" | "已完成 ";

interface OrderStatus {
  code: number;
  type: StatusType;
}

export interface Order {
  name: string;
  logo: string;
  status: OrderStatus;
  date: string;
}

export interface Orders {
  orders: Order[];
}
