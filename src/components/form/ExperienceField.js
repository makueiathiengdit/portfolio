import React from "react";
import Input from "./Input";
import RemoveButton from "./RemoveButton";

function ExperienceField({ data, id, onBlur, onRemove }) {
  const handleInputChange = (value) => {
    console.log(value);
  };

  const handleBlur = (value) => {};
  const handleRemove = (id) => {
    console.log("removing " + id);
  };
  return (
    <div>
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
                onChange={handleInputChange}
              />
            </div>
            <div className="ui two wide column middle aligned">
              <RemoveButton onClick={handleRemove} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ExperienceField;
