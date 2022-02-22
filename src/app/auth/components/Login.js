//rafc
import axios from "axios";
import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import { login } from "../action/authAction";

//dumb components
//stateless ==> hook ==>help us to maintain the state of the component
//using useState()
//useState() ==> hook is used to handle the state
//state ==> email and password
//1. useState()
//2. add event handlers
//3. print the data to console from event handlers
//4. rest call

export const Login = ({ isAuthenticated, login }) => {
  //formData ==> an object which is going to hold the state of our form
  const [formData, setFormData] = useState({});

  const [error, setError] = useState({});
  //formData.email    formData.password
  //destructuring the formData
  //const email = formData.email;
  //const password = formData.password;

  //... ==> will help u to retrieve anything which is available in that object
  //like it holds all the things available in formData
  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const { username, password } = formData;
    login({ username, password });

    console.log("Hello from Login");
    console.log(JSON.stringify(formData));
  };

  if (isAuthenticated) {
    return <Navigate to="/dashboard"></Navigate>;
  }

  // axios
  //   .post("/api/users/login", newLogin)
  //   .then((res) => console.log(JSON.stringify(res.data)))
  //   .catch((err) => {
  //     console.error(JSON.stringify(err.response.data));
  //     this.setState({ errors: err.response.data });
  //   });

  // console.log(JSON.stringify(this.state));
  // const { errors } = this.state;

  return (
    <div className="login">
      <div className="container">
        <div className="row">
          <div className="col-md-8 m-auto">
            <h1 className="display-4 text-center">Log In</h1>
            <p className="lead text-center">Sign in to your Zee5 account</p>
            <form onSubmit={onSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="username"
                  name="username"
                  onChange={onChange}
                />
                <div>{error.name}</div>
              </div>
              <div className="form-group">
                <input
                  type="password"
                  className="form-control form-control-lg"
                  placeholder="Password"
                  name="password"
                  onChange={onChange}
                />
                <div>{error.password}</div>
              </div>
              <input type="submit" className="btn btn-info btn-block mt-4" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

Login.propTypes = {
  isAuthenticated: PropTypes.bool,
  login: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

const mapDispatchToProps = { login };

export default connect(mapStateToProps, mapDispatchToProps)(Login);
