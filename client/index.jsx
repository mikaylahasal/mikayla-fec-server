import React from 'react';
import ReactDom from 'react-dom';
import Instructors from './instructors.jsx';
import $ from 'jquery';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      instructor: null;
    }
  }

  componentDidMount() {
    fetch('http://localhost:3332/instructors')
    .then(function(res) {
      res.json();
    })
    .then(function(result) {
      this.setState({instructor: result})
    })
  }

  render() {
    return (
      <div>
        <Instructors instructor={this.state.instructor}/>
      </div>
      )
  }
}

ReactDom.render(<App />, document.getElementById('instructors'));
