import React from "react";

{/* so here photo & price shows up */}
const CardComp = (photo, price) => {
  return <div>
    {/* image here  */}
    <div className = "">
      <img src = {photo} className = "min-w-45 shrink 0" />
      </div>
      {/* Description of the photo */}
      
  </div>;
};

export default CardComp;
