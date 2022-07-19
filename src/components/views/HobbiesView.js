import React, { useState } from "react";
import HobbiesInfo from "../form/HobbiesInfo";
function HobbiesView() {
  const [reload, setReload] = useState(false);
  const handleReload = () => setReload((reload) => !reload);
  return (
    <div>
      <HobbiesInfo onReload={handleReload} />
    </div>
  );
}

export default HobbiesView;
