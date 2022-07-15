import React, { useState, useEffect } from "react";
import Input from "./Input";
import { getSkillInfo } from "../data";

function SkillsInfo() {
  const [skills, setSkills] = useState([]);
  useEffect(() => {
    setSkills(getSkillInfo());
  }, [skills, setSkills]);
  return (
    <div>
      <div className="ui form">
        <h4 className="ui dividing header">Skills</h4>
        <div>
          {skills.map((skill, index) => (
            <div className="ui four fields">
              <Input
                type="text"
                id={index}
                passedValue={skill}
                placeholder={skill}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SkillsInfo;
