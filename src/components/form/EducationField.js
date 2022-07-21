import React from "react";
import Input from "./Input";
import RemoveButton from "./RemoveButton";

function EducationField({ data, id, onChange, onRemove }) {
  const handleInputChange = (field, value) => {
    onChange(id, field, value);
  };
  const handleRemove = () => {
    console.log("Removing ");
    onRemove(id);
  };

  return (
    <div className="ui field">
      <div className="ui three fields">
        <Input
          type="text"
          id="year"
          placeholder={data.year}
          label="Year"
          passedValue={data.year}
          onChange={handleInputChange}
        />
        <Input
          label="School/Insitution"
          type="text"
          id="school"
          placeholder={data.school}
          passedValue={data.school}
          onChange={handleInputChange}
        />
        <Input
          label="Award"
          type="text"
          id="award"
          placeholder={data.award}
          passedValue={data.award}
          onChange={handleInputChange}
        />
        <RemoveButton onClick={handleRemove} />
      </div>
    </div>
  );
}

export default EducationField;
