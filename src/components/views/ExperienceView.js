import React, { useState } from "react";
import ExperienceInfo from "../form/ExperienceInfo";

function ExperienceView() {
  const [reload, setReload] = useState(false);
  console.log("Skills reload: ", reload);
  const handleReload = () => setReload((reload) => !reload);
  return (
    <div>
      <ExperienceInfo onReload={handleReload} />
    </div>
  );
}

export default ExperienceView;
