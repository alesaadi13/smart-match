import "./Home.scss";
import { Card } from "../../components/Card/Card";

function Home() {
  return (
    <main className="home">
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
}

export default Home;
