import React from 'react';
import "./Plans.css";
import {plansData} from "../../data/plansData";
import Plan from '../Plan/Plan';

const Plans = () => {
    return (
        <div className='plans-container'>
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