import { Order } from "./../interfaces/order";
import { Dispatch } from "react";
import { getOrders } from "../api/order";

const GET_ORDERS_LOADING = "GET_ORDERS_LOADING";
const GET_ORDERS_FINISHED = "GET_ORDERS_FINISHED";
const GET_ORDERS_ERROR = "GET_ORDERS_ERROR";

export const getAllOrders = () => {
  return async (dispatch: Dispatch<OrderReduxAction>) => {
    dispatch({ type: GET_ORDERS_LOADING });

    try {
      const res = await getOrders();
      const progressing: Order[] = [];
      const done: Order[] = [];
      res.orders.forEach((order: Order) => {
        order.status.code > 2 ? done.push(order) : progressing.push(order);
      });
      dispatch({
        type: GET_ORDERS_FINISHED,
        payload: { progressing, done },
      });
    } catch (error) {
      dispatch({ type: GET_ORDERS_ERROR, payload: { error } });
    }
  };
};

const INIT_STATE: OrderState = {
  data: { progressing: [], done: [] },
  isLoading: true,
  error: null,
};

export const orderReducer = (
  state = INIT_STATE,
  action: OrderReduxAction
): OrderState => {
  switch (action.type) {
    case GET_ORDERS_LOADING:
      return { ...state, isLoading: true };
    case GET_ORDERS_FINISHED:
      return {
        ...state,
        data: {
          progressing: [
            ...state.data.progressing,
            ...action.payload.progressing,
          ],
          done: [...state.data.done, ...action.payload.done],
        },
        isLoading: false,
      };
    case GET_ORDERS_ERROR:
      return {
        ...state,
        error: { ...state.error, ...action.payload.error },
        isLoading: false,
      };
    default:
      return state;
  }
};

type OrderStateData = {
  progressing: Order[];
  done: Order[];
};
interface OrderState {
  data: OrderStateData;
  isLoading: boolean;
  error: any;
}
export interface OrderReduxAction {
  type:
    | typeof GET_ORDERS_LOADING
    | typeof GET_ORDERS_FINISHED
    | typeof GET_ORDERS_ERROR;
  payload?: any;
}
