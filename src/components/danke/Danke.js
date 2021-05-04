// import axios from 'axios'
import React, {  useEffect } from 'react'
import {Link} from 'react-router-dom'
import { Button } from "reactstrap";
import QRCode from "qrcode.react"
// import Umfrage from '../umfrage/Umfrage'

const Danke =(props)=> {
  
  useEffect(() => {
    // console.log(props.surveyId)
    
    


  }, [])
  
  
  const linkinfo = `${process.env.REACT_APP_FRONTENDURL}/antwort/${props.surveyId}`

     
  

  
    return (
      <div style ={{border: '2px solid #ccc', marginBottom:10, borderRadius:"5px", marginTop:100,}}>
        <h1 className="text-center ">Vielen Dank für Ihre Teilnahme an dieser Umfrage!</h1>
        {/* <p>{props.surveyId}</p> */}

        
        <h4>Please click and check your Survey</h4>
        <Link to={`/antwort/${props.surveyId}`} target="_blank">
             
             
             {/* <input type="text" value={linkinfo}/> */}
             <span style={{display:"block"}}>{linkinfo}</span>
            </Link>
       <br/>
       <h4>Please send below link to your customer</h4>
        <input id = "copy" type="text" value={linkinfo} style={{width:"400px"}}/> 
        <Button color="danger" onClick={(e)=> 
        {        
        const copyText = document.querySelector("#copy");
        copyText.select();
        document.execCommand("copy");
        }}>
        Copy the link
      </Button>   
      <br/>
      <h4>You can also send below QR code</h4>
      <QRCode value={linkinfo} id="qrcode" />
      <Button color="danger" onClick={(e)=> 
        {        
        const copyText = document.querySelector("#qrcode");
        copyText.select();
        document.execCommand("copy");
        }}>
        Copy the QR Code
      </Button>

      </div>
    )
  }

  export default Danke
