import React, { Component } from "react";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      fullName: "",
      dateOfBirth: "",
      controls: ["email", "password", "fullName", "dateOfBirth"],
      errors: {
        email: [],
        password: [],
        fullName: [],
        dateOfBirth: [],
      },
      message: "",
    };
  }

  render() {
    return (
      <div className="row">
        <div className="col-lg-6 mx-auto">
          <h4>Register</h4>
          {/*Email starts*/}
          <div className="form-group form-row">
            <label className="col-lg-4 col-form-label" htmlFor="email">
              Email
            </label>
            <div className="col-lg-8">
              <input
                type="text"
                id="email"
                className="form-control"
                value={this.state.email}
                onChange={(event) => {
                  this.setState({ email: event.target.value }, this.validate);
                }}
              />
            </div>
          </div>
          {/*Email ends*/}

          {/*password starts*/}
          <div className="form-group form-row">
            <label className="col-lg-4 col-form-label" htmlFor="password">
              Password
            </label>
            <div className="col-lg-8">
              <input
                type="text"
                id="password"
                className="form-control"
                value={this.state.email}
                onChange={(event) => {
                  this.setState(
                    { password: event.target.value },
                    this.validate
                  );
                }}
              />
            </div>
          </div>
          {/*Password ends*/}

          {/*FullName starts*/}
          <div className="form-group form-row">
            <label className="col-lg-4 col-form-label" htmlFor="fullName">
              Full name
            </label>
            <div className="col-lg-8">
              <input
                type="text"
                id="fullName"
                className="form-control"
                value={this.state.email}
                onChange={(event) => {
                  this.setState({ email: event.target.value }, this.validate);
                }}
              />
            </div>
          </div>
          {/*fullName ends*/}

          {/*dateOfBirth starts*/}
          <div className="form-group form-row">
            <label className="col-lg-4 col-form-label" htmlFor="dateOfBirth">
              Date of Birth
            </label>
            <div className="col-lg-8">
              <input
                type="text"
                id="dateOfBirth"
                className="form-control"
                value={this.state.email}
                onChange={(event) => {
                  this.setState({ email: event.target.value }, this.validate);
                }}
              />
            </div>
          </div>
          {/*dateofBirth ends*/}
          <div className="row">
            <div className="col-lg-12">
              <div className="text-right">{this.state.message}</div>
              <div className="text-right">
                <button
                  className="btn btn-success m-2"
                  onClick={this.onRegisterClick}
                >
                  Register
                </button>
              </div>
              <ul className="text-danger">
                {Object.keys(this.state.errors).map((control) => {
                  return this.state.errors[control].map((err) => {
                    return <li key={err}>{err}</li>;
                  });
                })}
              </ul>
              {/*Errors*/}
              <div>{JSON.stringify(this.state.errors)}</div>
            </div>
          </div>
        </div>
      </div>
    );
  } //end of render

  validate = () => {
    //eading each control from "controls" array
    let errors = {};
    const validEmailRegex = /\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w([-.]\w+)*/;
    const validPasswordRegex = /((?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15})/;
    this.state.controls.forEach((control) => {
      errors[control] = [];
      switch (control) {
        case "email":
          //email can't be blank
          if (!this.state[control]) {
            errors = [control].push("Email cannot be blank ");
          }
          //checking email reg exp
          if (this.state.email) {
            if (!validEmailRegex.test(this.state[control])) {
              errors = [control].push("Proper email address is expected");
            }
          }
          break;

        case "password":
          //password cannot be blank
          if (!this.state[control]) {
            errors = [control].push("Password cannot be blank ");
          }
          if (this.state.email) {
            if (!validPasswordRegex.test(this.state[control])) {
              errors = [control].push(
                "Password should be 6 to 15 characters one upper,one lower and one digit"
              );
            }
          }
          break;

        case "fullName":
          //fullName can't be black
          if (!this.state[control]) {
            errors = [control].push("Full Name cannot be blank ");
          }
          break;

        case "dateOfBirth":
          //dateOfBirth can't be black
          if (!this.state[control]) {
            errors = [control].push("Date of birth cannot be blank ");
          }
          if (this.state[control]) {
            let dob = new Date(this.state[control].getTime());
            let today = new Date().getTime();

            if (today - 18 * 365.25 * 24 * 60 * 1000 < dob) {
              errors = [control].push("Minimum age is 18 years");
            }
          }
          break;
        default:
          break;
      }
    });
    this.setState({ errors });
  };
  isValid = () => {
    let valid = true;
    for (let control in this.state.errors) {
      if (this.state.errors[control].length > 0) {
        valid = false;
      }
    }
    return valid;
  };
  onRegisterClick = () => {
    this.validate();
    if (this.isValid) {
      this.setState({ message: "Valid" });
    } else {
      this.setState({ message: "Valid" });
      this.setState({ message: "Invalid" });
    }
  };
}
export default Register;
