import React, { Component } from "react";
import { connect } from "react-redux";

import { increment, decrement, reset } from "./counterActions";
import { fetchUserSuccess, resetUser, removeUser } from "./usersActions";

class Counter extends Component {
  // state = { count: 0 };
  increment = () => {
    this.props.increment();
    fetch(`https://jsonplaceholder.typicode.com/users/${this.props.count + 1}`)
      .then((response) => response.json())
      .then((data) => {
        console.log("DATA Line 14", data);
        this.fetchUserSuccess(data);
      });
  };
  decrement = () => {
    this.props.decrement();
    this.props.removeUser();
  };

  reset = () => {
    console.log("DATA Line 24");
    this.props.resetUser();
    this.props.reset();
  };
  fetchUserSuccess = (data) => {
    this.props.fetchUserSuccess(data);
  };

  render() {
    console.log("props ", this.props);
    return (
      <div className="counter">
        <h2>Counter</h2>
        <div>
          <button onClick={this.decrement}>-</button>
          <span>{this.props.count}</span>
          <button onClick={this.increment}>+</button>
        </div>
        <button className="reset-button" onClick={this.reset}>
          &#8634;
        </button>

        {this.props.users.length > 0 &&
          this.props.users.map((user) => {
            return <li key={user.id}>{user.name} </li>;
          })}
      </div>
    );
  }
}
// Component counter will make a call to the API!
// Map user actions as props to counter component.
// Once API returns data, then you will make a call to the UserAction and pass the returned data .
// Then UserAction will have the data , and it will call a Reducer with that data.
// Then In the reducer you will update the user state.
// Once user state is updated the you have to map user state to the component
// And finally make use of that state to show the user.
// To have user actions in your component you need to MapDispathToProps.

const mapStateToProps = (state) => {
  // console.log("STATE", state);
  return {
    count: state.reducer.count,
    users: state.users.users
  };
};
// in this object, keys become prop names,
// and values should be action creator functions.
// They get bound to `dispatch`.
// By writing a mapDispatchToProps object (or function! but usually object)
// and passing it to connect when you wrap your component, you’ll receive those
// action creators as callable props. Here’s what I mean:
// The work of MapDispatchToProps is to pass your actions/functions as props to the component.
// The work of MapStateToProps is to pass your redux state as prop to the component.
const mapDispatchToProps = {
  increment,
  decrement,
  reset,
  fetchUserSuccess,
  resetUser,
  removeUser
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
