import Accordian from "@/components/Accordian/Accordian";
import { termsAndConditions } from "@/lib/data/termsAndConditions";
import React from "react";

export const metadata = {
  title: "Terms and Conditions | Aalam Bibi Foundation",
  description:
    "Welcome to Aalam Bibi Foundation’s website. By accessing or using our website, you agree to comply with our Terms and Conditions",
};
const TermsAndConditions = () => {
  return (
    <section className="spacing" id="static">
      <div className="container">
        <div className="tearmheading">
          <h2>Terms and Conditions</h2>
          <p>
            Welcome to Aalam Bibi Foundation’s website. By accessing or using
            our website, you agree to comply with these Terms and Conditions:
          </p>
        </div>
        <div>
          <Accordian data={termsAndConditions} />
        </div>
      </div>
    </section>
  );
};

export default TermsAndConditions;
