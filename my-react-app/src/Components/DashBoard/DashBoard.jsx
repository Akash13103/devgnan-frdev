import React, { Component } from "react";
import { BrowserRouter, Link, useNavigate } from "react-router-dom";
import Orders from "../Orders/Orders";
import "../DashBoard/DashBoard.css";
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

export default function DashBoard() {
  return (
    <>
      <div className="dashboard-con">
        <div className="main-content">
          <SideBar />
          <div className="dashboard-content">
            <div className="top-portion">
              <p>Hi,Akash!</p>
            </div>
            <div className="middle-portion">
              <div>Equity</div>
              <div>Commodity</div>
            </div>
            <div className="metrics">450.10
              <div>
                <div>MARGIN USED:0</div>
                <div>Opening Balance:450.10</div>
                <div>View statement</div>
              </div>
              <div>0</div>
            </div>
            <div className="metrics-info">
              <div>
                Margin available
              </div>
              <div>Margin available</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
