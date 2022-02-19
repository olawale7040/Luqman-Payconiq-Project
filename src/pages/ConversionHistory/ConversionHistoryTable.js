import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

// Utils
// import { formatNumber, shortDateFormat } from "src/utils";

const ConversionHistoryTable = ({}) => {
  return (
    <div>
      <TableContainer component={Paper}>
        <Table size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell>Date</TableCell>
              <TableCell>Event</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          {/* <TableBody> */}
          {/* {exchangeHistory.map((row) => (
              <TableRow
                key={row.timestamp}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {shortDateFormat(row.timestamp)}
                </TableCell>
                <TableCell align="right">
                  {formatNumber(+row.rate, 7)}
                </TableCell>
              </TableRow>
            ))} */}
          {/* </TableBody> */}
        </Table>
      </TableContainer>
    </div>
  );
};

export default ConversionHistoryTable;
