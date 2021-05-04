import React, { useState } from "react";
import GoogleLogin from "react-google-login";
import Modal from "react-modal";
import { withRouter } from "react-router-dom";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
// import {backend, googleid} from '../config';
import "./Modal.css";
import axios from "axios";

const Login = (props) => {
  const [modalIsOpen, setIsOpen] = useState(true);

  const closeModal = () => {
    setIsOpen(false);
  };

  const [state, setState] = useState({
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
    if (state.email.length && state.password.length) {
      const payload = {
        email: state.email,
        password: state.password,
      };
      console.log(payload);
      axios
        .post(`${process.env.REACT_APP_BACKENDURL}/user/login`, payload)
        .then((response) => {
          console.log(response);
          localStorage.setItem("user_token", response.data.token);
          localStorage.setItem("user_name",response.data.name)
          

          if (response.status === 200) {
            setState((prevState) => ({
              ...prevState,

              // "SuccessMessage":"Login successful. Redirecting to home page.."
            }));

            props.setOutApp(true);

            redirectToUser();
            console.log(null);
          } else {
            alert(`Some error occurred`);
          }
        })
        .catch((error) => {
          console.log(error);
          alert("Invalid Email or Password");
        });
    } else {
      alert("Please enter valid name and password");
    }
  };



  const redirectToUser = () => {
    const userPage = localStorage.getItem("user_token");
    console.log(userPage);
    if (userPage) {
      props.history.push("./userpage");
    } else {
      props.history.push("/");
    }
  };

  const redirectToRegister = () => {
    props.history.push("./signup");
  };

  const handleSubmitClick = (e) => {
    e.preventDefault();
    // if(state.password === state.confirmPassword) {
    sendDetailsToServer();
    // }else{
    //   alert("Passwords do not match");
    // }
  };

  // const sendToGoogle = () => {
  //   axios
  //     .post("http://localhost:5000/auth/google")
  //     .then((response) => {
  //       console.log(response);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };

  // const responseGoogle = (response) => {
  //   console.log(response);
  //   props.history.push("/userpage");
  // };

  const responseSuccessGoogle = (response) => {
    // console.log("test",response);
    axios({
      method: "POST",
      url: `${process.env.REACT_APP_BACKENDURL}/user/googlelogin`,
      data: { tokenId: response.tokenId },
    }).then((response) => {
      // console.log(response);
      localStorage.setItem("google_id",response.tokenId)
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
        onRequestClose={closeModal}
        className="Modal"
        overlayClassName="Overlay"
        // onRequestClose={props.clearSelectedOption}
        ariaHideApp={false}
        contentLabel="Selected Option"
        // contentLabel="Example Modal"
      >
        <h1>Login</h1>
        <a href="/">
          <i onClick={closeModal} className="closeBtn fas fa-times"></i>
        </a>
        <Form action="" className="form">
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
          {/* <FormGroup className="">
           <Label htmlFor="ConfirmPassword">Confirm Password</Label>
           <Input type="password"
           className=""
           id="confirmPassword"
           placeholder="Confirm your Password"
           value= {state.confirmPassword}
           onChange={handleChange}
           
           />

         </FormGroup> */}
          <Button color="danger" onClick={handleSubmitClick}>
            Login
          </Button>
        </Form>
        {/* <div className="" style={{display:state.successMessage? "block":"none"}} role="alert"> */}
        <div className="">{state.successMessage}</div>
        <div className="G_login">
          {/* <Button onClick={()=>sendToGoogle()}>Google</Button> */}
          <GoogleLogin
            clientId={process.env.REACT_APP_GOOGLECLIENTID}
            buttonText="Login mit Google"
            onSuccess={responseSuccessGoogle}
            onFailure={responseFailureGoogle}
            cookiePolicy={"single_host_origin"}
          />
        </div>
        <div className="mt-2">
          <span className="modalText">Don't you have an account? </span>
          <span className="loginText" onClick={() => redirectToRegister()}>
            Register
          </span>
        </div>
      </Modal>
    </div>
  );
};

export default withRouter(Login);
