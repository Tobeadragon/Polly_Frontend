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
      Vielen Dank für die Erstellung Ihrer Umfrage.
      </header>
      
      <div ClassName="DankeList">
      <div className="DankeMessage">Unter dem Link unten können Sie sich Ihre Umfrageergebnisse anzeigen lassen.</div>
      <Link to={`/antwort/${props.surveyId}`} target="_blank">
        <span style={{ display: "block",marginLeft:"20px",fontWeight:"bold"}}>{linkinfo}</span>
      </Link>
            
      <div className="DankeMessage">Zur Umfrageteilnahme kopieren Sie bitte den unteren Link und senden diesen an Ihre Kunden.</div>
      
      <input
        id="copy"
        type="text"
        value={linkinfo}
        style={{ width: "200px",height:"35px",paddingLeft:"5px", marginLeft:"20px" }}
      />
      <Button
        color="primary"
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
      
      <div className="DankeMessage">Sie können auch den QR Code unten an ihre Kunden weiterleiten.</div><br/>
      <QRCode value={linkinfo} style={{ marginLeft: "30px" }} />
      
      </div>
      
      </main>
    </div>
  );
};

export default Danke;
