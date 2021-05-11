import React, { useState, useEffect } from "react";
import { withRouter, Link } from "react-router-dom";
import "./UserPage.css";
import { Button } from "reactstrap";
import axios from "axios";
import { FaTrash } from 'react-icons/fa';

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
  }, [umfragen]);

  const GoCreate = () => {
    props.history.push("./umfrage");
  };

  const deleteUmfrage = (id) => {
    console.log("click", id)
    let token = localStorage.getItem("user_token");
    console.log(token);
    const headers = {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    };
    axios
    .delete(`${process.env.REACT_APP_BACKENDURL}/umfrage/${id}`, { headers: headers })
    .then((response) => {
      console.log(response);
      console.log(response.data);
      // setUmfragen(umfragen.filter((item) => item.id !== umfragen.id))
    })
    .catch((error) => {
      console.log(error);
    });
  }

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
          <div className="UmfrageListTitel">Ihre Umfragen</div>
          <ul className="UmfrageList">
            {umfragen.map((umf, index) => (
              <>
              <Link to="/auswertung" kex={index} className="UserUmfrageList">
                <li className="UmfrageLi" onClick={() => saveUmfrageId(umf._id)} key={index}>
                  <h5>{umf.titel}</h5>
                </li>
              </Link>  
              <span onClick={()=>deleteUmfrage(umf._id)}><FaTrash/></span>  
              </>       
            ))}
          </ul>
        </div>
        <div class="d-flex justify-content-center">
        <Button
          color="primary"
          onClick={() => GoCreate()}
          className="UserButton"
          
        >
          Neue Umfrage erstellen
        </Button>
        <p>Klicken Sie auf<FaTrash/>um Ihre Umfrage zu löschen.</p>
        </div>
      </main>
    </div>
  );
};

export default withRouter(UserPage);
