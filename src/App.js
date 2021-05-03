import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Umfrage from "./components/umfrage/Umfrage";
import Navbar from "./components/nav/Navbar";
import Navbar2 from './components/nav/Navbar2'
import Main from "./components/main/Main";
// import Danke from "./components/danke/Danke";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Footer from "./components/footer/Footer";
import UserPage from "./components/userpage/UserPage";
import NotFound from "./components/NotFound";
import Auswertung from "./components/auswertung/Auswertung";
import Home from "./components/home/Home";
import SurveyTest from "./components/surveytest/SurveryTest"
import TestList from './components/surveytest/TestList'
import UmfrageTest from './components/umfrage/UmfrageTest'


function App(props) {
  const [isAuth, setIsAuth] = useState(false);

  return (
    <div>
      <Router>
        
                 
            {isAuth?<Navbar2 setOutApp={setIsAuth}/>:<Navbar />}
            
         
        
        
        <Switch>
          <Route exact path="/">
           {isAuth? <Redirect to ="/userpage" />:<Main />}
          </Route>
          


          <Route exact path="/home">
            <Home />
          </Route>

          <Route exact path="/umfrage">            
            {isAuth?<Umfrage />:<Main />}
            
          </Route>
          
          <Route exact path="/auswertung">
            {isAuth?<Auswertung />:<Main />}
            
            
          </Route>

          {/* <Route exact path="/danke">
            <Danke />
          </Route> */}

          <Route exact path="/surveytest">
            <SurveyTest />
          </Route>

          <Route exact path="/userpage">
            {isAuth?<UserPage/>:<Main />}
            
          </Route>

          {isAuth?
          <Route exact path="/userpage">
          <UserPage />
          </Route>
          :
          <Route exact path="/">
          <Main />
          </Route>
        }

          <Route exact path="/login">
            <Login setOutApp={setIsAuth} />
          </Route>

          <Route exact path="/signup">
            <Signup setOutApp={setIsAuth} />
          </Route>

          <Route exact path={"/antwort/:id"} >
            <SurveyTest />
            </Route>                         
            <Route path="/testlist">
            <TestList />
          </Route>

          <Route path="/umfragetest">
            <UmfrageTest />
          </Route>

          <Route path="*">
            <NotFound />
          </Route>
          
          

        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
