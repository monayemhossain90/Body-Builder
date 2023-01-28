import React from "react";
import "./Plan.css";
import whiteTick from "../../assets/whiteTick.png";
import rightArrow from "../../assets/rightArrow.png";

const Plan = ({plan}) => {
  return (
    <div className="plan">
      {plan.icon}
      <span>{plan.name}</span>
      <span>&#36; {plan.price}</span>
      <div className="features">
        {plan.features.map(feature=>
           <div className="feature">
            <img src={whiteTick} alt="tick" />
            <span>{feature}</span>
           </div>
            )}
      </div>
      <div className="benifits">
        <span>See more benefits</span>
        <img src={rightArrow} alt="right arrow" />
      </div>
      <button>
        Join Now
      </button>
    </div>
  );
};

export default Plan;
