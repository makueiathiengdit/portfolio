import React, { useState, useEffect } from "react";

import ContactView from "../views/ContactView";
import EducationView from "../views/EducationView";
import ExperienceView from "../views/ExperienceView";
import SkillsView from "../views/SkillsView";
import ReferencesView from "../views/ReferencesView";
import HobbiesView from "../views/HobbiesView";
import DownloadView from "../views/DownloadView";
import toast, { Toaster } from "react-hot-toast";

import Steps from "./Steps";
import Next from "./Next";
import Header from "../Header";

let views = [
  "Personal Information",
  "Education Information",
  "Experience",
  "Skills",
  "References",
  "Hobbies",
  "Download",
];

let toastId = null;
const notify = (promise, msg) => {
  toastId = toast.promise(promise, {
    loading: "saving",
    success: `${msg} saved successfully`,
    error: `Error saving ${msg}`,
    id: msg,
  });
  toast.remove(toastId);
};
const ClearLocalStorage = () => {
  return (
    <button className="ui primary button" onClick={() => localStorage.clear()}>
      Clear
    </button>
  );
};

function Form() {
  const [currentStep, setCurrentStep] = useState(0);
  useEffect(() => {
    setCurrentStep(currentStep);
  }, [currentStep, setCurrentStep]);

  const handleNextClick = () => {
    let promise = new Promise(function (resolve, reject) {
      setTimeout(() => resolve("done"), 800);
    });
    notify(promise, views[currentStep]);

    promise.then(() => {
      setCurrentStep((currentStep) => currentStep + 1);
    });
  };
  const handlePrevClick = () => {
    let promise = new Promise(function (resolve, reject) {
      setTimeout(() => resolve("done"), 800);
    });
    if (currentStep != views.length - 1) {
      notify(promise, views[currentStep]);
    } else {
      setCurrentStep((currentStep) => currentStep - 1);
      return;
    }
    promise.then(() => {
      setCurrentStep((currentStep) => currentStep - 1);
    });
  };
  return (
    <div className="ui main">
      <Toaster />
      {/* <Header /> */}
      <div className="ui container">
        <Steps currentStep={currentStep} />
      </div>
      <div>
        <ClearLocalStorage />
      </div>
      <div
        className="ui three column doubling stackable grid container"
        style={{ marginTop: "5px" }}
      >
        <div className="ui two wide column">
          {/* <div>
            <p>This is a paragraph</p>
            <p>This is a paragraph</p>
            <p>This is a paragraph</p>
            <p>This is a paragraph</p>
            <p>This is a paragraph</p>
            <p>This is a paragraph</p>
            <p>This is a paragraph</p>
          </div> */}
          {/* <ToastContainer /> */}
        </div>
        <div className="ui eight wide column">
          <div className="ui container">
            <div className="ui column">
              {/* contact information */}
              <div>{currentStep === 0 && <ContactView />}</div>

              {/* education background */}
              <div>
                {currentStep === 1 && <EducationView />}
                {/* <AddButton text="Add Education" /> */}
              </div>

              {/* work experience */}
              <div>
                {currentStep === 2 && <ExperienceView />}
                {/* <AddButton text="Add Experience" /> */}
              </div>

              {/* skills information */}
              <div>
                {currentStep === 3 && <SkillsView />}
                {/* <AddButton text="Add Skill" /> */}
              </div>

              {/* hobbies */}
              <div>
                {currentStep === 4 && <ReferencesView />}
                {/* <AddButton text="Add Hobby" /> */}
              </div>
              <div>{currentStep === 5 && <HobbiesView />}</div>
              <div>{currentStep === 6 && <DownloadView />}</div>
            </div>
          </div>
          <div className="ui field" style={{ marginTop: "3em" }}>
            {currentStep >= 1 && (
              <Next text="Back" direction="left" onClick={handlePrevClick} />
            )}
            <div>
              {currentStep <= 5 && (
                <Next text="Next" direction="right" onClick={handleNextClick} />
              )}
            </div>
          </div>
        </div>
        <div className="ui two wide column">
          {/* <div>
            <p>This is a paragraph</p>
            <p>This is a paragraph</p>
            <p>This is a paragraph</p>
            <p>This is a paragraph</p>
            <p>This is a paragraph</p>
            <p>This is a paragraph</p>
            <p>This is a paragraph</p>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Form;
