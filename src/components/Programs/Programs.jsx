import React from 'react';
import "./Programs.css";
import { programsData } from '../../data/programsData';
import Program from '../Program/Program';

const Programs = () => {
    return (
      <div className="programs" id="programs">
        {/* header */}
        <div className="programs-header">
            <span className='strokeText'>EXPLORE OUR</span>
            <span>PROGRAMS</span>
            <span className='strokeText'>TO SHAPE YOU</span>
           
        </div>
        <div className="program-categories">
          {
            programsData.map(program=><Program
              program={program}
            ></Program>)
          }
        </div>
      </div>
    );
};

export default Programs;