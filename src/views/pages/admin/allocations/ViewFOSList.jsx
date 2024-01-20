import React, { useState } from "react";
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

function ViewFOSList() {
  const FOSListData = [
    {
      date: "2020",
      portfolio: "HDFC Business Loan",
      leadID: "Teja Ametecs",
      customerName: "prasadh",
      accountNumber: "20240116_121613_0_9848599401.wav",
      status: "0",
      LMS: "00:30",
      DPCode: "na",
      fieldVisitStatus: "2024-01-16 12:15:32",
      Feedback: "HDFC Business Loan",
      FOSFeedback: "Teja Ametecs",
      FOS: "9848599401",
      POSAmount: "20240116_121613_0_9848599401.wav",
      PWC: "0",
      PWF: "00:30",
      tracedAddress: "2024-01-16 12:15:32",
      address1: "9848599401",
      address2: "20240116_121613_0_9848599401.wav",
      address3: "0",
      traceDetails: "2024-01-16 12:15:32",
    },
    {
      date: "2021",
      portfolio: "IDFC Business Loan",
      leadID: "kiran Ametecs",
      customerName: "nani",
      accountNumber: "2024_121613_0_984859940.wav",
      status: "3",
      LMS: "00:35",
      DPCode: "llp",
      fieldVisitStatus: "2024-01-17 12:15:32",
      Feedback: "IDFC Business Loan",
      FOSFeedback: "kiran Ametecs",
      FOS: "1234567890",
      POSAmount: "20240116_121613_0_984859940.wav",
      PWC: "0",
      PWF: "00:34",
      tracedAddress: "2024-01-16 12:15:30",
      address1: "123456",
      address2: "20240_121613_0_984859940.wav",
      address3: "3",
      traceDetails: "2024-01-10 12:15:32",
    },
  ];

  const [FOS, setFOS] = useState(colourOptions[0]);
  const [portfolio, setPortfolio] = useState(colourOptions[0]);
  const [status, setStatus] = useState(colourOptions[0]);
  const [fieldVisitStatus, setFieldVisitStatus] = useState(colourOptions[0]);
  const [filterText, setFilterText] = useState("");
  const [tableData, setTableData] = useState(FOSListData);

  const filteredFOSListData = tableData.filter((item) => {
    return (
      item.date?.includes(filterText) ||
      item.portfolio?.toLowerCase().includes(filterText.toLowerCase()) ||
      item.leadID?.includes(filterText) ||
      item.customerName?.toLowerCase().includes(filterText.toLowerCase()) ||
      item.accountNumber?.includes(filterText) ||
      item.status?.toLowerCase().includes(filterText.toLowerCase()) ||
      item.LMS?.includes(filterText) ||
      item.DPCode?.toLowerCase().includes(filterText.toLowerCase()) ||
      item.fieldVisitStatus?.toLowerCase().includes(filterText.toLowerCase()) ||
      item.Feedback?.toLowerCase().includes(filterText.toLowerCase()) ||
      item.FOSFeedback?.toLowerCase().includes(filterText.toLowerCase()) ||
      item.FOS?.includes(filterText) ||
      item.POSAmount?.includes(filterText) ||
      item.PWC?.includes(filterText) ||
      item.PWF?.includes(filterText) ||
      item.tracedAddress?.includes(filterText) ||
      item.address1?.toLowerCase().includes(filterText.toLowerCase()) ||
      item.address2?.toLowerCase().includes(filterText.toLowerCase()) ||
      item.address3?.toLowerCase().includes(filterText.toLowerCase()) ||
      item.traceDetails?.includes(filterText)
    );
  });

  const FOSListColumns = [
    {
      name: "Date",
      selector: (row) => row.date,
    },
    {
      name: "Portfolio",
      selector: (row) => row.portfolio,
    },
    {
      name: "Lead id",
      selector: (row) => row.leadID,
    },
    {
      name: "Customer Name",
      selector: (row) => row.customerName,
    },
    {
      name: "Account Number",
      selector: (row) => row.accountNumber,
    },
    {
      name: "Status",
      selector: (row) => row.status,
    },
    {
      name: "LMS",
      selector: (row) => row.LMS,
    },
    {
      name: "DP Code",
      selector: (row) => row.DPCode,
    },
    {
      name: "Field Visit Status",
      selector: (row) => row.fieldVisitStatus,
    },
    {
      name: "Feedback",
      selector: (row) => row.Feedback,
    },
    {
      name: "FOS Feedback",
      selector: (row) => row.FOSFeedback,
    },
    {
      name: "FOS",
      selector: (row) => row.FOS,
    },
    {
      name: "POS Amount",
      selector: (row) => row.POSAmount,
    },
    {
      name: "PWC",
      selector: (row) => row.PWC,
    },
    {
      name: "PWF",
      selector: (row) => row.PWF,
    },
    {
      name: "Traced Address",
      selector: (row) => row.tracedAddress,
    },
    {
      name: "Address1",
      selector: (row) => row.address1,
    },
    {
      name: "Adress2",
      selector: (row) => row.address2,
    },
    {
      name: "Address3",
      selector: (row) => row.address3,
    },
    {
      name: "Trace Details",
      selector: (row) => row.traceDetails,
    },
  ];

  const filterHandler = (e) => {
    e.preventDefault();
    console.log(
      FOS.label,
      portfolio.label,
      status.label,
      fieldVisitStatus.label
    );
  };
  return (
    <div>
      <BreadCrumbs breadCrumbTitle="FOS List" breadCrumbActive="FOS List" />
      <Card>
        <CardHeader>
          <CardTitle tag="h4">Filter</CardTitle>
        </CardHeader>

        <CardBody>
          <Form>
            <Row>
              <Col md="4" xs="6">
                <FormGroup>
                  <Label for="FOS">FOS</Label>
                  <Select
                    id="FOS"
                    className="react-select"
                    classNamePrefix="select"
                    defaultValue={FOS}
                    options={colourOptions}
                    value={FOS}
                    onChange={(e) => setFOS(e)}
                    isClearable={false}
                  />
                </FormGroup>
              </Col>

              <Col md="4" xs="6">
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

              <Col md="4" xs="6">
                <FormGroup>
                  <Label for="status">Status</Label>
                  <Select
                    id="status"
                    className="react-select"
                    classNamePrefix="select"
                    defaultValue={status}
                    options={colourOptions}
                    value={status}
                    onChange={(e) => setStatus(e)}
                    isClearable={false}
                  />
                </FormGroup>
              </Col>

              <Col md="4" xs="6">
                <FormGroup>
                  <Label for="fieldVisitStatus">Field Visit Status</Label>
                  <Select
                    id="fieldVisitStatus"
                    className="react-select"
                    classNamePrefix="select"
                    defaultValue={fieldVisitStatus}
                    options={colourOptions}
                    value={fieldVisitStatus}
                    onChange={(e) => setFieldVisitStatus(e)}
                    isClearable={false}
                  />
                </FormGroup>
              </Col>

              <Col
                xs="12"
                className="d-flex justify-content-between align-items-center"
              >
                <div>
                  <FormGroup className="d-flex mb-0">
                    <Button.Ripple
                      className="mr-1"
                      color="primary"
                      type="submit"
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

export default ViewFOSList;
