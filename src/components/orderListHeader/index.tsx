import "./index.scss";

export const OrderListHeader = ({ title }: { title: string }) => {
  return (
    <div className="ListHeader p-2 border-bottom bg-light">
      <p className="ListHeader___label mb-0 text-left d-flex align-items-center">
        {title}
      </p>
    </div>
  );
};
