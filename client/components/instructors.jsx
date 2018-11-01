import React from 'react';
import Instructor from './instructor.jsx';

const Instructors = (props) => {
  <div className="instructorBox">
    {
      props.instructors.map((instructor) => {
        return (
          <Instructor instructor={instructor}/>
          )
      })
    }
  </div>
};

export default Instructors;