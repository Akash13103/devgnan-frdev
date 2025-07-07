import React, { Component } from "react";
import { BrowserRouter, Link, useNavigate } from "react-router-dom";
import Orders from "../Orders/Orders";
import "./DashBoard.css";
import Grid from "@mui/material/Grid";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Holdings from "../Holdings/Holdings.jsx";
import SideBar from "../SideBar/SideBar.jsx";
const rows = [
  {
    Instrument: "ADANIET",
    Quantity: 20,
    Avg_Cost: 2197.84,
    Invested: 43956.6,
  },
  {
    Instrument: "ADANI",
    Quantity: 20,
    Avg_Cost: 2197.84,
    Invested: 43956.6,
  },
  {
    Instrument: "ADANIE",
    Quantity: 20,
    Avg_Cost: 2197.84,
    Invested: 43956.6,
  },
  {
    Instrument: "ADANIETS",
    Quantity: 28,
    Avg_Cost: 2197.84,
    Invested: 43956.6,
  },
  {
    Instrument: "ADANIETU",
    Quantity: 20,
    Avg_Cost: 2197.84,
    Invested: 43956.6,
  },
  {
    Instrument: "ADANIETM",
    Quantity: 20,
    Avg_Cost: 2197.84,
    Invested: 43956.6,
  },
  {
    Instrument: "ADANIETN",
    Quantity: 20,
    Avg_Cost: 2197.84,
    Invested: 43956.6,
  },
];
export default function DashBoard() {
  return (
    <>
      <div className="dashboard-con">
        <SideBar/>
        <div className="dashboard-content">
          <div className="top-portion">
            <p>Hi,Akash!</p>
          </div>
          <div className="middle-portion">
            <div className="equidity">Equity</div>
            <div className="comodity">Commodity</div>
          </div>
          <div className="metrics-info">
            <div>Margin available</div>
          </div>
        </div>
      </div>
    </>
  );
}
