import React, { useState } from "react";
import BreadCrumbs from "../../../../@core/components/breadcrumbs";
import { downloadExcelTable } from "../../../../utility/app/downloadExcelTable";
import { Link } from "react-router-dom";
import DataTable from "react-data-table-component";
import { Search } from "react-feather";
import DetailsBox from "../../../../@core/components/ametecs/milestone/DetailsBox";
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

function View() {
  const [portfolio, setPortfolio] = useState(colourOptions[0]);
  const viewMilestoneTableData = [
    {
      milestone: "M1",
      start: "ka",
      end: "2021",
      targetPercentage: "2023-01-16 12:15:32",
      targetPOS: "36",
      achievedPOS: "2023-01-16 12:15:32",
      targetLeads: "2023-01-16 12:15:32",
      achievedLeads: "36",
    },
    {
      milestone: "M2",
      start: "ka",
      end: "2021",
      targetPercentage: "2023-01-16 12:15:32",
      targetPOS: "36",
      achievedPOS: "2023-01-16 12:15:32",
      targetLeads: "2023-01-16 12:15:32",
      achievedLeads: "36",
    },
    {
      milestone: "M3",
      start: "ka",
      end: "2021",
      targetPercentage: "2023-01-16 12:15:32",
      targetPOS: "36",
      achievedPOS: "2023-01-16 12:15:32",
      targetLeads: "2023-01-16 12:15:32",
      achievedLeads: "36",
    },
    {
      milestone: "M4",
      start: "ka",
      end: "2021",
      targetPercentage: "2023-01-16 12:15:32",
      targetPOS: "36",
      achievedPOS: "2023-01-16 12:15:32",
      targetLeads: "2023-01-16 12:15:32",
      achievedLeads: "36",
    },
    {
      milestone: "M5",
      start: "ka",
      end: "2021",
      targetPercentage: "2023-01-16 12:15:32",
      targetPOS: "36",
      achievedPOS: "2023-01-16 12:15:32",
      targetLeads: "2023-01-16 12:15:32",
      achievedLeads: "36",
    },
  ];
  const staffReportTableData = [
    {
      staff: "ka",
      role: "ka",
      POS: "2021",
      targetPOS: "2023-01-16 12:15:32",
      leadsCount: "36",
      m1Date: "2023-01-16 12:15:32",
      m1Achieved: "36",
      m2Date: "2023-01-16 12:15:32",
      m2Achieved: "36",
      m3Date: "2023-01-16 12:15:32",
      m3Achieved: "36",
      m4Date: "2023-01-16 12:15:32",
      m4Achieved: "36",
      m5Date: "2023-01-16 12:15:32",
      m5Achieved: "36",
    },
    {
      staff: "AK",
      role: "AK",
      POS: "2021",
      targetPOS: "2023-01-16 12:15:32",
      leadsCount: "36",
      m1Date: "2023-01-16 12:15:32",
      m1Achieved: "36",
      m2Date: "2023-01-16 12:15:32",
      m2Achieved: "36",
      m3Date: "2023-01-16 12:15:32",
      m3Achieved: "36",
      m4Date: "2023-01-16 12:15:32",
      m4Achieved: "36",
      m5Date: "2023-01-16 12:15:32",
      m5Achieved: "36",
    },
  ];

  const [fromDate, setFromDate] = useState(
    new Date().toISOString().split("T")[0]
  );
  const [toDate, setToDate] = useState(new Date().toISOString().split("T")[0]);
  const [filterText, setFilterText] = useState("");
  const [staffReportTable, setStaffReportTable] =
    useState(staffReportTableData);

  const filteredStaffReportData = staffReportTable.filter((item) => {
    return (
      item.staff?.toLowerCase().includes(filterText.toLowerCase()) ||
      item.role?.toLowerCase().includes(filterText.toLowerCase()) ||
      item.targetPOS?.includes(filterText) ||
      item.leadsCount?.includes(filterText) ||
      item.m1Achieved?.includes(filterText) ||
      item.m1Achieved?.includes(filterText) ||
      item.m2Achieved?.includes(filterText) ||
      item.m2Achieved?.includes(filterText) ||
      item.m3Achieved?.includes(filterText) ||
      item.m3Achieved?.includes(filterText) ||
      item.m4Achieved?.includes(filterText) ||
      item.m4Achieved?.includes(filterText) ||
      item.m5Achieved?.includes(filterText) ||
      item.m5Achieved?.includes(filterText)
    );
  });

  const viewMilestoneTableColumns = [
    {
      name: "Milestone",
      selector: (row) => row.milestone,
    },
    {
      name: "Start",
      selector: (row) => row.start,
    },
    {
      name: "End",
      selector: (row) => row.end,
    },
    {
      name: "Target %",
      selector: (row) => row.targetPercentage,
    },
    {
      name: "Target Leads",
      selector: (row) => row.targetLeads,
    },
    {
      name: "Achieved POS",
      selector: (row) => row.achievedPOS,
    },
    {
      name: "Achieved Leads",
      selector: (row) => row.achievedLeads,
    },
  ];

  const staffReportTableColumns = [
    {
      name: "Staff",
      selector: (row) => row.staff,
    },
    {
      name: "Role",
      selector: (row) => row.role,
    },
    {
      name: "POS",
      selector: (row) => row.POS,
    },
    {
      name: "Target POS",
      selector: (row) => row.targetPOS,
    },
    {
      name: "Leads Count",
      selector: (row) => row.leadsCount,
    },
    {
      name: "M1 Date",
      selector: (row) => row.m1Date,
    },
    {
      name: "M1 Achieved",
      selector: (row) => row.m1Achieved,
    },
    {
      name: "M2 Date",
      selector: (row) => row.m2Date,
    },
    {
      name: "M2 Achieved",
      selector: (row) => row.m2Achieved,
    },
    {
      name: "M3 Date",
      selector: (row) => row.m3Date,
    },
    {
      name: "M3 Achieved",
      selector: (row) => row.m3Achieved,
    },
    {
      name: "M4 Date",
      selector: (row) => row.m4Date,
    },
    {
      name: "M4 Achieved",
      selector: (row) => row.m4Achieved,
    },
    {
      name: "M5 Date",
      selector: (row) => row.m5Date,
    },
    {
      name: "M5 Achieved",
      selector: (row) => row.m5Achieved,
    },
  ];

  const filterHandler = (e) => {
    e.preventDefault();
    console.log(fromDate, toDate);
  };

  return (
    <div>
      <BreadCrumbs
        breadCrumbTitle="View Milestone"
        breadCrumbActive="View Milestone"
      />
      <Card>
        <CardBody>
          <Form className="d-flex align-items-center">
            <FormGroup style={{ width: "250px" }} className="mr-1">
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

            <FormGroup className="d-flex mb-0">
              <Link to="/admin/edit-milestone">
                <Button.Ripple
                  className="mr-1"
                  color="primary"
                  style={{ marginTop: "6px" }}
                >
                  <span>Edit</span>
                </Button.Ripple>
              </Link>
            </FormGroup>
          </Form>
        </CardBody>
      </Card>

      <DetailsBox/>

      <div>
        <DataTable
          columns={viewMilestoneTableColumns}
          data={viewMilestoneTableData}
          noHeader
          responsive
          highlightOnHover={true}
        />
        <div className="d-flex justify-content-end bg-white p-1">
          <Button.Ripple
            onClick={() => downloadExcelTable(staffReportTableData)}
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
          columns={staffReportTableColumns}
          data={filteredStaffReportData}
          noHeader
          responsive
          pagination
          highlightOnHover={true}
        />
      </div>
    </div>
  );
}

export default View;
