import React from 'react';
import "./Plans.css";
import {plansData} from "../../data/plansData";
import Plan from '../Plan/Plan';

const Plans = () => {
    return (
        <div className='plans-container'>
            <div className="blur plans-blur-1"></div>
            <div className="blur plans-blur-2"></div>
            <div className="plans-header">
                <span className="strokeText">READY TO START  </span>
                <span> YOUR JOURNEY </span>
                <span className="strokeText"> NOW WITHUS</span>
            </div>
            {/* plans card */}
            <div className="plans">
                {
                    plansData.map(plan=>
                        <Plan plan={plan}></Plan>
                        
                        )
                }
            </div>
        </div>
    );
};

export default Plans;