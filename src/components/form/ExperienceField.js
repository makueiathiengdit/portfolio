import React from "react";
import Input from "./Input";

function ExperienceField() {
  const handleInputChange = (value) => {
    console.log(value);
  };
  return (
    <div>
      <div className="ui field">
        <div className="ui text fields">
          <Input
            type="text"
            id="employer"
            placeholder="Enter empolyer"
            label="Employer"
            onChange={handleInputChange}
          />
          <Input
            type="text"
            id="jobtittle"
            placeholder="Enter job title"
            label="Job title"
            onChange={handleInputChange}
          />
        </div>
      </div>
      <div className="ui field">
        <div className="ui text fields">
          <Input
            type="text"
            id="startdate"
            placeholder="Enter start date"
            label="Start Date"
            onChange={handleInputChange}
          />
          <Input
            type="text"
            id="enddate"
            placeholder="Enter end date"
            label="End Date"
            onChange={handleInputChange}
          />
        </div>
      </div>
      <div className="ui field">
        <Input
          type="text"
          id="description"
          placeholder="Enter description or responsibilities"
          label="Description"
          onChange={handleInputChange}
        />
      </div>
    </div>
  );
}

export default ExperienceField;
