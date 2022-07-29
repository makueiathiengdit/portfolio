import React, { useState } from "react";
import axios from "axios";
const DownloadButton = () => {
  const [res, setRes] = useState({});

  const sendRequest = () => {
    // 1. Create a new XMLHttpRequest object
    let xhr = new XMLHttpRequest();

    // 2. Configure it: GET-request for the URL /article/.../load
    xhr.open("GET", "http://localhost:8000/download.php");

    // 3. Send the request over the network
    xhr.send();

    // 4. This will be called after the response is received
    xhr.onload = function () {
      if (xhr.status != 200) {
        // analyze HTTP status of the response
        alert(`Error ${xhr.status}: ${xhr.statusText}`); // e.g. 404: Not Found
      } else {
        // show the result
        alert(`Done, got ${xhr.response.length} bytes`); // response is the server response
      }
    };

    xhr.onprogress = function (event) {
      if (event.lengthComputable) {
        alert(`Received ${event.loaded} of ${event.total} bytes`);
      } else {
        alert(`Received ${event.loaded} bytes`); // no Content-Length
      }
    };

    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        console.log(JSON.parse(xhr.responseText));
        setRes(JSON.parse(xhr.responseText));
      }
    };

    xhr.onerror = function () {
      alert("Request failed");
    };
  };

  const handleClick = () => {
    console.log("Downloading...");
    // axios
    //   .post("http://localhost:8000/download.php", {
    //     firstName: "Fred",
    //     lastName: "Flintstone",
    //   })
    //   .then(function (response) {
    //     console.log(response);
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });

    sendRequest();
  };
  return (
    <div>
      {res && (
        <div>
          <h3>Response Details</h3>
          <h5>Status: {res.status}</h5>
          <h5>Message: {res.message}</h5>
        </div>
      )}
      <button className="ui right labeled icon button" onClick={handleClick}>
        <i className="download icon"></i>
        Download
      </button>
    </div>
  );
};

function DownloadView() {
  return (
    <div>
      DownloadView
      <DownloadButton />
    </div>
  );
}

export default DownloadView;
