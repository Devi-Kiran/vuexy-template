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
      customerFirstName: "ka",
      customerLastName: "bandaru",
      DPCode: "NC",
      fieldVisitStatus: "Not Required",
      customerMobile: "7288097613",
      portfolio: "HDFC Business Loan",
      allocatedTo: "KA",
      FOS: "ka",
      status: "actioned",
      followupDate: "2023-11-30 18:32:00",
      reviewAddedBy: "2024-01-16 12:15:32",
      review: "34",
      reviewDate: "7 days",
      remarks: "finacial issues",
      FOSRemarks: "ka",
    },
    {
      id: "2027",
      customerFirstName: "ka",
      customerLastName: "bandaru",
      DPCode: "NC",
      fieldVisitStatus: "Not Required",
      customerMobile: "7288097613",
      portfolio: "HDFC Business Loan",
      allocatedTo: "KA",
      FOS: "ka",
      status: "actioned",
      followupDate: "2023-11-30 18:32:00",
      reviewAddedBy: "2024-01-16 12:15:32",
      review: "33",
      reviewDate: "2 days",
      remarks: "finacial issues",
      FOSRemarks: "ka",
    },
    {
      id: "2025",
      customerFirstName: "ak",
      customerLastName: "bonapatti",
      DPCode: "CN",
      fieldVisitStatus: "Required",
      customerMobile: "9392018271",
      portfolio: "HDFC Business Loan",
      allocatedTo: "AK",
      FOS: "AK",
      status: "unactioned",
      followupDate: "2023-11-30",
      reviewAddedBy: "2024-01-16 12:15:32",
      review: "34",
      reviewDate: "7 days",
      remarks: "bank issues",
      FOSRemarks: "ka",
    },
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
      item.customerFirstName
        ?.toLowerCase()
        .includes(filterText.toLowerCase()) ||
      item.customerLastName?.toLowerCase().includes(filterText.toLowerCase()) ||
      item.DPCode?.toLowerCase().includes(filterText.toLowerCase()) ||
      item.fieldVisitStatus?.toLowerCase().includes(filterText.toLowerCase()) ||
      item.customerMobile?.includes(filterText) ||
      item.portfolio?.toLowerCase().includes(filterText.toLowerCase()) ||
      item.allocatedTo?.toLowerCase().includes(filterText.toLowerCase()) ||
      item.FOS?.toLowerCase().includes(filterText.toLowerCase()) ||
      item.lastActionedBy?.toLowerCase().includes(filterText.toLowerCase()) ||
      item.status?.toLowerCase().includes(filterText.toLowerCase()) ||
      item.followupDate?.includes(filterText) ||
      item.reviewAddedBy?.toLowerCase().includes(filterText.toLowerCase()) ||
      item.review?.toLowerCase().includes(filterText.toLowerCase()) ||
      item.reviewDate?.includes(filterText) ||
      item.remarks?.toLowerCase().includes(filterText.toLowerCase()) ||
      item.FOSRemarks?.toLowerCase().includes(filterText.toLowerCase())
    );
  });

  const reviewsTableColumns = [
    {
      name: "ID",
      selector: (row) => row.id,
    },
    {
      name: "Customer First Name",
      selector: (row) => row.customerFirstName,
      sortable: true,
    },
    {
      name: "Customer Last Name",
      selector: (row) => row.customerLastName,
      sortable: true,
    },
    {
      name: "DP Code",
      selector: (row) => row.DPCode,
      sortable: true,
    },
    {
      name: "Field Visit Status",
      selector: (row) => row.fieldVisitStatus,
      sortable: true,
    },
    {
      name: "Customer Mobile",
      selector: (row) => row.customerMobile,
      sortable: true,
    },
    {
      name: "Portfolio",
      selector: (row) => row.portfolio,
      sortable: true,
    },
    {
      name: "Allocated To",
      selector: (row) => row.allocatedTo,
      sortable: true,
    },
    {
      name: "FOS",
      selector: (row) => row.FOS,
      sortable: true,
    },
    {
      name: "Status",
      selector: (row) => row.status,
      sortable: true,
    },
    {
      name: "Followup Date",
      selector: (row) => row.followupDate,
      sortable: true,
    },
    {
      name: "Review Added By",
      selector: (row) => row.reviewAddedBy,
      sortable: true,
    },
    {
      name: "Review",
      selector: (row) => row.review,
      sortable: true,
    },
    {
      name: "Review Date",
      selector: (row) => row.reviewDate,
      sortable: true,
    },
    {
      name: "Remarks",
      selector: (row) => row.remarks,
      sortable: true,
    },
    {
      name: "FOS Remarks",
      selector: (row) => row.FOSRemarks,
      sortable: true,
    },
  ];

  const filterHandler = (e) => {
    e.preventDefault();
    console.log(fromDate, toDate);
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
          <Button.Ripple
            onClick={() => downloadExcelTable(reviewsTableData)}
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
