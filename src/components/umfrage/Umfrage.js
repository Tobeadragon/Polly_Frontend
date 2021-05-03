import React, { useState } from "react";
// import Abstimmen from "../abstimmen/Abstimmen";
import Danke from '../danke/Danke'
import {withRouter} from 'react-router-dom'
import axios from "axios";
import {backend} from '../../config';
import {
  Button,
  Form,
  FormGroup,
  Input,
  Label,
  ListGroup,
  ListGroupItem,
} from "reactstrap";

const Umfrage = (props) => {
  const [display, setDisplay] = useState(false);
  const [umfrageIds, setUmfrageIds]=useState("")
  const [umfrageName, setUmfrageName] = useState("");
  const [fragen, setFragen] = useState([
    {
      // frage: "",
      // antwortA: "",
      // antwortB: "",
      // antwortC: "",
      // antwortD: "",
    },
  ]);

  

  const handleClickFrage = () => {
    let aktuellefragen = [...fragen];
    aktuellefragen.push({
      // frage: "",
      // antwortA: "",
      // antwortB: "",
      // antwortC: "",
      // antwortD: "",
    });
    setFragen(aktuellefragen); // erste frage daten zum frage Array speichern
  };

  const handleChangeUmfrage = (e) => {
    setUmfrageName(e.target.value);
  };

  const handleSubmit = (e) => {
    console.log(fragen)

    e.preventDefault();
    const neuFragen = fragen.map((item) => {
      return (item = {
        frage: item.frage,
        antworten: Object.values(item).slice(1),
        // antworten:item?Object.values(item).slice(1):
      });
    });
    const frage = {
      titel: umfrageName,
      fragen: neuFragen,
    };
    console.log(frage);

    let token = localStorage.getItem("user_token");
    console.log(token);
    const headers = {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    };

    axios.post(`${backend}/frage`, frage, {headers:headers}).then((res) => {
      console.log(res);
      console.log(res.data);
      setUmfrageIds(res.data.ufrageID)
            
      
    });
    
    console.log(umfrageIds)
  
    setDisplay(true);
  };
  const handleChange = (e) => {
    let fragenkopie = [...fragen];
    let frageindex = Number.parseInt(e.target.dataset.index);
    let aktuellefrageobject = fragenkopie[frageindex];
    aktuellefrageobject[e.target.name] = e.target.value;
    setFragen(fragenkopie);
    // setFragen({ ...fragen, [e.target.name]: e.target.value });
  };
  
  return (
    <div>
      {display ? (
        <Danke umfrageName={umfrageName} fragen={fragen} surveyId={umfrageIds} />
      ) : (
        <div className="container border p-5 my-5 rounded border-dark">
          <h1 className="bg-dark text-light p-2 text-center">Neue Umfrage</h1>
          <Form>
            <FormGroup>
              <Label for="frage">
                <h3>Umfrage Name</h3>
              </Label>
              <Input
                type="text"
                name="umfrageName"
                id="umfrage"
                onChange={handleChangeUmfrage}
                value={umfrageName}
              />
            </FormGroup>
            <div className="border p-4">
              {fragen.map((einefrage, index) => {
                return (
                  <div key={index}>
                    <FormGroup>
                      <Label for="frage">
                        <h5>Frage</h5>
                      </Label>
                      <Input
                        type="text"
                        name="frage"
                        id="frage"
                        data-index={index}
                        onChange={handleChange}
                        value={einefrage.frage}
                      />
                    </FormGroup>
                    <h5>Antwortmöglichkeiten</h5>
                    <ListGroup>
                      <ListGroupItem
                        color="secondary"
                        className="d-flex justify-content-center align-items-center"
                      >
                        <Button href="#" color="dark" className="mr-5 rounded">
                          A
                        </Button>
                        <Input
                          type="text"
                          name="antwortA"
                          data-index={index}
                          onChange={handleChange}
                          value={einefrage.antwortA}
                        />
                      </ListGroupItem>
                      <ListGroupItem
                        color="secondary"
                        className="d-flex justify-content-center align-items-center"
                      >
                        <Button href="#" color="dark" className="mr-5 rounded">
                          B
                        </Button>
                        <Input
                          type="text"
                          name="antwortB"
                          data-index={index}
                          onChange={handleChange}
                          value={einefrage.antwortB}
                        />
                      </ListGroupItem>
                      <ListGroupItem
                        color="secondary"
                        className="d-flex justify-content-center align-items-center"
                      >
                        <Button href="#" color="dark" className="mr-5 rounded">
                          C
                        </Button>
                        <Input
                          type="text"
                          name="antwortC"
                          data-index={index}
                          onChange={handleChange}
                          value={einefrage.antwortC}
                        />
                      </ListGroupItem>
                      <ListGroupItem
                        color="secondary"
                        className="d-flex justify-content-center align-items-center"
                      >
                        <Button href="#" color="dark" className="mr-5 rounded">
                          D
                        </Button>
                        <Input
                          type="text"
                          name="antwortD"
                          data-index={index}
                          onChange={handleChange}
                          value={einefrage.antwortD}
                        />
                      </ListGroupItem>
                    </ListGroup>
                  </div>
                );
              })}
              <Button className="my-3" onClick={handleClickFrage}>
                Möchten Sie eine neue Frage hinzufügen ?
              </Button>
            </div>
            <div className="text-right my-3">
              <Button onClick={handleSubmit} color="dark">
                Erstellen
              </Button>
            </div>
          </Form>
        </div>
      )}
    </div>
  );
};
export default withRouter(Umfrage);