import React, { useState, useEffect } from "react";
let stepsData = [
  {
    name: "Personal Info",
    active: false,
    completed: false,
  },
  {
    name: "Education",
    active: false,
    completed: false,
  },
  {
    name: "Experience",
    active: false,
    completed: false,
  },
  {
    name: "Skills",
    active: false,
    completed: false,
  },
  {
    name: "References",
    active: false,
    completed: false,
  },
  {
    name: "Hobbies",
    active: false,
    completed: false,
  },
  {
    name: "Download",
    active: false,
    completed: false,
  },
];
function Steps({ currentStep }) {
  const [steps, setSteps] = useState(stepsData);
  useEffect(() => {
    console.log(`Current step: ${currentStep}`);
    steps[currentStep] = { ...steps[currentStep], active: true };
    setSteps(steps);
  }, [currentStep]);
  return (
    <>
      <div className="ui ordered stackable small steps">
        {steps.map((step, index) => {
          if (currentStep === index) {
            step.active = true;
            step.completed = false;
          }
          if (index < currentStep) {
            step.active = false;
            step.completed = true;
          }
          if (index > currentStep) {
            step.active = false;
            step.completed = false;
          }
          return (
            <a
              className={`${step.active ? "active" : ""} ${
                step.completed ? "completed" : ""
              } step`}
              href="#"
              key={index}
            >
              <div className="content">
                <div className="title">{step.name}</div>
                {/* <div className="description">Choose your shipping options</div> */}
              </div>
            </a>
          );
        })}
      </div>
    </>
  );
}

export default Steps;
