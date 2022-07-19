import React, { useState, useEffect } from "react";
import Input from "./Input";
import { getHobbyInfo } from "../data";
import { fetchData, storeData, deleteData } from "../ultils/Storage";
import RemoveButton from "./RemoveButton";
function HobbiesInfo({ onReload }) {
  const [hobbies, setHobbies] = useState([]);

  useEffect(() => {
    try {
      let localStorageData = fetchData("hobbies");
      if (!localStorageData) throw new Error("Hobbies data not found");
      else setHobbies(localStorageData);
    } catch (e) {
      console.log("Error fetching Hobbies: " + e.message);
      setHobbies(getHobbyInfo());
      if (hobbies.length > 0) storeData("hobbies", hobbies);
    }
    setHobbies(getHobbyInfo);
  }, [hobbies.length]);

  const handleInputChange = (id, value) => {
    console.log(id, value);
    value = value.trim();
    if (value.length >= 3) {
      hobbies[id] = value;
      storeData("hobbies", hobbies);
      setHobbies(hobbies);
    } else {
      console.log("Error", id, value);
    }
  };

  const handleRemove = (e) => {
    console.log("Called with", e.target.parentNode);
    let l = e.target.parentNode;
    let parent = l.parentNode;
    let id = parent.parentNode.getAttribute("data-id");
    removeById(id);
  };
  const removeById = (id) => {
    hobbies.splice(id, 1);
    deleteData("hobbies");
    storeData("hobbies", hobbies);
    setHobbies(hobbies);
    console.log("length:", hobbies.length);
    onReload();
  };

  return (
    <div>
      <div className="ui form">
        <h3 className="ui dividing header">Hobbies</h3>
        <ol className="ui list">
          {hobbies.map((hobby, index) => (
            <li key={index} data-id={index}>
              <div className="ui two fields middle aligned">
                <Input
                  type="text"
                  id={index}
                  placeholder="Enter hobby"
                  label=""
                  key={index}
                  passedValue={hobby}
                  onChange={handleInputChange}
                />
                <RemoveButton onClick={handleRemove} />
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

export default HobbiesInfo;
