import React, { useState } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  FormGroup,
  Row,
  Col,
  Input,
  Form,
  Button,
  Label,
} from "reactstrap";
import { PieChart, Table } from "react-feather";

import Select from "react-select";
import { Link } from "react-router-dom";
import DataTable from "react-data-table-component";
import { downloadExcelTable } from "../../../../utility/app/downloadExcelTable";
import Flatpickr from "react-flatpickr";
import StatsHorizontal from "@components/widgets/stats/StatsHorizontal";
import ChartjsBarChart from "../../../../@core/components/ametecs/dashboard/ChartjsBarChart";
import ChartjsHorizontalBarChart from "../../../../@core/components/ametecs/dashboard/ChartjsHorizontalBar";
import ChartjsRadarChart from "../../../../@core/components/ametecs/dashboard/ChartjsDoughnutChart";
import BreadCrumbs from "../../../../@core/components/breadcrumbs";

import "@styles/react/libs/flatpickr/flatpickr.scss";

const colourOptions = [
  { value: "select", label: "Select" },
  { value: "ocean", label: "Ocean" },
  { value: "blue", label: "Blue" },
  { value: "purple", label: "Purple" },
  { value: "red", label: "Red" },
  { value: "orange", label: "Orange" },
];

function Dashboard() {
  const [tableView, setTableView] = useState(true);
  const [fromDate, setFromDate] = useState(
    new Date().toISOString().split("T")[0]
  );
  const [toDate, setToDate] = useState(new Date().toISOString().split("T")[0]);
  const [source, setSource] = useState(colourOptions[0]);
  const [portfolio, setPortfolio] = useState(colourOptions[0]);
  const [group, setGroup] = useState(colourOptions[0]);
  const [bucket, setBucket] = useState(colourOptions[0]);
  const [TCL, setTCL] = useState(colourOptions[0]);
  const [FOS, setFOS] = useState(colourOptions[0]);

  const dpCodes = [
    "RNR",
    "NC",
    "CBK",
    "PTP",
    "LPTP",
    "Paid",
    "PPaid",
    "NRTP",
    "Issue",
    "LM",
    "H.Lock",
    "O.Station",
    "Shifted",
    "Expire",
    "St.Add",
    "V.Pending",
    "FCL",
    "Settlement",
    "BPTP",
    "Escalation",
    "Trace",
    "Withdraw",
    "Total",
  ];

  const DPCodesSummaryFlowsColumns = [
    {
      name: "DP Code",
      selector: (row) => row.DPCode,
    },
    {
      name: "Count",
      selector: (row) => row.count,
      sortable: true,
    },
    {
      name: "Count %",
      selector: (row) => row.countInPercentage,
    },
    {
      name: "POS Value",
      selector: (row) => row.POSValue,
    },
    {
      name: "POS %",
      selector: (row) => row.POSValueInPercentage,
    },
  ];

  const DPCodesSummaryFlowsData = dpCodes.map((DPCode, index) => {
    return {
      id: index + 1,
      DPCode,
      count: "0",
      countInPercentage: "0",
      POSValue: "0",
      POSValueInPercentage: "0",
    };
  });

  const DPCodesSummaryVintageColumns = [
    {
      name: "DP Code",
      selector: (row) => row.DPCode,
    },
    {
      name: "Count",
      selector: (row) => row.count,
      sortable: true,
    },
    {
      name: "Count %",
      selector: (row) => row.countInPercentage,
    },
    {
      name: "POS Value",
      selector: (row) => row.POSValue,
    },
    {
      name: "RR %",
      selector: (row) => row.RRValueInPercentage,
    },
  ];

  const DPCodesSummaryVintageData = dpCodes.map((DPCode, index) => {
    return {
      id: index + 1,
      DPCode,
      count: "0",
      countInPercentage: "0",
      POSValue: "0",
      RRValueInPercentage: "0",
    };
  });

  const collectionColumns = [
    {
      name: "Type",
      selector: (row) => row.type,
    },
    {
      name: "Amount",
      selector: (row) => row.amount,
    },
  ];

  const collectionFlowsData = [
    {
      id: 1,
      type: "Collected Amount",
      amount: "",
    },
    {
      id: 2,
      type: "LPP /BCC Charges",
      amount: "",
    },
    {
      id: 3,
      type: "Other Charges",
      amount: "",
    },
  ];

  const collectionVintageData = [
    {
      id: 1,
      type: "Collected Amount",
      amount: "",
    },
    {
      id: 2,
      type: "LPP /BCC Charges",
      amount: "",
    },
    {
      id: 3,
      type: "Other Charges",
      amount: "",
    },
  ];

  const resolutionStatusColumns = [
    {
      name: "LCS",
      selector: (row) => row.LCS,
    },
    {
      name: "Count",
      selector: (row) => row.count,
    },
    {
      name: "POS Value",
      selector: (row) => row.POSValue,
    },
    {
      name: "POS %",
      selector: (row) => row.POSValueInPercentage,
    },
  ];

  const resolutionStatusData = [
    {
      id: 1,
      LCS: "Norb",
      count: "",
      POSValue: "",
      POSValueInPercentage: "",
    },
    {
      id: 2,
      LCS: "Stab",
      count: "",
      POSValue: "",
      POSValueInPercentage: "",
    },
    {
      id: 3,
      LCS: "RB",
      count: "",
      POSValue: "",
      POSValueInPercentage: "",
    },
    {
      id: 4,
      LCS: "RF",
      count: "",
      POSValue: "",
      POSValueInPercentage: "",
    },
  ];

  const portfolioListColumns = [
    {
      name: "Portfolio Name",
      selector: (row) => row.portfolioName,
      sortable: true,
    },
    {
      name: "Category",
      selector: (row) => row.category,
      sortable: true,
    },
    {
      name: "POS Amount",
      selector: (row) => row.POSAmount,
      sortable: true,
    },
    {
      name: "Achieved POS",
      selector: (row) => row.achievedPOS,
      sortable: true,
    },
    {
      name: "Collected Amount",
      selector: (row) => row.collectedAmount,
      sortable: true,
    },
    {
      name: "Total Accounts",
      selector: (row) => row.totalAccounts,
      sortable: true,
    },
    {
      name: "Actioned Accounts",
      selector: (row) => row.actionedAccounts,
      sortable: true,
    },
    {
      name: "Unactioned Accounts",
      selector: (row) => row.unActionedAccounts,
      sortable: true,
    },
  ];

  const portfolioListData = [
    // {
    //   id: 1,
    //   portfolioName:  "",
    //   category: "",
    //   POSAmount: "",
    //   achievedPOS: "",
    //   collectedAmount: "",
    //   totalAccounts: "",
    //   actionedAccounts: "",
    //   unActionedAccounts: ""
    // },
  ];

  const filterHandler = (e) => {
    e.preventDefault();
    console.log(
      fromDate,
      toDate,
      source.label,
      portfolio.label,
      group.label,
      bucket.label,
      TCL.label,
      FOS.label
    );
  };

  const filterResetHandler = () => {
    setFromDate(new Date().toISOString().split("T")[0]);
    setToDate(new Date().toISOString().split("T")[0]);
    setSource(colourOptions[0]);
    setPortfolio(colourOptions[0]);
    setGroup(colourOptions[0]);
    setBucket(colourOptions[0]);
    setTCL(colourOptions[0]);
    setFOS(colourOptions[0]);
  };

  return (
    <div>
      <BreadCrumbs breadCrumbTitle="Dashboard" breadCrumbActive="Dashboard" />
      {/* card container start*/}
      <div>
        <Row>
          <Col lg="3" sm="6">
            <Link to="/admin/get-ptp-Users-list" className="text-dark">
              <StatsHorizontal
                dpCode="PTP"
                color="primary"
                stats={`0`}
                statTitle="Promise To Pay"
              />
            </Link>
          </Col>
          <Col lg="3" sm="6">
            <Link to="/admin/get-cbk-Users-list">
              <StatsHorizontal
                dpCode="CBK"
                color="success"
                stats={`0`}
                statTitle="Call Back"
              />
            </Link>
          </Col>
          <Col lg="3" sm="6">
            <Link to="/admin/get-bptp-Users-list" className="text-dark">
              <StatsHorizontal
                dpCode="BPTP"
                color="danger"
                stats={`0`}
                statTitle="Broken Promise To Pay"
              />
            </Link>
          </Col>
          <Col lg="3" sm="6">
            <Link to="/admin/get-ptp-Users-list" className="text-dark">
              <StatsHorizontal
                dpCode="LPTP"
                color="warning"
                stats={`0`}
                statTitle="Long Promise To Pay"
              />
            </Link>
          </Col>
        </Row>
      </div>
      {/* card container end*/}

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
                  <Label for="source">Select Source</Label>
                  <Select
                    id="source"
                    className="react-select"
                    classNamePrefix="select"
                    defaultValue={source}
                    options={colourOptions}
                    value={source}
                    onChange={(e) => setSource(e)}
                    isClearable={false}
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
                  <Label for="group">Select Group</Label>
                  <Select
                    id="group"
                    className="react-select"
                    classNamePrefix="select"
                    defaultValue={colourOptions}
                    options={colourOptions}
                    value={group}
                    onChange={(e) => setGroup(e)}
                    isClearable={false}
                  />
                </FormGroup>
              </Col>
              <Col md="4" xs="6">
                <FormGroup>
                  <Label for="bucket">Select Bucket</Label>
                  <Select
                    id="bucket"
                    className="react-select"
                    classNamePrefix="select"
                    defaultValue={colourOptions}
                    options={colourOptions}
                    value={bucket}
                    onChange={(e) => setBucket(e)}
                    isClearable={false}
                  />
                </FormGroup>
              </Col>
              <Col md="4" xs="6">
                <FormGroup>
                  <Label for="TCL">Select TCL</Label>
                  <Select
                    id="TCL"
                    className="react-select"
                    classNamePrefix="select"
                    defaultValue={colourOptions}
                    options={colourOptions}
                    value={TCL}
                    onChange={(e) => setTCL(e)}
                    isClearable={false}
                  />
                </FormGroup>
              </Col>
              <Col md="4" xs="6">
                <FormGroup>
                  <Label for="FOS">Select FOS</Label>
                  <Select
                    id="FOS"
                    className="react-select"
                    classNamePrefix="select"
                    defaultValue={colourOptions}
                    options={colourOptions}
                    value={FOS}
                    onChange={(e) => setFOS(e)}
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
                      Submit
                    </Button.Ripple>
                    <Button.Ripple
                      outline
                      color="secondary"
                      type="reset"
                      onClick={filterResetHandler}
                    >
                      Reset
                    </Button.Ripple>
                  </FormGroup>
                </div>

                <div>
                  <Button.Ripple
                    outline
                    style={{ padding: "5px 10px" }}
                    title="Chart View"
                    className="mr-1"
                    color={tableView ? "secondary" : "primary"}
                    onClick={() => setTableView((prev) => !prev)}
                  >
                    <PieChart />
                  </Button.Ripple>
                  <Button.Ripple
                    outline
                    title="Table View"
                    style={{ padding: "5px 10px" }}
                    color={tableView ? "primary" : "secondary"}
                    onClick={() => setTableView((prev) => !prev)}
                  >
                    <Table />
                  </Button.Ripple>
                </div>
              </Col>
            </Row>
          </Form>
        </CardBody>
      </Card>

      {/* filters container start */}
      <div className="bg-primary text-white py-1 px-1 px-md-2 rounded font-weight-bold mb-2">
        <Row>
          <Col xs="12" sm="6" md="4" lg="3">
            <div style={{ padding: "3px" }} className="d-flex">
              <div style={{ width: "105px" }} className="">
                Start Date :
              </div>
              <div className="flex-grow-1">{fromDate}</div>
            </div>
          </Col>
          <Col xs="12" sm="6" md="4" lg="3">
            <div style={{ padding: "3px" }} className="d-flex">
              <div style={{ width: "105px" }} className="">
                End Date :
              </div>
              <div className="flex-grow-1 text-capitalize">{toDate}</div>
            </div>
          </Col>
          <Col xs="12" sm="6" md="4" lg="3">
            <div style={{ padding: "3px" }} className="d-flex">
              <div style={{ width: "105px" }} className="">
                Source :
              </div>
              <div className="flex-grow-1 text-capitalize">
                {source.label == "Select" ? "All" : source.label}
              </div>
            </div>
          </Col>
          <Col xs="12" sm="6" md="4" lg="3">
            <div style={{ padding: "3px" }} className="d-flex">
              <div style={{ width: "105px" }} className="">
                Portfolio :
              </div>
              <div className="flex-grow-1 text-capitalize">
                {portfolio.label == "Select" ? "All" : portfolio.label}
              </div>
            </div>
          </Col>
          <Col xs="12" sm="6" md="4" lg="3">
            <div style={{ padding: "3px" }} className="d-flex">
              <div style={{ width: "105px" }} className="">
                Group :
              </div>
              <div className="flex-grow-1 text-capitalize">
                {group.label == "Select" ? "All" : group.label}
              </div>
            </div>
          </Col>
          <Col xs="12" sm="6" md="4" lg="3">
            <div style={{ padding: "3px" }} className="d-flex">
              <div style={{ width: "105px" }} className="">
                Bucket :
              </div>
              <div className="flex-grow-1 text-capitalize">
                {bucket.label == "Select" ? "All" : bucket.label}
              </div>
            </div>
          </Col>
          <Col xs="12" sm="6" md="4" lg="3">
            <div style={{ padding: "3px" }} className="d-flex">
              <div style={{ width: "105px" }} className="">
                TCL :
              </div>
              <div className="flex-grow-1 text-capitalize">
                {TCL.label == "Select" ? "All" : TCL.label}
              </div>
            </div>
          </Col>
          <Col xs="12" sm="6" md="4" lg="3">
            <div style={{ padding: "3px" }} className="d-flex">
              <div style={{ width: "105px" }} className="">
                FOS :
              </div>
              <div className="flex-grow-1 text-capitalize">
                {FOS.label == "Select" ? "All" : FOS.label}
              </div>
            </div>
          </Col>
        </Row>
      </div>
      {/* filters container end */}

      {tableView ? (
        <div>
          <Row>
            <Col lg="6">
              <div className="mb-4">
                <div className="mb-1 d-flex justify-content-between align-items-center">
                  <span
                    className="font-weight-bold"
                    style={{ fontSize: "18px" }}
                  >
                    DP Code Summary - Flows
                  </span>
                  <Button.Ripple
                    onClick={() => downloadExcelTable(DPCodesSummaryFlowsData)}
                    color="primary"
                    size="sm"
                  >
                    Excel
                  </Button.Ripple>
                </div>
                <DataTable
                  columns={DPCodesSummaryFlowsColumns}
                  data={DPCodesSummaryFlowsData}
                  noHeader
                  responsive
                  fixedHeader={true}
                  fixedHeaderScrollHeight="300px"
                  highlightOnHover={true}
                />
              </div>
            </Col>

            <Col lg="6">
              <div className="mb-4">
                <div className="mb-1 d-flex justify-content-between align-items-center">
                  <span
                    className="font-weight-bold"
                    style={{ fontSize: "18px" }}
                  >
                    DP Code Summary - Vintage
                  </span>
                  <Button.Ripple
                    onClick={() =>
                      downloadExcelTable(DPCodesSummaryVintageData)
                    }
                    color="primary"
                    size="sm"
                  >
                    Excel
                  </Button.Ripple>
                </div>
                <DataTable
                  columns={DPCodesSummaryVintageColumns}
                  data={DPCodesSummaryVintageData}
                  noHeader
                  responsive
                  fixedHeader={true}
                  fixedHeaderScrollHeight="300px"
                  highlightOnHover={true}
                />
              </div>
            </Col>

            <Col lg="6">
              <div className="mb-4">
                <div className="mb-1 d-flex justify-content-between align-items-center">
                  <span
                    className="font-weight-bold"
                    style={{ fontSize: "18px" }}
                  >
                    Collection - Flows
                  </span>
                  <Button.Ripple
                    onClick={() => downloadExcelTable(collectionFlowsData)}
                    color="primary"
                    size="sm"
                  >
                    Excel
                  </Button.Ripple>
                </div>
                <DataTable
                  columns={collectionColumns}
                  data={collectionFlowsData}
                  noHeader
                  responsive
                  highlightOnHover={true}
                />
              </div>
            </Col>

            <Col lg="6">
              <div className="mb-4">
                <div className="mb-1 d-flex justify-content-between align-items-center">
                  <span
                    className="font-weight-bold"
                    style={{ fontSize: "18px" }}
                  >
                    Collection - Vintage
                  </span>
                  <Button.Ripple
                    onClick={() => downloadExcelTable(collectionVintageData)}
                    color="primary"
                    size="sm"
                  >
                    Excel
                  </Button.Ripple>
                </div>
                <DataTable
                  title="Desserts"
                  columns={collectionColumns}
                  data={collectionVintageData}
                  noHeader
                  responsive
                  highlightOnHover={true}
                />
              </div>
            </Col>

            <Col>
              <div className="mb-4">
                <div className="mb-1 d-flex justify-content-between align-items-center">
                  <span
                    className="font-weight-bold"
                    style={{ fontSize: "18px" }}
                  >
                    Resolution Status
                  </span>
                  <Button.Ripple
                    onClick={() => downloadExcelTable(resolutionStatusData)}
                    color="primary"
                    size="sm"
                  >
                    Excel
                  </Button.Ripple>
                </div>
                <DataTable
                  columns={resolutionStatusColumns}
                  data={resolutionStatusData}
                  noHeader
                  responsive
                  highlightOnHover={true}
                />
              </div>
            </Col>

            <Col>
              <div className="mb-4">
                <div className="mb-1 d-flex justify-content-between align-items-center">
                  <span
                    className="font-weight-bold"
                    style={{ fontSize: "18px" }}
                  >
                    Portfolio List
                  </span>
                  <Button.Ripple
                    onClick={() => downloadExcelTable(portfolioListData)}
                    color="primary"
                    size="sm"
                  >
                    Excel
                  </Button.Ripple>
                </div>
                <DataTable
                  columns={portfolioListColumns}
                  data={portfolioListData}
                  noHeader
                  responsive
                  highlightOnHover={true}
                />
              </div>
            </Col>
          </Row>
        </div>
      ) : (
        <div>
          <Row>
            <Col xs="12">
              <ChartjsBarChart />
            </Col>
            <Col xs="12" md="6">
              <ChartjsHorizontalBarChart />
            </Col>
            <Col xs="12" md="6">
              <ChartjsHorizontalBarChart />
            </Col>
            <Col xs="12" md="4">
              <ChartjsRadarChart />
            </Col>
            <Col xs="12" md="4">
              <ChartjsRadarChart />
            </Col>
            <Col xs="12" md="4">
              <ChartjsRadarChart />
            </Col>
            <Col xs="12">
              <ChartjsBarChart />
            </Col>
          </Row>
          <div className="mb-4">
            <div className="mb-1 d-flex justify-content-between align-items-center">
              <span className="font-weight-bold" style={{ fontSize: "18px" }}>
                Portfolio List
              </span>
              <Button.Ripple
                onClick={() => downloadExcelTable(portfolioListData)}
                color="primary"
                size="sm"
              >
                Excel
              </Button.Ripple>
            </div>
            <DataTable
              columns={portfolioListColumns}
              data={portfolioListData}
              noHeader
              responsive
              highlightOnHover={true}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default Dashboard;
