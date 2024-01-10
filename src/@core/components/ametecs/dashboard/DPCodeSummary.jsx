import React, { useState, useEffect } from "react";
import DataTable from "react-data-table-component";
import { Button } from "reactstrap";
// import axios from "axios";
import XLSX from 'xlsx'

export default function DPCodeSummary({tableTitle, columns, data, fixedHeaderScrollHeight = "auto", fixedHeader = false}) {
  // const [tableData, setTableData] = useState([]);

  // useEffect(() => {
  //   axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
  //     // https://dummy.restapiexample.com/api/v1/employees
  //     setTableData(response.data);
  //   });
  // }, []);



  // const columns = [
  //   {
  //     name: "DP Code",
  //     selector: (row) => row.DPCode,
  //   },
  //   {
  //     name: "Count",
  //     selector: (row) => row.count,
  //     sortable: true,
  //   },
  //   {
  //     name: "Count %",
  //     selector: (row) => row.countInPercentage,
  //   },
  //   {
  //     name: "POS Value",
  //     selector: (row) => row.POSValue,
  //   },
  //   {
  //     name: "POS %",
  //     selector: (row) => row.POSValueInPercentage,
  //   },
  // ];

  // const dpCodes = [
  //   "RNR",
  //   "NC",
  //   "CBK",
  //   "PTP",
  //   "LPTP",
  //   "Paid",
  //   "PPaid",
  //   "NRTP",
  //   "Issue",
  //   "LM",
  //   "H.Lock",
  //   "O.Station",
  //   "Shifted",
  //   "Expire",
  //   "St.Add",
  //   "V.Pending",
  //   "FCL",
  //   "Settlement",
  //   "BPTP",
  //   "Escalation",
  //   "Trace",
  //   "Withdraw",
  //   "Total",
  // ];

  // const data = dpCodes.map((DPCode,index) => {
  //   return (
  //       {
  //           id: (index + 1),
  //           DPCode,
  //           count: "0",
  //           countInPercentage: "0",
  //           POSValue: "0",
  //           POSValueInPercentage: "0",
  //         }
  //   )
  // });

  const downloadExcel = (array) => {
    const workbook = XLSX.utils.book_new()
    const worksheet = XLSX.utils.json_to_sheet(array)
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1')
    const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' })
    const blob = new Blob([excelBuffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' })
    const filename = 'export.xlsx'

    if (window.navigator.msSaveOrOpenBlob) {
      // For IE and Edge browsers
      window.navigator.msSaveOrOpenBlob(blob, filename)
    } else {
      const url = URL.createObjectURL(blob)
      const link = document.createElement('a')
      link.href = url
      link.download = filename
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      URL.revokeObjectURL(url)
    }
  }

  return (
    <div>
      <div className="mb-1 d-flex justify-content-between align-items-center">
        <span className="font-weight-bold" style={{ fontSize: "18px" }}>
            {tableTitle}
        </span>
        <Button.Ripple onClick={() => downloadExcel(data)} color="primary" size='sm'>Excel</Button.Ripple>
      </div>
      <DataTable
        title="Desserts"
        columns={columns}
        data={data}
        noHeader
        responsive
        fixedHeader={fixedHeader}
        fixedHeaderScrollHeight={fixedHeaderScrollHeight}
        highlightOnHover={true}
        onColumnOrderChange={(cols) => console.log(cols)}
      />
    </div>
  );
}
