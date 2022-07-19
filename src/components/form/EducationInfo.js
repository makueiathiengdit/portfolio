import React, { useState, useEffect } from "react";
import EducationField from "./EducationField";
import { getEducationInfo } from "../data";
import { fetchData, storeData, deleteData } from "../ultils/Storage";

function EducationInfo() {
  const [data, setData] = useState([]);
  // deleteData("education");
  useEffect(() => {
    try {
      let localStorageData = fetchData("education");
      if (!localStorageData) throw new Error("Education data not found");
      else setData(localStorageData);
    } catch (error) {
      console.log("Error fetching education data: " + error);
      setData(getEducationInfo());
      console.log("data: " + data);
      if (data.length > 0) storeData("education", data);
    }
  }, []);
  return (
    <div>
      <div className="ui form">
        <h3 className="ui dividing header">Education</h3>
        <div className="ui education">
          {data.map((item, key) => (
            <EducationField data={item} key={key} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default EducationInfo;
