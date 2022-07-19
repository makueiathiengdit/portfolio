import React, { useState, useEffect } from "react";
import Input from "./Input";
import { getSkillInfo } from "../data";
import { fetchData, storeData, deleteData } from "../ultils/Storage";
import RemoveButton from "./RemoveButton";
function SkillsInfo({ onReload }) {
  const [skills, setSkills] = useState([]);
  useEffect(() => {
    console.log("Inside Skills useEffect");
    try {
      let localStorageData = fetchData("skills");
      if (!localStorageData) throw new Error("Skills data not found");
      else setSkills(localStorageData);
    } catch (error) {
      console.log("Error fetching skills: ");
      setSkills(getSkillInfo);
      if (skills.length > 0) storeData("skills", skills);
    }
  }, [skills.length]);

  const handleRemove = (e) => {
    console.log("Called with", e.target.parentNode);
    let l = e.target.parentNode;
    let parent = l.parentNode;
    let id = parent.parentNode.getAttribute("data-id");
    removeById(id);
  };

  const removeById = (id) => {
    skills.splice(id, 1);
    console.log("splice:", skills);
    deleteData("skills");
    storeData("skills", skills);
    setSkills(skills);
    console.log("length:", skills.length);
    onReload();
  };

  const handleInputChange = (id, value) => {
    console.log(id, value);
    value = value.trim();
    if (value.length >= 3) {
      skills[id] = value;
      storeData("skills", skills);
      setSkills(skills);
    } else {
      alert("field cannot be empty");
    }
  };
  return (
    <div>
      <div className="ui form">
        <h3 className="ui dividing header">Skills</h3>
        <div className="ui center aligned">
          {skills.length === 0 && (
            <div className="ui two fields middle aligned">No data</div>
          )}
          <ol className="ui list">
            {skills.map((skill, index) => (
              <li key={index} data-id={index}>
                <div className="ui two fields middle aligned">
                  <Input
                    type="text"
                    id={index}
                    passedValue={skill}
                    placeholder={skill}
                    onChange={handleInputChange}
                  />
                  <RemoveButton key={index} onClick={handleRemove} />
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}

export default SkillsInfo;
