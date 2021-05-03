import React from 'react'
import {Route,Redirect} from 'react-router-dom'

// const Auth = ({isAuth: isAuth, component: Component, ...rest}) => {
    const Auth = ({isAuth,component: Component, ...rest}) => {
    return (
        <Route
         {...rest}
        render={
            (props)=> isAuth ?
            (<Component {...props} />) 
            : (<Redirect to={{pathname:"/"}}/>)
        }



        // render={(props) => {
        //     if(isAuth===true){
        //         return <Component />;
        //     }else{
        //         return (
        //             <Redirect to={{pathname:"/", state: {from:props.location}}} />
        //         )   
        //     }
        // }}
        />
        
    );
}

export default Auth;
