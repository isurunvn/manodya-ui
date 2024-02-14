import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 16,
  },
  // Conditional styles based on status
  '&.pending': {
    color: 'red',
  },
  '&.approved': {
    color: 'green',
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(Document_ID, Description, Time, Status, View ) {
  return { Document_ID, Description, Time, Status, View };
}

const rows = [
  createData('415841M', 'medical report', '2024.01.01 - 15.21', 'Pending', ),
  createData('515891F', 'balance slip', '2023.12.09 - 09.43', 'Approved', ),
  createData('515871F', 'pay sheet', '2023.12.15 - 13.21', 'Pending', ),
  createData('515891F', 'balance slip', '2023.11.01 - 14.49', "Approved", ),
];

export default function ActivityTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">Document_ID</StyledTableCell>
            <StyledTableCell align="center">Description</StyledTableCell>
            <StyledTableCell align="center">Time</StyledTableCell>
            <StyledTableCell align="center">Status</StyledTableCell>
            <StyledTableCell align="center">View</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.Document_ID}>
              <StyledTableCell component="th" scope="row" align="center">
                {row.Document_ID}
              </StyledTableCell>
              <StyledTableCell align="center">{row.Description}</StyledTableCell>
              <StyledTableCell align="center">{row.Time}</StyledTableCell>
              <StyledTableCell align="center" className={row.Status.toLowerCase()}>
                {row.Status}
              </StyledTableCell>
              <StyledTableCell align="center">                
                <Button variant="contained" color="primary">View</Button>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
