import React, { useState } from "react";

import SkillsInfo from "../form/SkillsInfo";
function SkillsView() {
  const [reload, setReload] = useState(false);
  console.log("Skills reload: ", reload);
  const handleReload = () => setReload((reload) => !reload);
  return (
    <div>
      <SkillsInfo onReload={handleReload} />
    </div>
  );
}

export default SkillsView;
