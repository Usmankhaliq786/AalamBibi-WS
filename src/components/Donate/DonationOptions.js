import { Fragment } from "react";
import RadioGroup from "../FormInputs/RadioGroup";
import { RadioButtonOptions } from "@/lib/data/commonConstants";

const DonationOptions = () => {
  return (
    <div className="text-center DonateNowHeading px-3">
      <h2>No Donation Is Too Small To Transform Lives.</h2>
      <RadioGroup name="donation" options={RadioButtonOptions} />
    </div>
  );
};

export default DonationOptions;
