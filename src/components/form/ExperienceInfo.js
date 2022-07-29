import React, { useState, useEffect } from "react";
import ExperienceField from "./ExperienceField";
import { fetchData, storeData } from "../ultils/Storage";
import { getExperienceInfo } from "../data";
import AddButton from "./AddButton";
import RemoveButton from "./RemoveButton";

function ExperienceInfo({ onReload }) {
  const testData = {
    year: 2022,
    employer: "Kush Bank",
    jobTitle: "Branch Manager",
    startDate: "April 2016",
    endDate: "May 2019",
    description: ["Managing branch operation ", "managing employees"],
  };
  const [data, setData] = useState([]);
  console.log(data);
  useEffect(() => {
    console.log("Inside experience useEffect..");
    try {
      let localStorageData = fetchData("experience");
      if (!localStorageData) throw new Error("Experience data not found");
      else {
        setData(localStorageData);
      }
    } catch (e) {
      console.log(e.message);
      setData([testData]);
      if (data.length) storeData("experience", data);
    }
  }, []);

  const handleBlur = (id, newData) => {
    console.log(`Experience id: ${id} data: ${data}`);
    data[id] = newData;
    onReload();
  };
  const handleRemove = (id) => {
    console.log("removing...", id);
  };

  const handleAdd = () => {
    console.log("adding...");
    data.push(testData);
    storeData("experience", data);
    setData(data);
    onReload();
  };

  return (
    <div>
      <div className="ui form ">
        <h3 className="ui dividing header">Experience</h3>
        <div id="experience" className="ui experience">
          {console.log("Inside experience info", data)}
          {data.length === 0 && <div>No experience data found</div>}
          {data.map((item, index) => (
            <div className="ui field" key={index}>
              <ExperienceField
                data={item}
                key={index}
                id={index}
                onBlur={handleBlur}
                onRemove={handleRemove}
              />
              <RemoveButton onClick={handleRemove} transparent={false} />
            </div>
          ))}
          <AddButton onClick={handleAdd} />
        </div>
      </div>
    </div>
  );
}

export default ExperienceInfo;
