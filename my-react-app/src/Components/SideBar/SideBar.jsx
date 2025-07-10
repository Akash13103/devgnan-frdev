import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { CiSearch } from "react-icons/ci";
import { IoFilterOutline } from "react-icons/io5";
import "./SideBar.css";
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

export default function SideBar() {
  return (
    // Component content
    <div className="sidebar-container">
      <div className="searchbar">
        <div className="search-icon-container">
          <CiSearch className="search-icon" />
        </div>
        <input
          type="text"
          className="search-input"
          placeholder="Search eg: infy bse, nifty fut, index fund"
        />
        <IoFilterOutline className="search-icon" />
      </div>
      <div className="watchlist-container">
        <p className="watchlist-text">Watchlist 1</p>
        <p className="newgroup-text">+ New group</p>
      </div>
      <div className="sidebar-table">
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead style={{ marginLeft: "100px" }}>
              <TableRow>
                <TableCell>Default(7)</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.Instrument}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.Instrument}
                  </TableCell>
                  <TableCell align="right">{row.Quantity}</TableCell>
                  <TableCell align="right">{row.Avg_Cost}</TableCell>
                  <TableCell align="right">{row.Invested}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
}
