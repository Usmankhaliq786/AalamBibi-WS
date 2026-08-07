import React from "react";
import RadioButton from "./RadioButton";
import { RadioButtonOptions } from "@/lib/data/commonConstants";

const RadioGroup = ({ name, options=RadioButtonOptions }) => (
  <div role="group" className="d-flex justify-content-center"  aria-labelledby={`${name}-radio-group`}>
    <div className="row customWidth g-5 gx-5 donationCard">
      {options.map((option, index) => (
        <RadioButton
          key={index}
          name={name}
          value={option.value}
          label={option.label}
          icon={option.icon}
          id={option.id}
        />
      ))}
    </div>
  </div>
);

export default RadioGroup;
