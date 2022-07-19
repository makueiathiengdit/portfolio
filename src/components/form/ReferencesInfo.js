import React from "react";
import Input from "./Input";
function ReferencesInfo() {
  let data = [
    {
      name: "e.g Deng",
      occupation: "e.g Director",
      email: "e.g dengan@gmail.com",
    },
    {
      name: "e.g Deng",
      occupation: "e.g Director",
      email: "e.g dengan@gmail.com",
    },
  ];
  return (
    <div className="ui form">
      <h3 className="ui dividing header">References</h3>

      {data.map((item, index) => (
        <div className="ui field" key={index}>
          <div className="ui three fields">
            <Input
              label="Name"
              type="text"
              id="name"
              placeholder={item.name}
              value={item.name}
            />
            <Input
              label="Occupation"
              type="text"
              id="occupation"
              placeholder={item.occupation}
              value={item.occupation}
            />
            <Input
              label="Email"
              type="email"
              id="email"
              placeholder={item.email}
              value={item.email}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default ReferencesInfo;
