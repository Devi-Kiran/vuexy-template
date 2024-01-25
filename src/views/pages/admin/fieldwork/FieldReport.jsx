import React, { useState } from "react";
import BreadCrumbs from "../../../../@core/components/breadcrumbs";
import { downloadExcelTable } from "../../../../utility/app/downloadExcelTable";
import DataTable from "react-data-table-component";
import { Search } from "react-feather";
import Select from "react-select";
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

function FieldReport() {
  const reviewsTableData = [
    {
      id: "2021",
      name: "KA",
      role: "tester",
      mobile: "7288097613",
      loginTime: "2023-11-30 18:32:00",
      latestAddress: "NC",
      latestTrackTime: "12:15:32",
      totalVisits: "33",
      leadID: "837",
    },
    {
      id: "2022",
      name: "Ak",
      role: "backend",
      mobile: "7288097613",
      loginTime: "2023-11-30 18:32:00",
      latestAddress: "NC",
      latestTrackTime: "12:15:32",
      totalVisits: "33",
      leadID: "824",
    },
    {
      id: "2023",
      name: "ka",
      role: "frontend",
      mobile: "7288097613",
      loginTime: "2023-11-30 18:32:00",
      latestAddress: "NC",
      latestTrackTime: "12:15:32",
      totalVisits: "33",
      leadID: "543",
    },
    {
      id: "2024",
      name: "ak",
      role: "admin",
      mobile: "9392018271",
      loginTime: "2023-11-30 18:32:00",
      latestAddress: "AC",
      latestTrackTime: "12:15:32",
      totalVisits: "33",
      leadID: "223",
    }
  ];

  const [fromDate, setFromDate] = useState(
    new Date().toISOString().split("T")[0]
  );
  const [toDate, setToDate] = useState(new Date().toISOString().split("T")[0]);
  const [portfolio, setPortfolio] = useState(colourOptions[0]);
  const [minimumAgeOFLastCall, setMinimumAgeOFLastCall] = useState(
    colourOptions[0]
  );
  const [filterText, setFilterText] = useState("");
  const [reviewsTable, setReviewsTable] = useState(reviewsTableData);

  const filteredReviewsData = reviewsTable.filter((item) => {
    return (
      item.id?.includes(filterText) ||
      item.name
        ?.toLowerCase()
        .includes(filterText.toLowerCase()) ||
      item.role?.toLowerCase().includes(filterText.toLowerCase()) ||
      item.mobile?.includes(filterText) ||
      item.loginTime?.includes(filterText) ||
      item.latestAddress?.toLowerCase().includes(filterText.toLowerCase()) ||
      item.latestTrackTime?.includes(filterText) ||
      item.totalVisits?.includes(filterText) ||
      item.leadID?.includes(filterText)
    );
  });

  const reviewsTableColumns = [
    {
      name: "ID",
      selector: (row) => row.id,
    },
    {
      name: "Name",
      selector: (row) => row.name,
    },
    {
      name: "Role",
      selector: (row) => row.role,
    },
    {
      name: "Mobile",
      selector: (row) => row.mobile,
    },
    {
      name: "Login Time",
      selector: (row) => row.loginTime,
    },
    {
      name: "Latest Address",
      selector: (row) => row.latestAddress,
    },
    {
      name: "Latest Track Time",
      selector: (row) => row.latestTrackTime,
    },
    {
      name: "Total Visits",
      selector: (row) => row.totalVisits,
    },
    {
      name: "Lead Id",
      selector: (row) => row.leadID,
    }
  ];

  const filterHandler = (e) => {
    e.preventDefault();
    console.log(fromDate, toDate, portfolio, minimumAgeOFLastCall);
  };

  return (
    <div>
      <BreadCrumbs
        breadCrumbTitle="Field Report"
        breadCrumbActive="Field Report"
      />
      <Card>
        <CardBody>
          <Form>
            <Row>
              <Col xs="12" sm="6" md="3">
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

              <Col xs="12" sm="6" md="3">
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

              <Col xs="12" sm="6" md="3">
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
              </Col>

              <Col xs="12" sm="6" md="3">
                <FormGroup>
                  <Label for="minimumAgeOfLastCall">Min Age Of Last Call</Label>
                  <Select
                    id="minimumAgeOfLastCall"
                    className="react-select"
                    classNamePrefix="select"
                    defaultValue={minimumAgeOFLastCall}
                    options={colourOptions}
                    value={minimumAgeOFLastCall}
                    onChange={(e) => setMinimumAgeOFLastCall(e)}
                    isClearable={false}
                  />
                </FormGroup>
              </Col>

              <Col
                xs="12"
                md="3"
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
          {/* <Button.Ripple
            onClick={() => downloadExcelTable(reviewsTableData)}
            className="mr-1"
            color="primary"
            size="sm"
          >
            Excel
          </Button.Ripple> */}
          <Input
            type="search"
            value={filterText}
            placeholder="Search..."
            style={{ width: "200px" }}
            onChange={(e) => setFilterText(e.target.value)}
          />
        </div>
        <DataTable
          columns={reviewsTableColumns}
          data={filteredReviewsData}
          noHeader
          responsive
          pagination
          highlightOnHover={true}
        />
      </div>
    </div>
  );
}

export default FieldReport;
