import "./Card.scss";

export const Card = ({ status }: any) => {
  const statusClass =
    status === "green"
      ? "selected-card--green"
      : status === "orange"
      ? "selected-card--orange"
      : "selected-card--empty";

  return (
    <>
      <div className={`selected-card ${statusClass}`}>
        <div className="cell">Container Info</div>
        <div className="cell">
          <div className="cell">Shipping Details</div>
          <div className="delete-cell">
            <button className="delete-btn"></button>
          </div>
          <div className="cell">
            <div>
              <span>text</span>
              <span className="price">$800</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
