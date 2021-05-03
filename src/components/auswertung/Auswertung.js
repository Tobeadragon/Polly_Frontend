
import axios from "axios";
import React,{useState, useEffect} from "react";
import "./Auswertung.css";
import AuswertungsList from "./AuswertungsList";
import {backend} from '../../config';

const Auswertung = (props) => {

  const [antworten, setAntworten] = useState([])
  // const [questions, setQuestions] = useState([])
  const [umfrageTitel, setUmfrageTitel] = useState([])
  
  
  
  const id = localStorage.getItem("umfrage_id")
  console.log(id)
  
 useEffect(() => {
  axios
  .get(`${backend}/antwort/${id}`)
  .then((response) => {
    console.log(response);
    // console.log(response.data)
    setAntworten(response.data)
    // setQuestions(response.data)
    setUmfrageTitel(response.data[0].umfrageTitel)
    
  })
  .catch((error) => {
    console.log(error);
  });

  // user
  // let token = localStorage.getItem("user_token");
  //   console.log(token);
  //   const headers = {
  //     "Content-Type": "application/json",
  //     authorization: `Bearer ${token}`,
  //   };

    // axios
    //   .get("http://localhost:5000/umfrage", { headers: headers })
    //   .then((response) => {
    //     console.log(response);
    //     console.log(response.data)
    //     setUmfrageTitel(response.data[0].titel)
        
        

                
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });

  // eslint-disable-next-line
 }, [])
  
 console.log(umfrageTitel)

//  const antwt = ["Auto", "Zug", "Auto", "Zug", "Zug", "Zug", "Flug", "Auto", "Zu Fuß", "Zu Fuß", "Zu Fuß", "Zu Fuß", "Zu Fuß", "Zu Fuß", "Zu Fuß"] 
//  const question = "was ist am besten?" 

//  const demoAnt = [{question:"xxx",antworten:["gut","besser"]},{question:"cccc",antworten:["ja","nein"]}]


  return (
    <div className="Auswertung">
      {umfrageTitel.length>0?<h3>Your Umfrage : {umfrageTitel}</h3>:<h3>There is no Survey result yet</h3>}
      
      <ul style={{listStyleType:"none"}}>
      {antworten.map((antw, index)=>(
      <li kex={index}>
        {/* <AuswertungsList ant={antw.question} que={antw.antworten}/> */}
        <AuswertungsList key={index} ant={antw.antworten} que={antw.question}/>
      </li>



      ))}
      
      
      </ul>

      
      
      
      
      
      
      
      
    </div>
  );
};

export default Auswertung;

