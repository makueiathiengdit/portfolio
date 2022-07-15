import React from "react";

function Steps() {
  return (
    <>
      <div class="ui ordered unstackable small steps">
        <a class="completed step" href="#">
          <div class="content">
            <div class="title">Personal Info</div>
            {/* <div class="description">Choose your shipping options</div> */}
          </div>
        </a>
        <a class="completed step" href="#">
          <div class="content">
            <div class="title">Education</div>
            {/* <div class="description">Enter billing information</div> */}
          </div>
        </a>
        <a class="active step" href="#">
          <div class="content">
            <div class="title">Experience</div>
            {/* <div class="description">Verify order details</div> */}
          </div>
        </a>
        <a class="active step" href="#">
          <div class="content">
            <div class="title">Skills</div>
            {/* <div class="description">Verify order details</div> */}
          </div>
        </a>
        <a class="active step" href="#">
          <div class="content">
            <div class="title">References</div>
            {/* <div class="description">Verify order details</div> */}
          </div>
        </a>
        <a class="active step" href="#">
          <div class="content">
            <div class="title">Hobbies</div>
            {/* <div class="description">Verify order details</div> */}
          </div>
        </a>
        <a class="active step">
          <div class="content">
            <div class="title">Download</div>
            {/* <div class="description">Verify order details</div> */}
          </div>
        </a>
      </div>
    </>
  );
}

export default Steps;
