import "./Card.scss";
import dataInhouse from "../../api/hooks/inhouse.json";
console.log("dataInhouse", dataInhouse);

export const CardItem = ({
  // status,
  onClick,
  data = dataInhouse.data.list,
}: any) => {
  // const statusClass =
  //   status === "green"
  //     ? "selected-card--green"
  //     : status === "orange"
  //     ? "selected-card--orange"
  //     : "selected-card--defult";

  const handleClick = () => {
    console.log("onClick");
    onClick();
  };
  console.log("data card", data);
  return (
    <>
      <div className="container-item" onClick={handleClick}>
        {Object.entries(data).map(([key, item]: any) => (
          <span key={key}>{item.company_name}</span>
        ))}
      </div>
    </>
  );
};
