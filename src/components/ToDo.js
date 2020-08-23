import React from 'react';

class ToDo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      remaining: 3,
      completed: 0,
      message: 'You have unfinished tasks!'
    }
  }
  handleChange = event => {
    if (event.target.checked) { //Todo done
      this.setState({
        completed: this.state.completed + 1,
        remaining: this.state.remaining - 1
      })
      const id = event.target.id;
      document.getElementById(id).style.opacity = 0.5;
    } else { //Todo unchecked
      this.setState({
        completed: this.state.completed - 1,
        remaining: this.state.remaining + 1
      })
      const id = event.target.id;
      document.getElementById(id).style.opacity = 1;
    }
  }
  componentDidUpdate(prevProps, prevState) { //check if state has changed
    if (prevState.remaining !== this.state.remaining) {
      this.updateMessage();
    }
  }
  updateMessage() {
    if (this.state.remaining === 0) {
      this.setState({
        message: 'Good job! Now take a little rest..'
      })
    } else {
      this.setState({
        message: 'You have something left to do..'
      })
    }
  }
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <input type="checkbox" id="todo1" onChange={this.handleChange}></input>
        <label htmlFor="todo1">Make fruit salad</label><br />
        <input type="checkbox" id="todo2" onChange={this.handleChange}></input>
        <label htmlFor="todo2">Write e-mail to Carl</label><br />
        <input type="checkbox" id="todo3" onChange={this.handleChange}></input>
        <label htmlFor="todo3">Call mom</label><br />
        <p className="message">{this.state.message}</p>
        <div className="todo-status">
          <p>Completed: {this.state.completed}</p>
          <p>Remaining: {this.state.remaining}</p>
        </div>
      </div>
    )
  }
}


export default ToDo;
