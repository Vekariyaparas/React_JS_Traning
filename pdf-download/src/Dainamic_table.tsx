import React from 'react';
import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import jsPDF from "jspdf";
import "jspdf-autotable";

// Sample data
function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number,
) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

function DainamicTable() {

  const downloadPDF = (tableId: string, pdfName: string) => {
    const doc = new jsPDF("p", "pt", "a4");

    doc.setFontSize(10);
    doc.setFont("helvetica", "bold");
    doc.text(`Test PDF for ${pdfName}`, doc.internal.pageSize.getWidth() / 2, 30, { align: "center" });

    const table = document.getElementById(tableId);
    if (table) {
      doc.autoTable({
        html: table,
        startY: 60,
        margin: { top: 10, right: 10, left: 10, bottom: 10 },
        styles: {
          fontSize: 7,
        },
        headStyles: {
          fillColor: [211, 211, 211],
          textColor: [0, 0, 0],
        },
      });
    } else {
      console.error(`Table with id ${tableId} not found`);
    }

    doc.save(`${pdfName}.pdf`);
  };

  return (
    <>
      {/* Button to download first table */}
      <Button
        variant="contained"
        sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 2 }}
        onClick={() => downloadPDF('table1', 'Table_1_Report')}
      >
        Download Table 1
      </Button>

      {/* First Table */}
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table" id="table1">
          <TableHead>
            <TableRow>
              <TableCell>Dessert (100g serving)</TableCell>
              <TableCell align="right">Calories</TableCell>
              <TableCell align="right">Fat&nbsp;(g)</TableCell>
              <TableCell align="right">Carbs&nbsp;(g)</TableCell>
              <TableCell align="right">Protein&nbsp;(g)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.calories}</TableCell>
                <TableCell align="right">{row.fat}</TableCell>
                <TableCell align="right">{row.carbs}</TableCell>
                <TableCell align="right">{row.protein}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Button to download second table */}
      <Button
        variant="contained"
        sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 2, marginTop: 10 }}
        onClick={() => downloadPDF('table2', 'Table_2_Report')}
      >
        Download Table 2
      </Button>

      {/* Second Table */}
      <TableContainer component={Paper} sx={{ marginTop: '20px' }}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table" id="table2">
          <TableHead>
            <TableRow>
              <TableCell>Dessert (100g serving)</TableCell>
              <TableCell align="right">Calories</TableCell>
              <TableCell align="right">Fat&nbsp;(g)</TableCell>
              <TableCell align="right">Carbs&nbsp;(g)</TableCell>
              <TableCell align="right">Protein&nbsp;(g)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.calories}</TableCell>
                <TableCell align="right">{row.fat}</TableCell>
                <TableCell align="right">{row.carbs}</TableCell>
                <TableCell align="right">{row.protein}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

    </>
  );
}

export default DainamicTable;
