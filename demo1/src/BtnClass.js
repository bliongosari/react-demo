import React, { Component } from "react";
import "./BtnClass.css";

class BtnClass extends Component {
  // first renders
  constructor(props) {
    super(props);
    this.state = {
      name: null,
      loggedIn: false,
    };
  }

  //   static getDerivedStateFromProps(props, state) {
  //     console.log("Get Derived State From Props");
  //     console.log(props);
  //     console.log(state);
  //     return { name: props.nameFromParent };
  //   }

  login = () => {
    this.setState({ loggedIn: true });
  };

  logout = () => {
    this.setState({ loggedIn: false });
  };

  componentDidMount() {
    console.log("Component did mount");
  }

  render() {
    return (
      <div className="btn__class__wrapper">
        <h1>Class</h1>

        {this.state.loggedIn ? (
          <div>
            <h1>You are logged in </h1>
            <button className="login" onClick={this.logout}>
              Press here to log out
            </button>
          </div>
        ) : (
          <div>
            <h1>You are logged out </h1>
            <button className="login" onClick={this.login}>
              Press here to log in
            </button>
          </div>
        )}
      </div>
    );
  }
}

export default BtnClass;
