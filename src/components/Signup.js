import React, { useState } from "react";
import Modal from "react-modal";
import { withRouter } from "react-router-dom";
import GoogleLogin from "react-google-login";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import {backend, googleid} from '../config';
import "./Modal.css";
import axios from "axios";

const Signup = (props) => {
  const [modalIsOpen, setIsOpen] = useState(true);

  const closeModal = () => {
    setIsOpen(false);
  };

  const [state, setState] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    successMessage: null,
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const sendDetailsToServer = () => {
    if (state.name.length && state.email.length && state.password.length) {
      const payload = {
        name: state.name,
        email: state.email,
        password: state.password,
      };
      console.log(payload);
      axios
        .post(`${backend}/user`, payload)
        .then((response) => {
          console.log(response);
          localStorage.setItem("user_name", response.data.name);

          if (response.status === 201) {
            setState((prevState) => ({
              ...prevState,
              SuccessMessage:
                "Registration successful. Redirecting to home page..",
            }));

            props.setOutApp(true);

            redirectToUser();
            console.log(null);
          } else {
            alert("Some error occurred");
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    } else {
      alert("Please enter valid name and password");
    }
  };

  const redirectToUser = () => {
    props.history.push("./userpage");
  };

  const redirectToLogin = () => {
    props.history.push("./login");
  };

  const handleSubmitClick = (e) => {
    e.preventDefault();
    if (state.password === state.confirmPassword) {
      sendDetailsToServer();
    } else {
      alert("Passwords do not match");
    }
  };

  // const responseGoogle = (response) => {
  //   console.log(response);
  //   props.history.push("./userpage");
  // };

  const responseSuccessGoogle = (response) => {
    // console.log("test",response);
    axios({
      method: "POST",
      url: `${backend}/user/googlelogin`,
      data: { tokenId: response.tokenId },
    }).then((response) => {
      // console.log(response);
    });
    props.history.push("/userpage");
  };
  const responseFailureGoogle = (response) => {
    console.log(response);
    // props.history.push("")
  };

  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={props.clearSelectedOption}
        ariaHideApp={false}
        contentLabel="Selected Option"
        className="Modal"
        overlayClassName="Overlay"
      >
        <h1>Registrieren</h1>
        <a href="/">
          <i onClick={closeModal} className="closeBtn fas fa-times"></i>
        </a>
        <Form action="" className="form">
          <FormGroup className="">
            <label htmlFor="InputName">Name</label>
            <Input
              type="text"
              className=""
              id="name"
              placeholder="Input your name"
              value={state.name}
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup className="">
            <Label htmlFor="InputEmail">E-mail</Label>
            <Input
              type="email"
              className=""
              id="email"
              placeholder="Input your email"
              value={state.email}
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup className="">
            <Label htmlFor="InputPassword">Password</Label>
            <Input
              type="password"
              className=""
              id="password"
              placeholder="Input your Password"
              value={state.password}
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup className="">
            <Label htmlFor="ConfirmPassword">Confirm Password</Label>
            <Input
              type="password"
              className=""
              id="confirmPassword"
              placeholder="Confirm your Password"
              value={state.confirmPassword}
              onChange={handleChange}
            />
          </FormGroup>
          <Button color="danger" onClick={handleSubmitClick}>
            Register
          </Button>
        </Form>
        <div
          className=""
          style={{ display: state.successMessage ? "block" : "none" }}
          role="alert"
        >
          {state.successMessage}
        </div>
        <div className="G_login">
          <GoogleLogin
            clientId={googleid}
            buttonText="Login mit Google"
            onSuccess={responseSuccessGoogle}
            onFailure={responseFailureGoogle}
            cookiePolicy={"single_host_origin"}
          />
        </div>
        <div className="mt-2">
          <span className="modalText">Already have an account? </span>
          <span className="loginText" onClick={() => redirectToLogin()}>
            Login here
          </span>
        </div>
      </Modal>
    </div>
  );
};

export default withRouter(Signup);
