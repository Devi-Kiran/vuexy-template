import React, { useState } from "react";
import { Check } from "react-feather";
import { Input, Form, Button } from "reactstrap";

function TargetPercentageInput({ data, targetPercentageGrabber }) {
  const [targetPercentage, setTargetPercentage] = useState(
    data.targetPercentage
  );
  const targetPercentageCalculator = () => {
    setTargetPercentage(targetPercentage);
    const POS = targetPercentage * 617.9;
    const leads = 0;
    const balance = 1;
    let balancePOS = 61172.1 + POS;
    const changedData = {
      ...data,
      targetPercentage,
      POS,
      leads,
      balance,
      balancePOS,
    };

    targetPercentageGrabber(changedData);
  };

  return (
    <Form className="d-flex">
      <Input
        type="number"
        value={targetPercentage}
        style={{ marginRight: "2px" }}
        onChange={(e) => setTargetPercentage(e.target.value)}
      />
      <Button
        className="p-0"
        type="submit"
        color="flat-primary"
        onClick={targetPercentageCalculator}
      >
        <Check />
      </Button>
    </Form>
  );
}

export default TargetPercentageInput;
