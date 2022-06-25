import React from "react";
// import { useState } from "react";
import {
  getPersonalInfo,
  getContactInfo,
  getEducationInfo,
  getSkillInfo,
  getSocialInfo,
  getCertificateInfo,
  getHobbyInfo,
} from "./info";

import Table from "./Table";
import Error from "./Error";
import Button from "./Button";
import StackTable from "./StackTable";
function Profile() {
  // const [personalInfo, setPersonalInfo] = useState(() => getPersonalInfo());
  // const [contactInfo, setContactInfo] = useState(() => getContactInfo());
  // const [educationInfo, setEducationInfo] = useState(() => getEducationInfo());
  // const [certificationsInfo, setCertificationsInfo] = useState(() =>
  //   getCertificateInfo()
  // );
  // const [skillsInfo, setSkillsInfo] = useState(() => getSkillInfo());
  // const [hobbiesInfo, setHobbiesInfo] = useState(() => getHobbyInfo());
  // const [socialsInfo, setSocialsInfo] = useState(() => getSocialInfo());

  let personalInfo = getPersonalInfo();
  let contactInfo = getContactInfo();
  let educationInfo = getEducationInfo();
  let certificationsInfo = getCertificateInfo();
  let skillsInfo = getSkillInfo();
  let socialsInfo = getSocialInfo();
  let hobbiesInfo = getHobbyInfo();

  return (
    <>
      <div>
        <div className="ui container bordered" style={{ marginTop: "50px" }}>
          <div
            className="blue ui top attached button"
            tabIndex="0"
            style={{ backgroundColor: "#1260CC" }}
          >
            Resume
          </div>
          <div className="ui grid container" style={{ marginTop: "15px" }}>
            <div className="two wide" style={{ marginTop: "15px" }}>
              {/* personal info */}
              <div className="ui card">
                <div className="column">
                  {!personalInfo && <Error item="Personal Information" />}
                  {personalInfo && (
                    <div>
                      <div
                        className="ui tiny circular image"
                        style={{ marginTop: "10px" }}
                      >
                        <img
                          src={personalInfo.url}
                          alt={personalInfo.firstName}
                          style={{
                            width: "80px",
                            height: "80px",
                            borderRadius: "55%",
                          }}
                        ></img>
                      </div>
                      <div className="ui header">
                        <p className="textColor">
                          {personalInfo.firstName} {personalInfo.lastName}
                        </p>
                      </div>
                      <div className="description" style={{ padding: "5px" }}>
                        {personalInfo.description}
                      </div>
                    </div>
                  )}
                </div>

                <div className="ui divided">
                  {/* contact info */}
                  <div className="column" style={{ marginTop: "10px" }}>
                    <h4 className="textColor">Contact Information</h4>
                    {!contactInfo ||
                      (contactInfo.length === 0 && (
                        <Error item="Contact Information" />
                      ))}
                    {contactInfo && (
                      <div>
                        <p style={{ paddingLeft: "5px" }}>
                          <i className="phone icon blue"></i>
                          {contactInfo.mobile}
                        </p>
                        <p style={{ paddingLeft: "5px" }}>
                          <i className="envelope icon blue"></i>
                          {contactInfo.email}
                        </p>
                      </div>
                    )}
                  </div>

                  {/* social media handles */}
                  <div className="column" style={{ marginTop: "2.5em" }}>
                    <h4 className="textColor">Social media </h4>
                    {!socialsInfo ||
                      (socialsInfo.length === 0 && (
                        <Error item="Social Information" />
                      ))}
                    {socialsInfo && (
                      <ul>
                        <li className="li-no-style" style={{ padding: "5px" }}>
                          <i className="linkedin icon blue"></i>
                          {socialsInfo.linkedin}
                        </li>
                        <li className="li-no-style" style={{ padding: "5px" }}>
                          <i className="facebook icon blue"></i>
                          {socialsInfo.facebook}
                        </li>
                        <li className="li-no-style" style={{ padding: "5px" }}>
                          <i className="twitter icon blue"></i>
                          {socialsInfo.twitter}
                        </li>
                      </ul>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className="eight wide column">
              <div className="ui divided items">
                {/* education background */}
                <div className="ui item">
                  <h4 className="textColor margin">Educational Background</h4>
                  {!educationInfo ||
                    (educationInfo.length === 0 && (
                      <Error item="Education Information" />
                    ))}
                  {educationInfo && <Table data={educationInfo} />}
                </div>

                {/* stack information */}
                <div className="ui item">
                  <h4 className="textColor margin">Stack Information</h4>
                  <div>
                    {!certificationsInfo ||
                      (certificationsInfo.length === 0 && (
                        <Error item="Certification Information" />
                      ))}

                    <StackTable />
                  </div>
                </div>

                {/* <StackTable /> */}
                {/* skills */}
                <div className="ui item">
                  <h4 className="textColor margin">Other Skills {""}</h4>
                  {!skillsInfo ||
                    (skillsInfo.length === 0 && (
                      <Error item="Skills Information" />
                    ))}
                  {skillsInfo && (
                    <ul>
                      {skillsInfo.map((skill, index) => (
                        <li key={index}>{skill}</li>
                      ))}
                    </ul>
                  )}
                </div>
                {/* hobbies */}
                <div className="ui item">
                  <h4 className="textColor margin">Hobbies Information</h4>
                  {!hobbiesInfo ||
                    (hobbiesInfo.length === 0 && (
                      <Error item="Hobbies Information" />
                    ))}
                  {hobbiesInfo && (
                    <ul>
                      {hobbiesInfo.map((hobby, index) => (
                        <li key={index}>{hobby}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </div>
          </div>
          <Button text="Print" />
        </div>
        {/* <p>Portfolio drafted on 23-06-2022</p> */}
      </div>
    </>
  );
}

export default Profile;
