import React from "react";
import Input from "./Input";
import RemoveButton from "./RemoveButton";

function ExperienceField({ data, id, onBlur, onRemove }) {
  let experienceDataMap = new Map();
  let exObj = { description: [] };

  let descriptionMap = new Map();
  const handleInputChange = (key, value) => {
    // console.log(`${key}: ${value}`);

    if (key === "description") {
      descriptionMap.set(key, value);
      exObj.description.push(value);
    } else {
      experienceDataMap.set(key, value);
      exObj[key] = value;
    }

    // console.log("exobj:", exObj);
  };

  const handleBlur = () => {
    let data = { ...exObj };
    console.log("data to be returned:", data);
    onBlur(id, data);
  };
  const handleRemove = (id) => {
    console.log("removing " + id);
  };
  const handleDescriptionInputChange = (key, value) => {
    exObj.description[key] = value;
  };
  return (
    <div>
      <div onBlur={handleBlur}>
        <div className="ui field" data-id={id}>
          <div className="ui text field">
            <Input
              type="text"
              id="employer"
              placeholder="Enter empolyer"
              label="Employer"
              passedValue={data.employer}
              onChange={handleInputChange}
            />
            <Input
              type="text"
              id="jobtittle"
              placeholder="Enter job title"
              label="Job title"
              passedValue={data.jobTitle}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="ui field">
          <div className="ui text field">
            <Input
              type="text"
              id="startdate"
              placeholder="Enter start date"
              label="Start Date"
              passedValue={data.startDate}
              onChange={handleInputChange}
            />
            <Input
              type="text"
              id="enddate"
              placeholder="Enter end date"
              label="End Date"
              passedValue={data.endDate}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="ui ">
          {data.description.map((item, index) => (
            <div
              className="ui two column doubling stackable grid container"
              key={index}
            >
              <div className="ui ten wide column">
                <Input
                  type="text"
                  id={index}
                  passedValue={item}
                  label={index === 0 ? "Description" : ""}
                  onChange={handleDescriptionInputChange}
                />
              </div>
              <div className="ui two wide column middle aligned">
                <RemoveButton onClick={handleRemove} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ExperienceField;
