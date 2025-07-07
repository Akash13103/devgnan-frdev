import React, { PureComponent } from "react";
import "./D2.css";

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <div className="dashboard-section">
        <div className="dashboard-header-container">
          <h1 className="exicuted-orders">Hi, Venky </h1>
        </div>
        <div className="middile-portion">
          <div className="commodity-header">
            <div className="equity">Equity</div>
            <div className="commodity">Commodity</div>
          </div>

          <div className="equity-commodity-con">
            <div className="equity-table">
              <div className="margin-available-container">
                <div className="bold-text">450.10</div>
                <p>Margin Available</p>
              </div>

              <div className="margin-available-con">
                <p>Margin used 0</p>
                <p>
                  Opening balance <span>450.10</span>
                </p>
                <div className="view-statement">View statement</div>
              </div>
            </div>
            <div className="equity-table" equity-table>
              <div className="margin-available-container">
                <div className="bold-text">0</div>
                <p>Margin Available</p>
              </div>
              <div className="margin-available-con">
                <p>
                  Margin used <span>450.10</span>
                </p>
                <p>
                  Opening balance <span>450.10</span>
                </p>
                <div className="view-statement">View statement</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Dashboard;