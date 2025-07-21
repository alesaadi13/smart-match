import "./Card.scss";
import dataInhouse from "../../api/hooks/inhouse.json";
console.log("dataInhouse", dataInhouse);

export const Card = ({ status, onClick, data = dataInhouse.data }: any) => {
  const statusClass =
    status === "green"
      ? "selected-card--green"
      : status === "orange"
      ? "selected-card--orange"
      : "selected-card--empty";

  const handleClick = () => {
    console.log("onClick");
    onClick();
  };
  console.log("data", data);
  return (
    <>
      <div className={`selected-card ${statusClass}`}>
        <div className="cell">Container Info</div>
        <div className="cell">
          <div className="cell">
            {/* <div>{data && data.map((x: any) => <span key={x.id}></span>)}</div> */}
          </div>
          <div className="delete-cell">
            <button onClick={handleClick} className="delete-btn"></button>
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
