export const InvoiceData = ({ amount, total }) => {
  return (
    <div className="data">
      <div className="row">
        <h2>Invoice Amount </h2>
        <p>{amount} sats</p>
      </div>
      <div className="row bold">
        <h2>Total </h2>
        <p>{total} sats</p>
      </div>
    </div>
  );
};
