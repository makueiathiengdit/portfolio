import React, { useState, useEffect } from "react";
import EducationField from "./EducationField";
import { getEducationInfo } from "../data";

function EducationInfo() {
  const [data, setData] = useState([]);
  useEffect(() => {
    setData(getEducationInfo);
  }, [data, setData]);
  return (
    <div>
      <div className="ui form">
        <h4 className="ui dividing header">Education</h4>
        <div className="ui education">
          {data.map((item) => (
            <EducationField data={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default EducationInfo;
