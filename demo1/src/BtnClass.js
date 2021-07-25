import React, { Component } from "react";
import "./BtnClass.css";

class BtnClass extends Component {
  // first renders
  constructor(props) {
    super(props);
    this.state = {
      name: null,
      loggedIn: false,
      users: ["Josh", "Samantha", "Bob", "Alice"],
      message: null,
    };
  }

  //   static getDerivedStateFromProps(props, state) {
  //     console.log("Get Derived State From Props");
  //     console.log(props);
  //     console.log(state);
  //     return { this.setState({name: props.name })};
  //   }

  login = () => {
    this.setState({ loggedIn: true });
  };

  logout = () => {
    this.setState({ loggedIn: false });
  };

  deleteUser = (name) => {
    console.log("called");
    this.setState({ users: this.state.users.filter((user) => name !== user) });
  };

  componentDidMount() {
    // api call
    console.log("Component did mount");
  }

  shouldComponentUpdate(nextProps, nextState) {
    // update only if count > 0;
    // return nextProps.count >= 0;
    return !nextProps.locked;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    // if previous state is == sth then change accordingly
    return null;
  }

  componentDidUpdate() {
    alert("Component did update");
  }

  componentWillUnmount() {
    alert("Unmounted");
  }
  render() {
    return (
      <div className="btn__class__wrapper">
        <h1>Class</h1>
        Count: {this.props.count}
        {this.state.loggedIn ? (
          <div className="logoutContainer">
            <h1>You are logged in </h1>
            <button className="login" onClick={this.logout}>
              Press here to log out
            </button>
          </div>
        ) : (
          <div className="loginContainer">
            <h1>You are logged out </h1>
            <button className="login" onClick={this.login}>
              Press here to log in
            </button>
          </div>
        )}
        <div className="users">
          {this.state.users.map((user) => (
            <div>
              <h1> {user}</h1>
              <button onClick={() => this.deleteUser(user)}>
                Delete this User{" "}
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default BtnClass;
