import React from "react";
import ContactInfoCard from "../../components/connect/ContactInfoCard";
import "./ContactUs.css";
import ContactQueryCard from "../../components/connect/ContactQueryCard";

const ContactUs = () => {
  return (
    <div className="contact-main-container container">
      <ContactInfoCard />
      <ContactQueryCard />
    </div>
  );
};

export default ContactUs;
