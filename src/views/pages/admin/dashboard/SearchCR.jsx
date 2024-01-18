import React, { useState } from "react";
import BreadCrumbs from "../../../../@core/components/breadcrumbs";
import Select from "react-select";
import Flatpickr from "react-flatpickr";
import DataTable from "react-data-table-component";
import { Download, Trash2, Search } from "react-feather";
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

function SearchCR() {
  const resolutionStatusData = [
    {
      id: 1,
      campaignName: "HDFC Business Loan",
      employeeName: "Teja Ametecs",
      mobile: "9848599401",
      fileName: "20240116_121613_0_9848599401.wav",
      fileSize: "0",
      duration: "00:30",
      createdDate: "2024-01-16 12:15:32",
    },
    {
      id: 2,
      campaignName: "HDFC Mortgage",
      employeeName: "Kumar admin",
      mobile: "9951438329",
      fileName: "20240113_101921_0_9951438329.wav",
      fileSize: "0",
      duration: "00:27",
      createdDate: "2024-01-12 16:18:04",
    },
    {
      id: 3,
      campaignName: "Kotak Mahindra Bank",
      employeeName: "madhu ametecs",
      mobile: "9391890461",
      fileName: "20240113_101919_0_9391890461.wav",
      fileSize: "0",
      duration: "00:28",
      createdDate: "2024-01-12 16:09:02",
    },
    {
      id: 4,
      campaignName: "Hem 2",
      employeeName: "Ametecs admin",
      mobile: "9205227778",
      fileName: "20240112_111930_0_9205227778.wav",
      fileSize: "0",
      duration: "00:14",
      createdDate: "2024-01-11 18:13:47",
    },
    {
      id: 5,
      campaignName: "HDFC Business Loan",
      employeeName: "Teja Ametecs",
      mobile: "9848599401",
      fileName: "20240116_121613_0_9848599401.wav",
      fileSize: "0",
      duration: "00:30",
      createdDate: "2024-01-16 12:15:32",
    },
    {
      id: 6,
      campaignName: "HDFC Mortgage",
      employeeName: "Kumar admin",
      mobile: "9951438329",
      fileName: "20240113_101921_0_9951438329.wav",
      fileSize: "0",
      duration: "00:27",
      createdDate: "2024-01-12 16:18:04",
    },
    {
      id: 7,
      campaignName: "Kotak Mahindra Bank",
      employeeName: "madhu ametecs",
      mobile: "9391890461",
      fileName: "20240113_101919_0_9391890461.wav",
      fileSize: "0",
      duration: "00:28",
      createdDate: "2024-01-12 16:09:02",
    },
    {
      id: 8,
      campaignName: "Hem 2",
      employeeName: "Ametecs admin",
      mobile: "9205227778",
      fileName: "20240112_111930_0_9205227778.wav",
      fileSize: "0",
      duration: "00:14",
      createdDate: "2024-01-11 18:13:47",
    },
    {
      id: 9,
      campaignName: "HDFC Business Loan",
      employeeName: "Teja Ametecs",
      mobile: "9848599401",
      fileName: "20240116_121613_0_9848599401.wav",
      fileSize: "0",
      duration: "00:30",
      createdDate: "2024-01-16 12:15:32",
    },
    {
      id: 10,
      campaignName: "HDFC Mortgage",
      employeeName: "Kumar admin",
      mobile: "9951438329",
      fileName: "20240113_101921_0_9951438329.wav",
      fileSize: "0",
      duration: "00:27",
      createdDate: "2024-01-12 16:18:04",
    },
    {
      id: 11,
      campaignName: "Kotak Mahindra Bank",
      employeeName: "madhu ametecs",
      mobile: "9391890461",
      fileName: "20240113_101919_0_9391890461.wav",
      fileSize: "0",
      duration: "00:28",
      createdDate: "2024-01-12 16:09:02",
    },
    {
      id: 12,
      campaignName: "Hem 2",
      employeeName: "Ametecs admin",
      mobile: "9205227778",
      fileName: "20240112_111930_0_9205227778.wav",
      fileSize: "0",
      duration: "00:14",
      createdDate: "2024-01-11 18:13:47",
    },
    {
      id: 13,
      campaignName: "HDFC Business Loan",
      employeeName: "Teja Ametecs",
      mobile: "9848599401",
      fileName: "20240116_121613_0_9848599401.wav",
      fileSize: "0",
      duration: "00:30",
      createdDate: "2024-01-16 12:15:32",
    },
    {
      id: 14,
      campaignName: "HDFC Mortgage",
      employeeName: "Kumar admin",
      mobile: "9951438329",
      fileName: "20240113_101921_0_9951438329.wav",
      fileSize: "0",
      duration: "00:27",
      createdDate: "2024-01-12 16:18:04",
    },
    {
      id: 15,
      campaignName: "Kotak Mahindra Bank",
      employeeName: "madhu ametecs",
      mobile: "9391890461",
      fileName: "20240113_101919_0_9391890461.wav",
      fileSize: "0",
      duration: "00:28",
      createdDate: "2024-01-12 16:09:02",
    },
    {
      id: 16,
      campaignName: "Hem 2",
      employeeName: "Ametecs admin",
      mobile: "9205227778",
      fileName: "20240112_111930_0_9205227778.wav",
      fileSize: "0",
      duration: "00:14",
      createdDate: "2024-01-11 18:13:47",
    },
    {
      id: 17,
      campaignName: "HDFC Business Loan",
      employeeName: "Teja Ametecs",
      mobile: "9848599401",
      fileName: "20240116_121613_0_9848599401.wav",
      fileSize: "0",
      duration: "00:30",
      createdDate: "2024-01-16 12:15:32",
    },
    {
      id: 18,
      campaignName: "HDFC Mortgage",
      employeeName: "Kumar admin",
      mobile: "9951438329",
      fileName: "20240113_101921_0_9951438329.wav",
      fileSize: "0",
      duration: "00:27",
      createdDate: "2024-01-12 16:18:04",
    },
    {
      id: 19,
      campaignName: "Kotak Mahindra Bank",
      employeeName: "madhu ametecs",
      mobile: "9391890461",
      fileName: "20240113_101919_0_9391890461.wav",
      fileSize: "0",
      duration: "00:28",
      createdDate: "2024-01-12 16:09:02",
    },
    {
      id: 20,
      campaignName: "Hem 2",
      employeeName: "Ametecs admin",
      mobile: "9205227778",
      fileName: "20240112_111930_0_9205227778.wav",
      fileSize: "0",
      duration: "00:14",
      createdDate: "2024-01-11 18:13:47",
    },
  ];
  const [fromDate, setFromDate] = useState(
    new Date().toISOString().split("T")[0]
  );
  const [toDate, setToDate] = useState(new Date().toISOString().split("T")[0]);
  const [portfolio, setPortfolio] = useState(colourOptions[0]);
  const [employee, setEmployee] = useState(colourOptions[0]);
  const [searchMobile, setSearchMobile] = useState("");
  const [filterText, setFilterText] = useState("");
  const [tableData, setTableData] = useState(resolutionStatusData);

  const filteredResulutionStatusData = tableData.filter((item) => {
    return (
      item.campaignName.toLowerCase().includes(filterText.toLowerCase()) ||
      item.employeeName.toLowerCase().includes(filterText.toLowerCase()) ||
      item.mobile.includes(filterText) ||
      item.fileName.toLowerCase().includes(filterText.toLowerCase()) ||
      item.fileSize.includes(filterText) ||
      item.duration.includes(filterText) ||
      item.createdDate.includes(filterText)
    );
  });

  const searchCallADeleteHandler = ({ id }) => {
    setTableData(tableData.filter((item) => item.id != id));
  };

  const resolutionStatusColumns = [
    {
      name: "ID",
      selector: (row) => row.id,
    },
    {
      name: "Campaign Name",
      selector: (row) => row.campaignName,
    },
    {
      name: "Employee Name",
      selector: (row) => row.employeeName,
    },
    {
      name: "Mobile",
      selector: (row) => row.mobile,
    },
    {
      name: "File Name",
      selector: (row) => row.fileName,
    },
    {
      name: "File Size (in MB)",
      selector: (row) => row.fileSize,
    },
    {
      name: "Duration",
      selector: (row) => row.duration,
    },
    {
      name: "Created Date",
      selector: (row) => row.createdDate,
    },
    {
      name: "Action",
      selector: (row) => row.action,
      button: true,
      cell: (row) => {
        return (
          <>
            <Button
              title="Dowload"
              color="flat-dark"
              size="sm"
              style={{ marginRight: "2px" }}
              onClick={() => console.log(row.id)}
            >
              <Download size={18} />
            </Button>
            <Button title="Delete" color="flat-dark" size="sm">
              <Trash2 size={18} onClick={() => searchCallADeleteHandler(row)} />
            </Button>
          </>
        );
      },
    },
  ];

  const filterHandler = (e) => {
    e.preventDefault();
    console.log(
      fromDate,
      toDate,
      portfolio.label,
      employee.label,
      searchMobile
    );
  };
  return (
    <div>
      <BreadCrumbs
        breadCrumbTitle="Search Call Recordings"
        breadCrumbActive="Search Call Recordings"
      />
      <Card>
        <CardHeader>
          <CardTitle tag="h4">Filter</CardTitle>
        </CardHeader>

        <CardBody>
          <Form>
            <Row>
              <Col md="4" xs="6">
                <FormGroup>
                  <Label for="fromDate">From</Label>
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
              <Col md="4" xs="6">
                <FormGroup>
                  <Label for="toDate">To</Label>
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

              <Col md="4" xs="6">
                <FormGroup>
                  <Label for="portfolio">Select Portfolio</Label>
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
                  <Label for="employee">Select Employee</Label>
                  <Select
                    id="employee"
                    className="react-select"
                    classNamePrefix="select"
                    defaultValue={employee}
                    options={colourOptions}
                    value={employee}
                    onChange={(e) => setEmployee(e)}
                    isClearable={false}
                  />
                </FormGroup>
              </Col>

              <Col md="4" xs="6">
                <FormGroup>
                  <Label for="searchMobile">Search Mobile</Label>
                  <Input
                    type="number"
                    id="searchMobile"
                    value={searchMobile}
                    onChange={(e) => setSearchMobile(e.target.value)}
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
          <Input
            type="search"
            value={filterText}
            style={{width: "200px"}}
            onChange={(e) => setFilterText(e.target.value)}
          />
        </div>
        <DataTable
          columns={resolutionStatusColumns}
          data={filteredResulutionStatusData}
          noHeader
          responsive
          pagination
          highlightOnHover={true}
        />
      </div>
    </div>
  );
}

export default SearchCR;
