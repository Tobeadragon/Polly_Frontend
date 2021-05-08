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
    <div>
      <main className="UserPage">
        <header className="UserHeader">Wilkommen {name}</header>
        <div className="SubHeader">
          {umfragen.length > 0 ? (
            <p>Klicken Sie auf die Umfrage, um sich die Ergebnisse anzeigen zu lassen.</p>
          ) : (
            <p>Erstellen Sie ihre Umfrage</p>
          )}
        </div>

        <div >
          <div className="UmfrageListTitel">Ihre erstellte Umfragen Liste</div>
          <ul className="UmfrageList">
            {umfragen.map((umf, index) => (
              <Link to="/auswertung" kex={index} className="UserUmfrageList">
                <li onClick={() => saveUmfrageId(umf._id)} key={index}>
                  <h5>{umf.titel}</h5>
                </li>
              </Link>
            ))}
          </ul>
        </div>
        <Button
          color="primary"
          onClick={() => GoCreate()}
          style={{marginLeft:"20px"}}
        >
          Umfrage erstellen
        </Button>
      </main>
    </div>
  );
};

export default withRouter(UserPage);
