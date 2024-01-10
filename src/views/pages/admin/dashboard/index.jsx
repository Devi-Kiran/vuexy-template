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
import Flatpickr from "react-flatpickr";
import StatsHorizontal from "@components/widgets/stats/StatsHorizontal";
import DPCodeSummary from "../../../../@core/components/ametecs/dashboard/DPCodeSummary";
import ChartjsBarChart from "../../../../@core/components/ametecs/dashboard/ChartjsBarChart";
import ChartjsHorizontalBarChart from "../../../../@core/components/ametecs/dashboard/ChartjsHorizontalBar";
import ChartjsRadarChart from "../../../../@core/components/ametecs/dashboard/ChartjsDoughnutChart";


import "@styles/react/libs/flatpickr/flatpickr.scss";

import { selectThemeColors } from "@utils";

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
  const [picker, setPicker] = useState(new Date().toISOString().split("T")[0]);
  const [source, setSource] = useState(colourOptions[0].label);
  const [portfolio, setPortfolio] = useState(colourOptions[0].label);
  const [group, setGroup] = useState(colourOptions[0].label);
  const [bucket, setBucket] = useState(colourOptions[0].label);
  const [TCL, setTCL] = useState(colourOptions[0].label);
  const [FOS, setFOS] = useState(colourOptions[0].label);

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
    console.log(picker, source, portfolio, group, bucket, TCL, FOS);
  };

  const filterResetHandler = () => {
    setPicker(new Date().toISOString().split("T")[0]);
    setSource(colourOptions[0].label);
    setPortfolio(colourOptions[0].label);
    setGroup(colourOptions[0].label);
    setBucket(colourOptions[0].label);
    setTCL(colourOptions[0].label);
    setFOS(colourOptions[0].label);
  };

  return (
    <div>
      {/* card container start*/}
      <div>
        <Row>
          <Col lg="3" sm="6">
            <StatsHorizontal
              dpCode="PTP"
              color="primary"
              stats={`0`}
              statTitle="Promise To Pay"
            />
          </Col>
          <Col lg="3" sm="6">
            <StatsHorizontal
              dpCode="CBK"
              color="success"
              stats={`0`}
              statTitle="Call Back"
            />
          </Col>
          <Col lg="3" sm="6">
            <StatsHorizontal
              dpCode="BPTP"
              color="danger"
              stats={`0`}
              statTitle="Broken Promise To Pay"
            />
          </Col>
          <Col lg="3" sm="6">
            <StatsHorizontal
              dpCode="LPTP"
              color="warning"
              stats={`0`}
              statTitle="Long Promise To Pay"
            />
          </Col>
        </Row>
      </div>
      {/* card container end*/}

      <Card>
        {/* <CardHeader>
        <CardTitle tag='h4'>Multiple Column</CardTitle>
      </CardHeader> */}

        <CardBody>
          <Form>
            <Row>
              <Col md="4" xs="6">
                <FormGroup>
                  <Label for="startDate">From</Label>
                  <Flatpickr
                    className="form-control"
                    value={picker}
                    onChange={(date) =>
                      setPicker(new Date(date).toISOString().split("T")[0])
                    }
                    id="startDate"
                  />
                </FormGroup>
              </Col>
              <Col md="4" xs="6">
                <FormGroup>
                  <Label for="endDate">To</Label>
                  <Flatpickr
                    className="form-control"
                    value={picker}
                    onChange={(date) =>
                      setPicker(new Date(date).toISOString().split("T")[0])
                    }
                    id="endDate"
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
                    defaultValue={colourOptions[0]}
                    options={colourOptions}
                    onChange={(e) => setSource(e.value)}
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
                    defaultValue={colourOptions[0]}
                    options={colourOptions}
                    onChange={(e) => setPortfolio(e.value)}
                    isClearable={false}
                  />
                </FormGroup>
              </Col>
              <Col md="4" xs="6">
                <FormGroup>
                  <Label for="group">Select Group</Label>
                  <Select
                    //theme={selectThemeColors}
                    id="group"
                    className="react-select"
                    classNamePrefix="select"
                    defaultValue={colourOptions[0]}
                    options={colourOptions}
                    onChange={(e) => setGroup(e.value)}
                    isClearable={false}
                  />
                </FormGroup>
              </Col>
              <Col md="4" xs="6">
                <FormGroup>
                  <Label for="bucket">Select Bucket</Label>
                  <Select
                    //theme={selectThemeColors}
                    id="bucket"
                    className="react-select"
                    classNamePrefix="select"
                    defaultValue={colourOptions[0]}
                    options={colourOptions}
                    onChange={(e) => setBucket(e.value)}
                    isClearable={false}
                  />
                </FormGroup>
              </Col>
              <Col md="4" xs="6">
                <FormGroup>
                  <Label for="TCL">Select TCL</Label>
                  <Select
                    //theme={selectThemeColors}
                    id="TCL"
                    className="react-select"
                    classNamePrefix="select"
                    defaultValue={colourOptions[0]}
                    options={colourOptions}
                    onChange={(e) => setTCL(e.value)}
                    isClearable={false}
                  />
                </FormGroup>
              </Col>
              <Col md="4" xs="6">
                <FormGroup>
                  <Label for="FOS">Select FOS</Label>
                  <Select
                    //theme={selectThemeColors}
                    id="FOS"
                    className="react-select"
                    classNamePrefix="select"
                    defaultValue={colourOptions[0]}
                    options={colourOptions}
                    onChange={(e) => setFOS(e.value)}
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
              <div className="flex-grow-1">{picker}</div>
            </div>
          </Col>
          <Col xs="12" sm="6" md="4" lg="3">
            <div style={{ padding: "3px" }} className="d-flex">
              <div style={{ width: "105px" }} className="">
                End Date :
              </div>
              <div className="flex-grow-1 text-capitalize">{picker}</div>
            </div>
          </Col>
          <Col xs="12" sm="6" md="4" lg="3">
            <div style={{ padding: "3px" }} className="d-flex">
              <div style={{ width: "105px" }} className="">
                Source :
              </div>
              <div className="flex-grow-1 text-capitalize">
                {source == "Select" ? "All" : source}
              </div>
            </div>
          </Col>
          <Col xs="12" sm="6" md="4" lg="3">
            <div style={{ padding: "3px" }} className="d-flex">
              <div style={{ width: "105px" }} className="">
                Portfolio :
              </div>
              <div className="flex-grow-1 text-capitalize">
                {portfolio == "Select" ? "All" : portfolio}
              </div>
            </div>
          </Col>
          <Col xs="12" sm="6" md="4" lg="3">
            <div style={{ padding: "3px" }} className="d-flex">
              <div style={{ width: "105px" }} className="">
                Group :
              </div>
              <div className="flex-grow-1 text-capitalize">
                {group == "Select" ? "All" : group}
              </div>
            </div>
          </Col>
          <Col xs="12" sm="6" md="4" lg="3">
            <div style={{ padding: "3px" }} className="d-flex">
              <div style={{ width: "105px" }} className="">
                Bucket :
              </div>
              <div className="flex-grow-1 text-capitalize">
                {bucket == "Select" ? "All" : bucket}
              </div>
            </div>
          </Col>
          <Col xs="12" sm="6" md="4" lg="3">
            <div style={{ padding: "3px" }} className="d-flex">
              <div style={{ width: "105px" }} className="">
                TCL :
              </div>
              <div className="flex-grow-1 text-capitalize">
                {TCL == "Select" ? "All" : TCL}
              </div>
            </div>
          </Col>
          <Col xs="12" sm="6" md="4" lg="3">
            <div style={{ padding: "3px" }} className="d-flex">
              <div style={{ width: "105px" }} className="">
                FOS :
              </div>
              <div className="flex-grow-1 text-capitalize">
                {FOS == "Select" ? "All" : FOS}
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
                <DPCodeSummary
                  tableTitle="DP Code Summary - Flows"
                  columns={DPCodesSummaryFlowsColumns}
                  data={DPCodesSummaryFlowsData}
                  fixedHeader={true}
                  fixedHeaderScrollHeight="300px"
                />
              </div>
            </Col>

            <Col lg="6">
              <div className="mb-4">
                <DPCodeSummary
                  tableTitle="DP Code Summary - Vintage"
                  columns={DPCodesSummaryVintageColumns}
                  data={DPCodesSummaryVintageData}
                  fixedHeader={true}
                  fixedHeaderScrollHeight="300px"
                />
              </div>
            </Col>

            <Col lg="6">
              <div className="mb-4">
                <DPCodeSummary
                  tableTitle="Collection - Flows"
                  columns={collectionColumns}
                  data={collectionFlowsData}
                />
              </div>
            </Col>

            <Col lg="6">
              <div className="mb-4">
                <DPCodeSummary
                  tableTitle="Collection - Vintage"
                  columns={collectionColumns}
                  data={collectionVintageData}
                />
              </div>
            </Col>

            <Col>
              <div className="mb-4">
                <DPCodeSummary
                  tableTitle="Resolution Status"
                  columns={resolutionStatusColumns}
                  data={resolutionStatusData}
                />
              </div>
            </Col>

            <Col>
              <div className="mb-4">
                <DPCodeSummary
                  tableTitle="Portfolio List"
                  columns={portfolioListColumns}
                  data={portfolioListData}
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
              <ChartjsHorizontalBarChart/>     
            </Col>
            <Col xs="12" md="6">
              <ChartjsHorizontalBarChart/>     
            </Col>
            <Col xs="12" md="4">
              <ChartjsRadarChart/>
            </Col>
            <Col xs="12" md="4">
              <ChartjsRadarChart/>
            </Col>
            <Col xs="12" md="4">
              <ChartjsRadarChart/>
            </Col>
            <Col xs="12">
              <ChartjsBarChart />
            </Col>
          </Row>
          <div className="mb-4">
                <DPCodeSummary
                  tableTitle="Portfolio List"
                  columns={portfolioListColumns}
                  data={portfolioListData}
                />
              </div>
        </div>
      )}
    </div>
  );
}

export default Dashboard;
