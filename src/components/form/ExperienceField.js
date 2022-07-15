import React from "react";
import Input from "./Input";

function ExperienceField() {
  return (
    <div>
      <div className="ui field">
        <div className="ui text fields">
          <Input
            type="text"
            id="employer"
            placeholder="Enter empolyer"
            label="Employer"
          />
          <Input
            type="text"
            id="jobtittle"
            placeholder="Enter job title"
            label="Job title"
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
          />
          <Input
            type="text"
            id="enddate"
            placeholder="Enter end date"
            label="End Date"
          />
        </div>
      </div>
      <div className="ui field">
        <Input
          type="text"
          id="description"
          placeholder="Enter description or responsibilities"
          label="Description"
        />
      </div>
    </div>
  );
}

export default ExperienceField;
