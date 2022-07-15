import React from "react";
import ExperienceField from "./ExperienceField";

function ExperienceInfo() {
  return (
    <div>
      <div className="ui form ">
        <h4 className="ui dividing header">Experience</h4>
        <div id="experience" className="ui experience">
          <ExperienceField />
        </div>
      </div>
    </div>
  );
}

export default ExperienceInfo;
