import React, { Component } from "react";
import { connect } from "react-redux";
import { increment, decrement, reset } from "./action";

class Counter extends Component {
  state = { count: 0 };
  increment = () => {
    this.props.increment();
  };
  decrement = () => {
    this.props.decrement();
  };
  reset = () => {
    this.props.reset();
  };

  render() {
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
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    count: state.count
  };
};
// in this object, keys become prop names,
// and values should be action creator functions.
// They get bound to `dispatch`.
// By writing a mapDispatchToProps object (or function! but usually object)
// and passing it to connect when you wrap your component, you’ll receive those
// action creators as callable props. Here’s what I mean:
const mapDispatchToProps = {
  increment,
  decrement,
  reset
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
