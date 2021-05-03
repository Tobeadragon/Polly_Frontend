import React from "react";
import QRCode from "qrcode.react"

const TestList = () => {
    return(
    <div style={{margin:"100px"}}>
         <h1>QR Code test (QR Code for google.com)</h1>
         <QRCode value="https://google.com" />
    </div>
    )
    
 
};

export default TestList;