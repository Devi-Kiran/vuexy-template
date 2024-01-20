import React, { useState, useEffect } from "react";
import BreadCrumbs from "../../../../@core/components/breadcrumbs";
import { downloadExcelTable } from "../../../../utility/app/downloadExcelTable";
import Select from "react-select";
import DataTable from "react-data-table-component";
import { Search } from "react-feather";
import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  FormGroup,
  Row,
  Col,
  Form,
  Button,
  Input,
  Label,
} from "reactstrap";

import "@styles/react/libs/flatpickr/flatpickr.scss";

const colourOptions = [
  { value: "select", label: "Select" },
  { value: "ocean", label: "Ocean" },
  { value: "blue", label: "Blue" },
  { value: "purple", label: "Purple" },
  { value: "red", label: "Red" },
  { value: "orange", label: "Orange" },
];

function POSGrid() {
  const FOSListData = [
    {
      slab: "2021",
      totalAccounts: "55",
      totalPOS: "66",
      PWC: "993",
      paid: "20240116_121613_0_9848599401",
      PTP: "0",
      NC: "00:30",
      NRTP: "33",
      other: "2024-01-16 12:15:32",
      TCL: "34",
      FOS: "5000",
    },
    {
      slab: "2020",
      totalAccounts: "4005",
      totalPOS: "38",
      PWC: "85",
      paid: "20240116_121613_0_9848599401",
      PTP: "3",
      NC: "00:35",
      NRTP: "443",
      other: "2024-01-16 12:15:32",
      TCL: "33",
      FOS: "557",
    },
  ];

  const [portfolio, setPortfolio] = useState(colourOptions[0]);
  const [filterText, setFilterText] = useState("");
  const [POSGridTable, setPOSGridTable] = useState(FOSListData);

  useEffect(() => {
    console.log("changed portyfolio")
  },[portfolio])

  const filteredFOSListData = POSGridTable.filter((item) => {
    return (
      item.slab?.includes(filterText) ||
      item.totalAccounts?.includes(filterText) ||
      item.totalPOS?.includes(filterText) ||
      item.PWC?.includes(filterText) ||
      item.paid?.includes(filterText) ||
      item.PTP?.includes(filterText) ||
      item.NC?.includes(filterText) ||
      item.NRTP?.includes(filterText) ||
      item.other?.includes(filterText) ||
      item.TCL?.includes(filterText) ||
      item.FOS?.includes(filterText)
    );
  });

  const FOSListColumns = [
    {
      name: "Slab",
      selector: (row) => row.slab,
    },
    {
      name: "Total Accounts",
      selector: (row) => row.totalAccounts,
    },
    {
      name: "Total POS",
      selector: (row) => row.totalPOS,
    },
    {
      name: "PWC",
      selector: (row) => row.PWC,
    },
    {
      name: "Paid",
      selector: (row) => row.paid,
    },
    {
      name: "PTP",
      selector: (row) => row.PTP,
    },
    {
      name: "NC",
      selector: (row) => row.NC,
    },
    {
      name: "NRTP",
      selector: (row) => row.NRTP,
    },
    {
      name: "Other",
      selector: (row) => row.other,
    },
    {
      name: "TCL",
      selector: (row) => row.TCL,
    },
    {
      name: "FOS",
      selector: (row) => row.FOS,
    },
  ];

  return (
    <div>
      <BreadCrumbs
        breadCrumbTitle="POS Grid Analysis"
        breadCrumbActive="POS Grid Analysis"
      />
      <Form>
        <div style={{ width: "250px" }}>
          <FormGroup>
            <Label for="portfolio">Portfolio</Label>
            <Select
              id="portfolio"
              className="react-select"
              classNamePrefix="select"
              defaultValue={portfolio}
              options={colourOptions}
              value={portfolio}
              onChange={(e) => setPortfolio(e)}
              isClearable={false}
            />
          </FormGroup>
        </div>
      </Form>

      <div className="">
        <div className="d-flex justify-content-end bg-white p-1">
          <Button.Ripple
            onClick={() => downloadExcelTable(FOSListData)}
            className="mr-1"
            color="primary"
            size="sm"
          >
            Excel
          </Button.Ripple>
          <Input
            type="search"
            value={filterText}
            placeholder="Search..."
            style={{ width: "200px" }}
            onChange={(e) => setFilterText(e.target.value)}
          />
        </div>
        <DataTable
          columns={FOSListColumns}
          data={filteredFOSListData}
          noHeader
          responsive
          pagination
          highlightOnHover={true}
        />
      </div>
    </div>
  );
}

export default POSGrid;
