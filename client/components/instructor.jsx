import React from 'react';

const Instructor = ({instructor}) => {
    <div className="avatarBox">
      <img className="avatar" src={instructor.imageUrl}></img>
      <div className="rating">{instructor.rating} Rating</div>
      <div className="reviews">{instructor.reviews} Reviews</div>
      <div className="students">{instructor.numOfStudents} Students</div>
      <div className="courses">{instructor.numOfCourses} Courses</div>
    </div>
    <div className="descriptionBox">
      <div className="name">{instructor.name}</div>
      <div className="headline">{instructor.headline}</div>
      <div className="body">{instructor.body}</div>
    </div>

}

export default Instructor;