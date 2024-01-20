import React, { useState } from "react";
import BreadCrumbs from "../../../../@core/components/breadcrumbs";
import ViewPortfolioCard from "../../../../@core/components/ametecs/viewPortfolios/ViewPortfolioCard";
import { Button, FormGroup, Label } from "reactstrap";
import Select from "react-select";

const colourOptions = [
  { value: "search portfolio", label: "Search Portfolio" },
  { value: "ocean", label: "Ocean" },
  { value: "blue", label: "Blue" },
  { value: "purple", label: "Purple" },
  { value: "red", label: "Red" },
  { value: "orange", label: "Orange" },
];

function ViewPortfolio() {
  const [isActivePortfolio, setIsActivePortfolio] = useState(true);
  const [searchPortfolio, setSearchPortfolio] = useState(colourOptions[0]);
  return (
    <div>
      <BreadCrumbs
        breadCrumbTitle="View Portfolios"
        breadCrumbActive="View Portfolios"
      />
      <div className="mb-2 d-flex justify-content-between align-items-center">
        <Button.Ripple
          color="primary"
          className="mr-1"
          onClick={() => setIsActivePortfolio((prev) => !prev)}
        >
          {isActivePortfolio ? "Completed Portfolios" : "Active Portfolios"}
        </Button.Ripple>

        <FormGroup className="m-0" style={{ width: "200px" }}>
          <Select
            id="searchPortfolio"
            className="react-select "
            classNamePrefix="select"
            defaultValue={searchPortfolio}
            options={colourOptions}
            value={searchPortfolio}
            onChange={(e) => setSearchPortfolio(e)}
            isClearable={false}
          />
        </FormGroup>
      </div>
      <ViewPortfolioCard />
      <ViewPortfolioCard />
      <ViewPortfolioCard />
      <ViewPortfolioCard />
      <ViewPortfolioCard />
      <ViewPortfolioCard />
    </div>
  );
}

export default ViewPortfolio;
