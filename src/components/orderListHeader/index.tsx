import "./index.scss";

interface OrderListHeaderProps {
  title: string;
}

export const OrderListHeader = ({ title }: OrderListHeaderProps) => {
  return (
    <div className="ListHeader p-2 border-bottom bg-light">
      <p className="ListHeader___label mb-0 text-left d-flex align-items-center">
        {title}
      </p>
    </div>
  );
};
