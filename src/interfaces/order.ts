type StatusType =
  | "進行中"
  | "已完成 "
  | "已取消"
  | "處理中"
  | "已成立"
  | "已送達";

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
