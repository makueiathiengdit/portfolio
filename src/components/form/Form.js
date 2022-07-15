import React from "react";

import AddButton from "./AddButton";

import ContactInfo from "./ContactInfo";
import EducationInfo from "./EducationInfo";
import ExperienceInfo from "./ExperienceInfo";
import SkillsInfo from "./SkillsInfo";
import HobbiesInfo from "./HobbiesInfo";
import Steps from "./Steps";

function Form() {
  return (
    <div className="ui main">
      <div className="ui container">
        <Steps />
      </div>

      <div className="ui three column doubling stackable grid container">
        <div className="ui two wide column">
          <p>This is a paragraph</p>
          <p>This is a paragraph</p>
          <p>This is a paragraph</p>
          <p>This is a paragraph</p>
          <p>This is a paragraph</p>
          <p>This is a paragraph</p>
          <p>This is a paragraph</p>
        </div>
        <div className="ui eight wide column">
          <div className="ui container">
            <div className="ui column">
              {/* contact information */}
              <div>
                <ContactInfo />
              </div>

              {/* education background */}
              {/* <div>
        <EducationInfo />
        <AddButton text="Add Education" />
      </div> */}

              {/* work experience */}
              {/* <div>
        <ExperienceInfo />
        <AddButton text="Add Experience" />
      </div> */}

              {/* skills information */}
              {/* <div>
        <SkillsInfo />
        <AddButton text="Add Skill" />
      </div> */}

              {/* hobbies */}
              {/* <div>
        <HobbiesInfo />
        <AddButton text="Add Hobby" />
      </div> */}
            </div>
          </div>
        </div>
        <div className="ui two wide column">
          <p>This is a paragraph</p>
          <p>This is a paragraph</p>
          <p>This is a paragraph</p>
          <p>This is a paragraph</p>
          <p>This is a paragraph</p>
          <p>This is a paragraph</p>
          <p>This is a paragraph</p>
        </div>
      </div>
    </div>
  );
}

export default Form;
