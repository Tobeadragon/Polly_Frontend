import axios from "axios";
import React, { useState, useEffect } from "react";
import "./Auswertung.css";
import AuswertungsList from "./AuswertungsList";

const Auswertung = (props) => {
  const [antworten, setAntworten] = useState([]);
  // const [questions, setQuestions] = useState([])
  const [umfrageTitel, setUmfrageTitel] = useState([]);

  const id = localStorage.getItem("umfrage_id");
  console.log(id);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BACKENDURL}/antwort/${id}`)
      .then((response) => {
        console.log(response);
        // console.log(response.data)
        setAntworten(response.data);
        // setQuestions(response.data)
        setUmfrageTitel(response.data[0].umfrageTitel);
      })
      .catch((error) => {
        console.log(error);
      });
      // eslint-disable-next-line
  }, []);

  console.log(umfrageTitel);

  return (
    <div className="Auswertung">
      {umfrageTitel.length > 0 ? (
        <h3>Your Umfrage : {umfrageTitel}</h3>
      ) : (
        <h3>Wir haben noch keine Umfrage Auswertungen für Sie.</h3>
      )}

      <ul style={{ listStyleType: "none" }}>
        {antworten.map((antw, index) => (
          <li kex={index}>
            <AuswertungsList
              key={index}
              ant={antw.antworten}
              que={antw.question}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Auswertung;
