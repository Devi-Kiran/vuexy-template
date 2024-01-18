import React, { useState, useEffect } from "react";
import BreadCrumbs from "../../../../@core/components/breadcrumbs";
import { FormGroup, Input, Button, Label } from "reactstrap";
import Select from "react-select";

const colourOptions = [
  { value: "select", label: "Select" },
  { value: "ocean", label: "Ocean" },
  { value: "blue", label: "Blue" },
  { value: "purple", label: "Purple" },
  { value: "red", label: "Red" },
  { value: "orange", label: "Orange" },
];

function Dailer() {
  const [time, setTime] = useState(0);

  const formatTime = (timeInSeconds) => {
    const hours = Math.floor(timeInSeconds / 3600);
    const minutes = Math.floor((timeInSeconds % 3600) / 60);
    const seconds = timeInSeconds % 60;

    const formattedTime = `${String(hours).padStart(2, "0")}:${String(
      minutes
    ).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
    return formattedTime;
  };

  useEffect(() => {
    let timer;

    if (time > 0) {
      timer = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    }

    return () => clearInterval(timer);
  }, [time]);
  return (
    <div>
      <BreadCrumbs
        breadCrumbTitle="Search Call Recordings"
        breadCrumbActive="Search Call Recordings"
      />
      <div className="py-2">
        <div
          style={{ maxWidth: "450px" }}
          className="bg-white shadow-sm rounded mx-auto p-1"
        >
          <div>
            <FormGroup>
              <Label for="campaign">Campaign</Label>
              <Select
                id="campaign"
                className="react-select"
                classNamePrefix="select"
                // defaultValue={sourceOrPortfolioWise}
                options={colourOptions}
                // value={sourceOrPortfolioWise}
                // onChange={(e) => setSourceOrPortfolioWise(e)}
                isClearable={false}
              />
            </FormGroup>
          </div>
          <div>
            <FormGroup>
              <Label for="VMN">VMN</Label>
              <Select
                id="VMN"
                className="react-select"
                classNamePrefix="select"
                // defaultValue={sourceOrPortfolioWise}
                options={colourOptions}
                // value={sourceOrPortfolioWise}
                // onChange={(e) => setSourceOrPortfolioWise(e)}
                isClearable={false}
              />
            </FormGroup>
          </div>
          <div>
            <FormGroup>
              <Label for="mobile">Mobile</Label>
              <Input
                type="number"
                id="mobile"
                autoComplete="off"
                // value={searchMobile}
                // onChange={(e) => setSearchMobile(e.target.value)}
              />
              <div style={{ marginTop: "5px" }}>
                <Button.Ripple
                  style={{ marginRight: "5px" }}
                  color="primary"
                  size="sm"
                >
                  SIP Phone
                </Button.Ripple>
                <Button.Ripple
                  color="primary"
                  size="sm"
                  onClick={() => setTime(1)}
                >
                  Click2Call
                </Button.Ripple>
              </div>
            </FormGroup>
          </div>
          <div>
            <FormGroup>
              <Label for="feedback">Feedback</Label>
              <Input
                type="number"
                id="feedback"
                autoComplete="off"
                // value={searchMobile}
                // onChange={(e) => setSearchMobile(e.target.value)}
              />
            </FormGroup>
          </div>
          <div>
            <FormGroup>
              <Label for="comments">Comments</Label>
              <Input
                type="number"
                id="comments"
                autoComplete="off"
                // value={searchMobile}
                // onChange={(e) => setSearchMobile(e.target.value)}
              />
            </FormGroup>
          </div>
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <Button.Ripple style={{ marginRight: "5px" }} color="primary">
                Cancel
              </Button.Ripple>
              <Button.Ripple color="primary">Submit</Button.Ripple>
            </div>
            <div className="rounded" style={{background: "rgba(255,0,0,0.1)", padding: "5px 10px"}}><span className="text-danger font-weight-bold">{formatTime(time)}</span></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dailer;
