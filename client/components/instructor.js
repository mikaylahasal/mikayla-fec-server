import React from 'react';

const Instructor = (props) => {
  console.log(props.instructor);
  return (
    <div id="instructor">
      <div className="avatarBox">
        <img className="avatar" src={props.instructor.imageUrl}></img>
        <div className="rating">{props.instructor.rating} Rating</div>
        <div className="reviews">{props.instructor.reviews} Reviews</div>
        <div className="students">{props.instructor.numOfStudents} Students</div>
        <div className="courses">{props.instructor.numOfCourses} Courses</div>
      </div>
      <div className="descriptionBox">
        <div className="name">{props.instructor.name}</div>
        <div className="headline">{props.instructor.headline}</div>
        <div className="body">{props.instructor.body}</div>
      </div>
    </div>
  )

}

// class Instructor extends React.Component {
//   constructor(props) {
//     super(props);
//   }


// render() {
//   return (
//     <div id="instructor">
//     <div className="avatarBox">
//       <img className="avatar" src={this.props.instructor.imageUrl}></img>
//       <div className="rating">{instructor.rating} Rating</div>
//       <div className="reviews">{instructor.reviews} Reviews</div>
//       <div className="students">{instructor.numOfStudents} Students</div>
//       <div className="courses">{instructor.numOfCourses} Courses</div>
//     </div>
//     <div className="descriptionBox">
//       <div className="name">{instructor.name}</div>
//       <div className="headline">{instructor.headline}</div>
//       <div className="body">{instructor.body}</div>
//     </div>
//     </div>
//   )
// }

// }

export default Instructor;