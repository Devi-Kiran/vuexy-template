import React, { useState, useEffect } from "react";
import BreadCrumbs from "../../../../@core/components/breadcrumbs";
import { downloadExcelTable } from "../../../../utility/app/downloadExcelTable";
import Select from "react-select";
import DataTable from "react-data-table-component";
import { Search } from "react-feather";
import { FormGroup, Form, Button, Input, Label } from "reactstrap";
import TargetPercentageInput from "../../../../@core/components/ametecs/viewPortfolios/createMilestone/TargetPercentageInput";

import "@styles/react/libs/flatpickr/flatpickr.scss";

const colourOptions = [
  { value: "select", label: "Select" },
  { value: "ocean", label: "Ocean" },
  { value: "blue", label: "Blue" },
  { value: "purple", label: "Purple" },
  { value: "red", label: "Red" },
  { value: "orange", label: "Orange" },
];

function Create() {
  const [portfolio, setPortfolio] = useState(colourOptions[0]);
  const [data, setData] = useState({});

  const targetPercentageGrabber = (obj) => {
    setData(obj);
  };

  const createMilestoneData = [
    {
      milestone: "2021",
      startDate: "55",
      endDate: "66",
      targetPercentage: "993",
      POS: data.POS,
      leads: data.leads,
      balance: data.balance,
      balancePOS: data.balancePOS,
    },
    {
      milestone: "2021",
      startDate: "55",
      endDate: "66",
      targetPercentage: "993",
      POS: data.POS,
      leads: data.leads,
      balance: data.balance,
      balancePOS: data.balancePOS,
    },
    {
      milestone: "2021",
      startDate: "55",
      endDate: "66",
      targetPercentage: "993",
      POS: data.POS,
      leads: data.leads,
      balance: data.balance,
      balancePOS: data.balancePOS,
    }
  ];

  useEffect(() => {
    // console.log("changed portyfolio")
  }, [portfolio]);

  const createMilestoneColumns = [
    {
      name: "Milestone",
      selector: (row) => row.milestone,
    },
    {
      name: "Start Date",
      selector: (row) => row.startDate,
    },
    {
      name: "End Date",
      selector: (row) => row.endDate,
    },
    {
      name: "Target %",
      selector: (row) => row.action,
      button: true,
      cell: (row) => {
        return (
          <>
            <TargetPercentageInput
              targetPercentageGrabber={targetPercentageGrabber}
            />
          </>
        );
      },
    },
    {
      name: "POS",
      selector: (row) => row.POS,
    },
    {
      name: "Leads",
      selector: (row) => row.leads,
    },
    {
      name: "Balance",
      selector: (row) => row.balance,
    },
    {
      name: "Balance POS",
      selector: (row) => row.balancePOS,
    },
  ];

  return (
    <div>
      <BreadCrumbs
        breadCrumbTitle="Create Milestone"
        breadCrumbActive="Create Milestone"
      />
      <Form>
        <div style={{ width: "250px" }}>
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
        </div>
      </Form>

      <div>
        <DataTable
          columns={createMilestoneColumns}
          data={createMilestoneData}
          noHeader
          responsive
          pagination
          highlightOnHover={true}
        />
      </div>
    </div>
  );
}

export default Create;
