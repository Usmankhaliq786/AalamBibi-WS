import Accordian from "@/components/Accordian/Accordian";
import { privacyPolicy } from "@/lib/data/privacyPolicy"; 
import React from "react";

export const metadata = {
  title: "Privacy Policy | Aalam Bibi Foundation",
  description: "Aalam Bibi Foundation is committed to safeguarding your privacy. This Privacy Policy outlines how we collect, use, and protect your information.",
};
const PrivacyPolicy = () => {
  return (
 
    <section className="spacing" id="static">
    <div className="container">
    <div className="tearmheading">
          <h2>Privacy Policy</h2>
          <p>
          Aalam Bibi Foundation is committed to safeguarding your privacy. This
          Privacy Policy outlines how we collect, use, and protect your
         information.
          </p>
          </div>
          <div>
          <Accordian data={privacyPolicy} />
          </div>
    </div>
        </section>
  );
};

export default PrivacyPolicy;
