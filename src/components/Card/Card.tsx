import "./Card.scss";
import dataInhouse from "../../api/hooks/inhouse.json";
// import { CardItem } from "./CardItem";
console.log("dataInhouse", dataInhouse);

export const Card = ({
  status,
  onClick,
  data = dataInhouse.data.list,
}: any) => {
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
  console.log("data card", data);
  return (
    <>
      <div className={`selected-card ${statusClass}`}>
        <div className="cell">Container Info</div>

        <div className="cell">
          <div className="item">
            {Object.entries(data).map(([key, item]: any) => (
              <span key={key}>{item.company_name}</span>
            ))}
          </div>

          {/* <CardItem /> */}

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
