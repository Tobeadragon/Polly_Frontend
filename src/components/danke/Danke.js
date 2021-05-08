// import axios from 'axios'
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";
import QRCode from "qrcode.react";
import "./Danke.css"

const Danke = (props) => {
  useEffect(() => {}, []);

  const linkinfo = `${process.env.REACT_APP_FRONTENDURL}/antwort/${props.surveyId}`;

  return (
    <div>   
     <main className="Danke">
      <header className="DankeHeader">
        Vielen Dank für Ihre Teilnahme an dieser Umfrage!
      </header>
      <div ClassName="DankeList">
      <h4>Zur Umfrageteilnahme senden Sie bitte den Link unten an ihre Kunden.</h4>
      <Link to={`/antwort/${props.surveyId}`} target="_blank">
        <span style={{ display: "block" }}>{linkinfo}</span>
      </Link>
      <br />
      <h4>Zur Umfrageteilnahme senden Sie bitte den Link unten an ihre Kunden.</h4>
      <input
        id="copy"
        type="text"
        value={linkinfo}
        style={{ width: "400px",height:"35px" }}
      />
      <Button
        color="danger"
        onClick={(e) => {
          const copyText = document.querySelector("#copy");
          copyText.select();
          document.execCommand("copy");
        }}
        style={{marginLeft:"10px"}}
      >
        Link kopieren
      </Button>
      <br />
      <h4>Sie können auch den QR Code unten an ihre Kunden weiterleiten.</h4><br/>
      <QRCode value={linkinfo} style={{ marginLeft: "30px" }} />
      
      </div>
      </main>
    </div>
  );
};

export default Danke;
