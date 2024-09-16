import React from 'react';
import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import jsPDF from "jspdf";
import "jspdf-autotable";

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

function App() {

  // for one table 
  // const downloadPDF = () => {

  //   const doc = new jsPDF("p", "pt", "a4");
  
  //     // Add Heading
  //     doc.setFontSize(10);
  //     doc.setFont("helvetica", "bold");
  //     doc.text(`Fine Gold Report`, doc.internal.pageSize.getWidth() / 2, 30, "center");
  //     doc.setFont("helvetica", "normal");
  //     // doc.text(`Start Date : ${moment(fromDate).format("DD-MM-YYYY")}  End Date : ${moment(toDate).format("DD-MM-YYYY")}`, doc.internal.pageSize.getWidth() / 2, 45, "center");
  //     doc.text("", doc.internal.pageSize.getWidth() / 2, 100, "center"); // Empty text to create space

      
  //   doc.autoTableSetDefaults({
  //     startY: 60,
  //     margin: { top: 10, right: 10, left: 10 , bottom : 10},
  //     tableWidth: "auto",
  //     showHead: "firstPage",
  //     // tableLineColor: [0, 0, 0],
  //     tableLineWidth: 0.5,
  //     // theme: 'grid',
  //     headStyles: {
  //       fillColor: [211, 211, 211], // Background color as RGB
  //       textColor: [0, 0, 0], // Text color as RGB
  //     },
  //     footStyles: {
  //       fillColor: [211, 211, 211], // Background color as RGB
  //       textColor: [0, 0, 0], // Text color as RGB
  //     },
  //   });

  //   const table = document.getElementById("tbl_exporttable_to_xls");

  //   doc.autoTable({
  //     html: table,
  //     styles: {
  //       fontSize: 7, 
  //     },
  //   });

  //   doc.save("Fine_Gold_Report.pdf");
  // };




  // for two table 

  const downloadPDF = () => {

    const doc = new jsPDF("p", "pt", "a4");

    // Add Heading
    doc.setFontSize(10);
    doc.setFont("helvetica", "bold");
    doc.text(`Test PDF`, doc.internal.pageSize.getWidth() / 2, 30);
    doc.setFont("helvetica", "normal");
    doc.text("", doc.internal.pageSize.getWidth() / 2, 100); // Empty text to create space

    // First table
    const table1 = document.getElementById("tbl_exporttable_to_xls");
    doc.autoTable({
      html: table1,
      startY: 60,
      margin: { top: 10, right: 10, left: 10 , bottom : 10},
      styles: {
        fontSize: 7,
      },
      headStyles: {
        fillColor: [211, 211, 211],
        textColor: [0, 0, 0],
      },
    });

    // Add space between the two tables
    const finalY = doc.lastAutoTable.finalY || 60;
    doc.text("", doc.internal.pageSize.getWidth() / 2, finalY + 10); // Add a gap between tables

    // Second table
    const table2 = document.getElementById("tbl_exporttable_to");
    doc.autoTable({
      html: table2,
      startY: finalY + 20, // Adjust the start position for the second table
      margin: { top: 10, right: 10, left: 10 , bottom : 10},
      styles: {
        fontSize: 7,
      },
      headStyles: {
        fillColor: [211, 211, 211],
        textColor: [0, 0, 0],
      },
    });

    doc.save("Test_pdf.pdf");
  };

  return (
    <>
      <Button
        variant="contained"
        sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 2 }}
        onClick={downloadPDF}
      >
        Download PDF
      </Button>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table" id="tbl_exporttable_to_xls">
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

      <TableContainer component={Paper} sx={{marginTop: '20px'}}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table" id="tbl_exporttable_to">
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

export default App;
