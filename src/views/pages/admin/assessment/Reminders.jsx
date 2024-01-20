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

function Reminders() {
  const remindersData = [
    {
      sNo: "2021",
      employeeName: "KA",
      role: "admin",
      followUpDate: "2024-01-16 12:15:32",
      PTP: "20240116_121613_0_9848599401",
      LPTP: "0",
      CBK: "33",
      BPTP: "36",
    },
    {
      sNo: "2022",
      employeeName: "AK",
      role: "frontend",
      followUpDate: "2025-01-16 12:15:32",
      PTP: "202401144",
      LPTP: "66",
      CBK: "32",
      BPTP: "31",
    },
  ];

  const [filterText, setFilterText] = useState("");
  const [remindersTable, setRemindersTable] = useState(remindersData);

  const filteredRemindersData = remindersTable.filter((item) => {
    return (
      item.sNo?.includes(filterText) ||
      item.employeeName?.toLowerCase().includes(filterText.toLowerCase()) ||
      item.role?.toLowerCase().includes(filterText.toLowerCase()) ||
      item.followUpDate?.includes(filterText) ||
      item.PTP?.includes(filterText) ||
      item.LPTP?.includes(filterText) ||
      item.CBK?.includes(filterText) ||
      item.BPTP?.includes(filterText)
    );
  });

  const remindersColumns = [
    {
      name: "S.NO",
      selector: (row) => row.sNo,
      sortable: true,
    },
    {
      name: "Employee Name",
      selector: (row) => row.employeeName,
      sortable: true,
    },
    {
      name: "Role",
      selector: (row) => row.role,
      sortable: true,
    },
    {
      name: "Follow Up Date",
      selector: (row) => row.followUpDate,
      sortable: true,
    },
    {
      name: "PTP",
      selector: (row) => row.PTP,
      sortable: true,
    },
    {
      name: "LPTP",
      selector: (row) => row.LPTP,
      sortable: true,
    },
    {
      name: "CBK",
      selector: (row) => row.CBK,
      sortable: true,
    },
    {
      name: "BPTP",
      selector: (row) => row.BPTP,
      sortable: true,
    },
  ];

  return (
    <div>
      <BreadCrumbs breadCrumbTitle="Reminders" breadCrumbActive="Reminders" />

      <div className="">
        <div className="d-flex justify-content-end bg-white p-1">
          <Button.Ripple
            onClick={() => downloadExcelTable(remindersData)}
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
          columns={remindersColumns}
          data={filteredRemindersData}
          noHeader
          responsive
          pagination
          highlightOnHover={true}
        />
      </div>
    </div>
  );
}

export default Reminders;
