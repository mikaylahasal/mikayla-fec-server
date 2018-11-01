import React from 'react';
import ReactDom from 'react-dom';
import Instructor from './components/instructor.js';
import $ from 'jquery';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      instructor: null
    }
  }

  componentDidMount() {
    fetch("http://localhost:3332/instructors")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            instructor: result
          })
        console.log(this.state.instructor)
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }


  render() {
    if (this.state.instructor) {
    return (
      <div id="instructor">
        <Instructor instructor={this.state.instructor}/>
      </div>
      )
   } else {
    return (
      <div> Loading... </div>
      )
   }
  }
}

ReactDom.render(<App />, document.getElementById('instructor'));
