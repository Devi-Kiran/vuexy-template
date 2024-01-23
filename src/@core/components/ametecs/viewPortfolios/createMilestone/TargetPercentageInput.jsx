import React, { useState } from "react";
import { Input } from "reactstrap";

function TargetPercentageInput({ targetPercentageGrabber }) {
  const [targetPercentage, setTargetPercentage] = useState("");
  const targetPercentageCalculator = (e) => {
    let targetPercentage = e.target.value;
    setTargetPercentage(targetPercentage);
    const POS = targetPercentage * 617.9;
    const leads = 0;
    const balance = 1;
    let balancePOS = 61172.1 + targetPercentage;

    targetPercentageGrabber({ POS, leads, balance, balancePOS });
  };

  return (
    <Input
      type="number"
      value={targetPercentage}
      onChange={targetPercentageCalculator}
    />
  );
}

export default TargetPercentageInput;
