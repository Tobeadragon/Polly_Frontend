import axios from 'axios'
import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { Button } from "reactstrap";
import {withRouter} from 'react-router-dom'
import Danke2 from '../../components/danke/Danke2'
import {backend} from '../../config';

const ServeryTest = (props) => {

    const {id} =  useParams()  
    

    const [antwortOption, setAntwortOption] = useState([])
    const [arrays,setArrays] = useState([])
    const [display,setDisplay]=useState(false)
    
    // const [ausgewaehlt, setAusgewaehlt] = useState([])

       useEffect(() => {
          
         
       

    //    axios.get(`http://localhost:5000/umfrage/${id}`)
    //    axios.get(`http://localhost:5000/umfrage/"${id}"`)
       axios.get(`${backend}/umfrage/${id}`)
    
       .then((response)=>{

        console.log(response);
        console.log(response.data)
        console.log(response.data.antworten)
        setAntwortOption(response.data)
        // console.log(response.data[0].antworten)
        
           
       })
       .catch((error)=>{
           console.log(error);
       })
    
// eslint-disable-next-line
    }, [])
    //    console.log(antwortOption)

    
    
    
    
    const arr =[]
    const antwortObjekt =(antwort,frageID)=>{
      
    //   setArrays((arrys)=>arrays.push({frageID,antwort}))
        // arrays.push({frageID,antwort})
        arr.push({frageID,antwort})
        const arr2 = arr.slice(-1)
      
        setArrays(arr2)
    } 
    console.log(arrays)
    
    // arrays = arrays.slice(-1)[0]
    const payload={antworten:arrays}
    console.log(payload)
    

    // const payload={antworten:arr1}
    //   console.log(payload)

    //    const payload ={
    //     "antworten":[
    //        {"frageID": "6083cec026d9b59b5a1615b3","antwort" : "Zu Fuß" },
    //        {"frageID": "6083cec026d9b59b5a1615b4","antwort":"Japanisch"},
    //        ]
    //     }
       
        const surveySend =(e)=>{

       axios.post(`${backend}/antwort`,payload)
       .then((response)=>{
           console.log(response)
       })
       .catch((error)=>{
           console.log(error)
       })

       setDisplay(true);
       
    }
    
    

     return (
        <div style={{margin:"100px"}}>
        {display?(< Danke2 />):(   
             
        <ul style={{listStyleType:"none"}}>
            <h2>Survey request from </h2>
            <h2>Please select your answer</h2>
        <form action="" onSubmit={surveySend}>
        {antwortOption.map((frg, indexfrage)=>{
            return <li style={{fontSize:"20px"}} key={indexfrage}>{frg.frage} {frg.antworten.map((antwort, indexantwort)=>{
            
            return <div  key={indexantwort}>
                
                    <p style={{display:"none"}}>{frg._id}</p>
                {/* <label >{ant}</label> */}
                <input id={frg._id} type="radio" name={indexfrage} value={antwort} onChange={()=>antwortObjekt(antwort,frg._id)}/>{antwort}
                
                
                </div>})} </li>
               
            
        })} 
        <br/>
        <Button color="danger">
        Send your answer
      </Button>
        </form>
        </ul>
        
        )}
        </div>
    )
}

export default withRouter(ServeryTest)
