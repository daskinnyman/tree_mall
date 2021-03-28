import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Order } from "../../interfaces/order";


export const OrderListItem = (props: Order) => {
  const renderEllipsis = (text: string): string => {
    const MAX_LENGTH = 30;
    return text.length > MAX_LENGTH
      ? text.substring(0, MAX_LENGTH - 1) + "..."
      : text;
  };

  return (
    <div className="d-flex p-3 border-bottom">
      <div className="d-flex justify-content-between align-items-center">
        <img
          src={props.logo}
          alt={props.name}
          height="50px"
          width="50px"
          style={{ filter: props.status.code > 2 ? "grayscale(100%)" : "" }}
        />
      </div>

      <div className="px-2 flex-grow-1">
        <div className="d-flex justify-content-between">
          <p
            className="mb-1"
            style={{
              fontSize: "14px",
              color: props.status.code > 2 ? "#212529" : "#00994e",
            }}
          >
            {props.status.type}
          </p>
          {props.status.code < 3 && (
            <p className="mb-1" style={{ fontSize: "14px" }}>
              預計出貨: {props.date}
            </p>
          )}
        </div>
        <p
          className="text-left mb-0"
          style={{ fontSize: "14px", fontWeight: 300 }}
        >
          {renderEllipsis(props.name)}
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
