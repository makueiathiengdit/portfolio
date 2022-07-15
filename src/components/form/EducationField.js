import React from "react";
import Input from "./Input";
function EducationField({ data }) {
  return (
    <div className="ui field">
      <div className="ui three fields">
        <Input
          type="text"
          id="year"
          placeholder={data.year}
          label="Year"
          value={data.year}
        />
        <Input
          label="School/Insitution"
          type="text"
          id="school"
          placeholder={data.school}
          value={data.school}
        />
        <Input
          label="Award"
          type="text"
          id="award"
          placeholder={data.award}
          value={data.award}
        />
      </div>
    </div>
  );
}

export default EducationField;
