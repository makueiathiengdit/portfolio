import React, { useState, useEffect } from "react";
import EducationField from "./EducationField";
import { getEducationInfo } from "../data";
import { fetchData, storeData, deleteData } from "../ultils/Storage";
import AddButton from "./AddButton";

function EducationInfo({ onReload }) {
  const [data, setData] = useState([]);

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
  }, [setData]);

  const handleInputChange = (parentId, key, value) => {
    console.log(parentId, key, value);
    data[parentId][key] = value;
    storeData("education", data);
    setData(data);
  };
  const handleAdd = () => {
    console.log("Adding...");
    data.push({
      year: "e.g 2022",
      school: "e.g juba university",
      award: "e.g Bachelors of Science",
    });
    storeData("education", data);
    setData(data);
    onReload();
  };
  const handleRemove = (id) => {
    console.log("Removing...", id);
    data.splice(id, 1);
    storeData("education", data);
    setData(data);
    onReload();
  };
  return (
    <div>
      <div className="ui form">
        <h3 className="ui dividing header">Education</h3>
        <div className="ui education">
          {data.map((item, key) => (
            <EducationField
              data={item}
              key={key}
              id={key}
              onChange={handleInputChange}
              onRemove={handleRemove}
            />
          ))}
        </div>
        <div>
          <AddButton onClick={handleAdd} />
        </div>
      </div>
    </div>
  );
}

export default EducationInfo;
