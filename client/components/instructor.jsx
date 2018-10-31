import React from 'react';

const Instructor = ({instructor}) => {
  <div>
    <div className="avatarBox">
      <img className="avatar" src={instructor.imageUrl}></img>
      <div className="rating">Rating: {instructor.rating}</div>
      <div className="reviews">{instructor.reviews} Reviews</div>
      <div className="students">{instructor.numOfStudents} Students</div>
      <div className="courses">{instructor.numOfCourses} Courses</div>
    </div>
  </div>
}