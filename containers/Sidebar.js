import React, { Component } from "react";
// import { render } from "react-dom";
import Link from "./Links";

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      number: 0,
      data: [],
      role: {
        admin: true,
        isNew: false,
      },
    };
  }

  clickHandler = () => {
    console.log("Clicking");
    // alert("Clicking meeeeee!");
    this.setState({ number: this.state.number + 1 });
  };

  alertHandler = () => {};

  render() {
    const { title, data } = this.props;
    const { number } = this.state;
    console.log(this.state);

    return (
      <div>
        <h1>Today.uz</h1>
        <p>
          {title}, {data.name}
        </p>
        <button onClick={this.clickHandler}>Click Me!</button>
        <p>Number: {number}</p>
        <Link data={{ url: "/mylink", title: "Link", isActive: true }} />
      </div>
    );
  }
}

export default Sidebar;
