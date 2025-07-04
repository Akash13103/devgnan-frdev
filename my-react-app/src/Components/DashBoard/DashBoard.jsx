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
import Holdings from '../Holdings/Holdings.jsx'
import SideBar from "../SideBar/SideBar.jsx";

export default function DashBoard() {
  return (
    <>
    <SideBar/>
    </>
  );
}
