import React from 'react';
import { Collapse } from 'react-bootstrap';

class Instructor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showText: false
    }
  }
  render() {
    return (
      <div id="instructor">
        <div className="avatarBox">
          <img className="avatar" src={this.props.instructor.imageUrl}></img>
          <div className="rating">
            <img className="ratingIcon" src={this.props.instructor.ratingIcon}></img>
            {this.props.instructor.rating} Instructor Rating
          </div>
          <div className="reviews">
            <img className="reviewsIcon" src={this.props.instructor.reviewsIcon}></img>
            {this.props.instructor.reviews} Reviews
          </div>
          <div className="students">
            <img className="studentsIcon" src={this.props.instructor.studentsIcon}></img>
            {this.props.instructor.numOfStudents} Students</div>
          <div className="courses">
            <img className="courseIcon" src={this.props.instructor.courseIcon}></img>
            {this.props.instructor.numOfCourses} Courses</div>
        </div>

        <div className="descriptionBox">
          <div className="name">{this.props.instructor.name}</div>
          <div className="headline">{this.props.instructor.headline}</div>


          <div className="body">
            <p>{this.props.instructor.body} {this.props.instructor.body}</p>
            <a onClick={() => this.setState({ showText: !this.state.showText })}>See more</a>
            <Collapse in={this.state.showText}>
              <div>
                 <span>
                   {this.props.instructor.body}
                 </span>
              </div>
            </Collapse>
          </div>
        </div>
      </div>
    );
  }
}

export default Instructor;