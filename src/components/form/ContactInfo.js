import React, { useState, useEffect } from "react";
import Input from "./Input";
import TextArea from "./TextArea";
import DropDown from "./DropDown";
import { getContactInfo, getPersonalInfo } from "../data";
function ContactInfo() {
  const [contactInfo, setContactInfo] = useState({});
  const [personalInfo, setPersonalInfo] = useState({});
  useEffect(() => {
    setContactInfo(getContactInfo());
    console.log(contactInfo);
  }, [contactInfo, setContactInfo]);
  useEffect(() => {
    setPersonalInfo(getPersonalInfo());
    console.log(personalInfo);
  }, [personalInfo, setPersonalInfo]);
  return (
    <div className="ui centered">
      <div className="ui form">
        <div>
          <h4 className="ui dividing header">Contact Information</h4>
          <div className="ui field">
            <div className="ui two fields">
              <Input
                label="First Name"
                type="text"
                id="firstname"
                placeholder={personalInfo.firstName}
                value={personalInfo.firstName}
              />
              <Input
                label="Last Name"
                type="text"
                id="firstname"
                placeholder={personalInfo.lastName}
                value={personalInfo.lastName}
              />
            </div>
          </div>

          <div className="ui field">
            <div className="ui two fields">
              <Input
                label="Email Address"
                type="email"
                id="email"
                placeholder={contactInfo.email}
                value={contactInfo.email}
              />
              <Input
                label="Mobile Number"
                type="text"
                id="mobile"
                placeholder={contactInfo.mobile}
                value={contactInfo.mobile}
              />
            </div>
          </div>
          <div className="ui field">
            <div className="ui two fields">
              <Input
                type="text"
                id="city"
                placeholder="e.g Juba"
                label="City"
              />
              <DropDown />
            </div>
            <div className="ui field">
              <div className="ui  field">
                <TextArea
                  placeholder="Write your biography here"
                  id="bio"
                  label="Biography"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactInfo;
