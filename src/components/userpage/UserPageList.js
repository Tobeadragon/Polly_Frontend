import React from 'react'
import {withRouter, Link} from "react-router-dom";
import "./UserPageList.css"
// import axios from 'axios'
const UserPageList=(props)=>{
   const saveUmfrageId=()=>{
     localStorage.setItem("umfrage_id", props.id)
   }

    return (
        <div>
            <Link to="/auswertung" >
            <div onClick={saveUmfrageId}className="UserPageList">{props.titel}</div>
            </Link>
        </div>
    )
}

export default withRouter(UserPageList)
