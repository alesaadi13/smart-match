import "./Home.scss";
import { Card } from "../../components/Card/Card";
import useApi from "../../api/hooks/useApi";
import axios from "axios";
import { useEffect } from "react";

const Home = () => {
  const { data, loading, error, fetchData } = useApi("/testapi/inhouse");

  useEffect(() => {
    getInhouseData();
  }, []);

  const getInhouseData = async () => {
    try {
      const response = await axios.get("https://itabs.com.tr/testapi/inhouse", {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer test_alesaadi13",
        },
      });

      console.log("Data:", response.data);
      return response.data;
    } catch (error: any) {
      console.error("Error fetching inhouse data:", error.message);
      throw error;
    }
  };

  console.log("data", data);

  return (
    <main className="home">
      <div>
        <button onClick={getInhouseData}>Get Inhouse Data</button>;
        {loading && <p>Loading...</p>}
        {error && <p style={{ color: "red" }}>Error: {error}</p>}
        <button onClick={fetchData}>Reload</button>
      </div>
      <div className="container">
        <div className="panel">
          <Card status="green" />
        </div>

        <div className="panel">
          <Card status="orange" />
        </div>

        <div className="panel">
          <div className="grid-row data-row">
            <div className="cell">
              <div>ID: 1</div>
            </div>

            <div className="cell">
              <div>ETD: 11-03-2023</div>
              <div>ETA: 11-03-2023</div>
              <div>From: Bandar Abbas</div>
              <div>To: Istanbul</div>
            </div>

            <div className="cell">
              <div>ERD: 10-03-2023</div>
              <div>Cut-off: 09-03-2023</div>
              <div>Depot</div>
              <div>
                <span className="price">$800</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
