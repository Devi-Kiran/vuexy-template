import React, { useState } from "react";
import BreadCrumbs from "../../../../@core/components/breadcrumbs";
import { downloadExcelTable } from "../../../../utility/app/downloadExcelTable";
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
import Flatpickr from "react-flatpickr";

import "@styles/react/libs/flatpickr/flatpickr.scss";

const colourOptions = [
  { value: "select", label: "Select" },
  { value: "ocean", label: "Ocean" },
  { value: "blue", label: "Blue" },
  { value: "purple", label: "Purple" },
  { value: "red", label: "Red" },
  { value: "orange", label: "Orange" },
];

function FieldRemarks() {
  const remarksTableData = [
    {
      sNo: "2021",
      employeeName: "ka",
      date: "2023-01-16 12:15:32",
      count: "36",
    },
    {
      sNo: "2022",
      employeeName: "AK",
      date: "2024-01-16 12:15:32",
      count: "34",
    },
    {
      sNo: "2023",
      employeeName: "ka",
      date: "2026-01-16 12:15:32",
      count: "34",
    }
  ];

  const [fromDate, setFromDate] = useState(
    new Date().toISOString().split("T")[0]
  );
  const [toDate, setToDate] = useState(new Date().toISOString().split("T")[0]);
  const [filterText, setFilterText] = useState("");
  const [remarksTable, setRemarksTable] = useState(remarksTableData);

  const filteredRemarksData = remarksTable.filter((item) => {
    return (
      item.sNo?.includes(filterText) ||
      item.employeeName
        ?.toLowerCase()
        .includes(filterText.toLowerCase()) ||
      item.date?.includes(filterText) ||
      item.count?.includes(filterText)
    );
  });

  const remarksTableColumns = [
    {
      name: "S.NO",
      selector: (row) => row.sNo,
    },
    {
      name: "Employee Name",
      selector: (row) => row.employeeName,
      sortable: true,
    },
    {
      name: "Date",
      selector: (row) => row.date,
      sortable: true,
    },
    {
      name: "Count",
      selector: (row) => row.count,
      sortable: true,
    },
  ];

  const filterHandler = (e) => {
    e.preventDefault();
    console.log(fromDate, toDate);
  };

  return (
    <div>
      <BreadCrumbs breadCrumbTitle="Field Remarks" breadCrumbActive="Field Remarks" />
      <Card>
        <CardBody>
          <Form>
            <Row>
              <Col xs="12" sm="6" md="4">
                <FormGroup>
                  <Label for="fromDate">From Date</Label>
                  <Flatpickr
                    className="form-control"
                    value={fromDate}
                    onChange={(dates) => {
                      const selectedDate = new Date(dates[0]);
                      selectedDate.setDate(selectedDate.getDate() + 1);
                      setFromDate(selectedDate.toISOString().split("T")[0]);
                    }}
                    id="fromtDate"
                  />
                </FormGroup>
              </Col>

              <Col xs="12" sm="6" md="4">
                <FormGroup>
                  <Label for="toDate">To Date</Label>
                  <Flatpickr
                    className="form-control"
                    value={toDate}
                    onChange={(dates) => {
                      const selectedDate = new Date(dates[0]);
                      selectedDate.setDate(selectedDate.getDate() + 1);
                      setToDate(selectedDate.toISOString().split("T")[0]);
                    }}
                    id="toDate"
                  />
                </FormGroup>
              </Col>

              <Col
                xs="12"
                md="4"
                className="d-flex justify-content-between align-items-center"
              >
                <div>
                  <FormGroup className="d-flex mb-0">
                    <Button.Ripple
                      className="mr-1"
                      color="primary"
                      type="submit"
                      style={{ marginTop: "6px" }}
                      onClick={filterHandler}
                    >
                      <span className="d-md-none">
                        <Search size="18" />
                      </span>
                      <span className="d-none d-md-inline-block">Search</span>
                    </Button.Ripple>
                  </FormGroup>
                </div>
              </Col>
            </Row>
          </Form>
        </CardBody>
      </Card>

      <div className="">
        <div className="d-flex justify-content-end bg-white p-1">
          <Button.Ripple
            onClick={() => downloadExcelTable(remarksTableData)}
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
          columns={remarksTableColumns}
          data={filteredRemarksData}
          noHeader
          responsive
          pagination
          highlightOnHover={true}
        />
      </div>
    </div>
  );
}

export default FieldRemarks;
