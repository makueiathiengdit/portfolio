import React, { useState, useEffect } from "react";
import Input from "./Input";
import { getHobbyInfo } from "../data";
function HobbiesInfo() {
  const [hobbies, setHobbies] = useState([]);

  useEffect(() => {
    setHobbies(getHobbyInfo);
  }, [hobbies, setHobbies]);
  return (
    <div>
      <div className="ui form">
        <h4 className="ui dividing header">Hobbies</h4>
        {hobbies.map((hobby, index) => (
          <div className="ui four fields">
            <Input
              type="text"
              id="hobbyone"
              placeholder="Enter hobby"
              label=""
              key={index}
              passedValue={hobby}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default HobbiesInfo;
