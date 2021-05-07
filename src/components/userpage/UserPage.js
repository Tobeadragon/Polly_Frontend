import React, { useState, useEffect } from "react";
import { withRouter, Link } from "react-router-dom";
import "./UserPage.css";
import { Button } from "reactstrap";
import axios from "axios";

const UserPage = (props) => {
  const [umfragen, setUmfragen] = useState([]);

  useEffect(() => {
    let token = localStorage.getItem("user_token");
    console.log(token);
    const headers = {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    };

    axios
      .get(`${process.env.REACT_APP_BACKENDURL}/umfrage`, { headers: headers })
      .then((response) => {
        console.log(response);
        console.log(response.data);

        setUmfragen(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const GoCreate = () => {
    props.history.push("./umfrage");
  };

  const name = localStorage.getItem("user_name");
  console.log(name);

  console.log(umfragen);

  const saveUmfrageId = (id) => {
    localStorage.setItem("umfrage_id", id);
  };

  return (
    <div className="UserPage">
      <h1>Welcome to {name}'s page</h1>
      {umfragen.length > 0 ? (
        <h2>Klicken Sie auf die Umfrage, um sich die Ergebnisse anzeigen zu lassen.</h2>
      ) : (
        <h2>Erstellen Sie ihre Umfrage</h2>
      )}

      <ul style={{ listStyleType: "none", color:"black" }}>
        {umfragen.map((umf, index) => (
          <Link to="/auswertung" kex={index}>
            <li onClick={() => saveUmfrageId(umf._id)} key={index}>
              <h5>{umf.titel}</h5>
            </li>
          </Link>
        ))}
      </ul>

      <Button color="primary" onClick={() => GoCreate()}>
        Umfrage erstellen
      </Button>
    </div>
  );
};

export default withRouter(UserPage);
