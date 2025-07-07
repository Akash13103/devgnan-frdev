import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
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
    <div className="sidebar-table">
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead style={{ marginLeft: "100px" }}>
            
            <TableRow>
              <TableCell>WatchList1 Default(7)</TableCell>
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
  );
}
