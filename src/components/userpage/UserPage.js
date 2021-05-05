import React, { useState,useEffect } from "react";
import { withRouter,Link} from "react-router-dom";
import "./UserPage.css";
import { Button } from "reactstrap";
import axios from "axios";
// import {backend} from '../../config'
// import UserPageList from "./UserPageList";

const UserPage = (props) => {
  
  const [umfragen,setUmfragen] = useState([])

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
        console.log(response.data)
        // setUmfrageTitel(response.data[0].titel)
        // setumfrageId(response.data[0]._id)
        setUmfragen(response.data)

                
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

     

  const GoCreate = () => {
    props.history.push("./umfrage");
  };

  
  const name = localStorage.getItem("user_name")
  console.log(name)
  
  console.log(umfragen)
  
  
  // const umfrageDemo =
  // [
    
  //   {index:0,title:"Elham Umfrage", _id:"6083cec026d9b59b5a1615b2"},
  //   {index:1,title:"Elham Umfrage2", _id:"608400a7cbc5fc2bbb7eba68"}
  // ]

  const saveUmfrageId=(id)=>{
    localStorage.setItem("umfrage_id",id )
  }

  

  return (
    <div className="UserPage">
      <h1>Welcome to {name} page</h1>
      {umfragen.length>0?<h2>click the survey below to see the result</h2>:<h2>Please create your survey</h2>}
      
      <ul style={{listStyleType:"none"}}>
      {umfragen.map((umf, index)=>(
        
        <Link to="/auswertung" kex={index}>
        <li onClick={()=>saveUmfrageId(umf._id)} key={index}><h3>{umf.titel}</h3><button>Löschen</button></li>
        {/* <li  key={index}>{umf.title}</li> */}
        </Link>
      ))}
      </ul>




      {/* <UserPageList titel={umfrageTitel} id={umfrageId} /> */}
            
      <Button color="danger" onClick={() => GoCreate()}>
        Create new Survey
      </Button>
    </div>
  );
};

export default withRouter(UserPage);
