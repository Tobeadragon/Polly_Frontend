// import axios from 'axios'
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";
import QRCode from "qrcode.react";

const Danke = (props) => {
  useEffect(() => {}, []);

  const linkinfo = `${process.env.REACT_APP_FRONTENDURL}/antwort/${props.surveyId}`;

  return (
    <div
      style={{
        border: "2px solid #ccc",
        marginBottom: 10,
        borderRadius: "5px",
        marginTop: 100,
      }}
    >
      <h1 className="text-center ">
        Vielen Dank für Ihre Teilnahme an dieser Umfrage!
      </h1>

      <h4>Klicken Sie auf eine Umfrage um sich die Ergebnisse anzeigen zu lassen.</h4>
      <Link to={`/antwort/${props.surveyId}`} target="_blank">
        <span style={{ display: "block" }}>{linkinfo}</span>
      </Link>
      <br />
      <h4>Zur Umfrageteilnahme senden Sie bitte den Link unten an ihre Kunden.</h4>
      <input
        id="copy"
        type="text"
        value={linkinfo}
        style={{ width: "400px" }}
      />
      <Button
        color="danger"
        onClick={(e) => {
          const copyText = document.querySelector("#copy");
          copyText.select();
          document.execCommand("copy");
        }}
      >
        Link kopieren
      </Button>
      <br />
      <h4>Sie können auch den QR Code unten an ihre Kunden weiterleiten.</h4>
      <QRCode value={linkinfo} style={{ marginLeft: "30px" }} />
    </div>
  );
};

export default Danke;
