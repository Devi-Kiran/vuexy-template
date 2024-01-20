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

function Strikes() {
  const strikesTableData = [
    {
      id: "2021",
      customerFirstName: "ka",
      customerLastName: "bandaru",
      DPCode: "NC",
      fieldVisitStatus: "Not Required",
      customerMobile: "7288097613",
      portfolio: "HDFC Business Loan",
      allocatedTo: "KA",
      FOS: "",
      lastActionedBy: "",
      status: "actioned",
      POSAmount: "150000",
      PWC: "0.63",
      PWT: "0.33",
      PWF: "0.35",
      followupDate: "2023-11-30 18:32:00",
      lastActionedDate: "2024-01-16 12:15:32",
      noOfTimesCalled: "34",
      ageOfLastCall: "7 days",
      remarks: "finacial issues",
      FOSRemarks: "",
    },
    {
      id: "2026",
      customerFirstName: "ak",
      customerLastName: "bonapatti",
      DPCode: "RNR",
      fieldVisitStatus: "Not Required",
      customerMobile: "9392018271",
      portfolio: "IDFC Business Loan",
      allocatedTo: "AK",
      FOS: "",
      lastActionedBy: "",
      status: "un actioned",
      POSAmount: "160000",
      PWC: "0.61",
      PWT: "0.77",
      PWF: "0.3339",
      followupDate: "2022-11-30 18:32:00",
      lastActionedDate: "2025-01-16 12:15:32",
      noOfTimesCalled: "9",
      ageOfLastCall: "10 days",
      remarks: "not answering",
      FOSRemarks: "",
    },
    {
      id: "2025",
      customerFirstName: "ka",
      customerLastName: "bandaru",
      DPCode: "NC",
      fieldVisitStatus: "Not Required",
      customerMobile: "7288097613",
      portfolio: "HDFC Business Loan",
      allocatedTo: "KA",
      FOS: "",
      lastActionedBy: "",
      status: "actioned",
      POSAmount: "170000",
      PWC: "0.63",
      PWT: "0.33",
      PWF: "0.35",
      followupDate: "2023-11-30 18:32:00",
      lastActionedDate: "2024-01-16 12:15:32",
      noOfTimesCalled: "34",
      ageOfLastCall: "7 days",
      remarks: "finacial issues",
      FOSRemarks: "",
    },
  ];

  const [portfolio, setPortfolio] = useState(colourOptions[0]);
  const [minimumAgeOFLastCall, setMinimumAgeOFLastCall] = useState(
    colourOptions[0]
  );
  const [filterText, setFilterText] = useState("");
  const [strikesTable, setStrikesTable] = useState(strikesTableData);


  const filteredStrikesData = strikesTable.filter((item) => {
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
      item.POSAmount?.includes(filterText) ||
      item.PWC?.includes(filterText) ||
      item.PWT?.includes(filterText) ||
      item.PWF?.includes(filterText) ||
      item.followupDate?.includes(filterText) ||
      item.lastActionedDate?.includes(filterText) ||
      item.noOfTimesCalled?.includes(filterText) ||
      item.ageOfLastCall?.includes(filterText) ||
      item.remarks?.toLowerCase().includes(filterText.toLowerCase()) ||
      item.FOSRemarks?.toLowerCase().includes(filterText.toLowerCase())
    );
  });

  const strikesTableColumns = [
    {
      name: "ID",
      selector: (row) => row.id,
      sortable: true,
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
      name: "Last Actioned By",
      selector: (row) => row.lastActionedBy,
      sortable: true,
    },
    {
      name: "Status",
      selector: (row) => row.status,
      sortable: true,
    },
    {
      name: "POS Amount",
      selector: (row) => row.POSAmount,
      sortable: true,
    },
    {
      name: "PWC",
      selector: (row) => row.PWC,
      sortable: true,
    },
    {
      name: "PWT",
      selector: (row) => row.PWT,
      sortable: true,
    },
    {
      name: "PWF",
      selector: (row) => row.PWF,
      sortable: true,
    },
    {
      name: "Followup Date",
      selector: (row) => row.followupDate,
      sortable: true,
    },
    {
      name: "Last Actioned Date",
      selector: (row) => row.lastActionedDate,
      sortable: true,
    },
    {
      name: "No Of Times Called",
      selector: (row) => row.PWT,
      sortable: true,
    },
    {
      name: "PWF",
      selector: (row) => row.noOfTimesCalled,
      sortable: true,
    },
    {
      name: "Age Of Last Call",
      selector: (row) => row.ageOfLastCall,
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
    console.log(portfolio, minimumAgeOFLastCall)
  } 

  return (
    <div>
      <BreadCrumbs
        breadCrumbTitle="Strikes"
        breadCrumbActive="Strikes"
      />
      <Card>
        <CardBody>
          <Form>
            <Row>
              <Col xs="12" sm="6" md="4">
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

              <Col xs="12" sm="6" md="4">
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
                md="4"
                className="d-flex justify-content-between align-items-center"
              >
                <div>
                  <FormGroup className="d-flex mb-0">
                    <Button.Ripple
                      className="mr-1"
                      color="primary"
                      type="submit"
                      style={{marginTop: "6px"}}
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
            onClick={() => downloadExcelTable(strikesTableData)}
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
          columns={strikesTableColumns}
          data={filteredStrikesData}
          noHeader
          responsive
          pagination
          highlightOnHover={true}
        />
      </div>
    </div>
  );
}

export default Strikes;
