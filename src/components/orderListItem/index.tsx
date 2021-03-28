import "./index.scss";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Order } from "../../interfaces/order";
import { useEffect, useState } from "react";

interface OrderListItemProps {
  order: Order;
}

export const OrderListItem = ({ order }: OrderListItemProps) => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    setIsActive(() => order.status.code < 3);
  }, [order.status.code]);

  const renderTextWithEllipsis = (text: string): string => {
    const MAX_LENGTH = 30;
    return text.length > MAX_LENGTH
      ? text.substring(0, MAX_LENGTH - 1) + "..."
      : text;
  };

  return (
    <div className="OderListItem d-flex p-3 border-bottom">
      <div className="d-flex justify-content-between align-items-center">
        <img
          className={`OderListItem___image ${!isActive && "inactive"}`}
          src={order.logo}
          alt={order.name}
        />
      </div>
      <div className="OderListItem___detail px-2 flex-grow-1">
        <div className="d-flex justify-content-between">
          <p
            className={`OderListItem___detail detail___status mb-1 ${
              isActive && "active"
            }`}
          >
            {order.status.type}
          </p>
          {isActive && (
            <p className="OderListItem___detail detail___shippingDate mb-1">
              預計出貨: {order.date}
            </p>
          )}
        </div>
        <p className="OderListItem___detail detail___name text-left mb-0">
          {renderTextWithEllipsis(order.name)}
        </p>
      </div>
      <div className="d-flex justify-content-between align-items-center px-2">
        <FontAwesomeIcon
          icon={faChevronRight}
          color="#7e7474"
        ></FontAwesomeIcon>
      </div>
    </div>
  );
};
