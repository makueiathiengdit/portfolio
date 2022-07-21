import React, { useState } from "react";
import EducationInfo from "../form/EducationInfo";
function EducationView() {
  const [reload, setReload] = useState(false);
  console.log("Skills reload: ", reload);
  const handleReload = () => setReload((reload) => !reload);
  return (
    <div>
      <EducationInfo onReload={handleReload} />
    </div>
  );
}

export default EducationView;
