import React from "react";
import { useHistory } from "react-router";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";

const Abstimmen = ({ umfrageName, fragen }) => {
  const history = useHistory();
  const onChangeValue = (e) => {
    console.log(e.target.value);
  };

  const handleClickAbstimmen = (e) => {
    e.preventDefault();    
    history.push('/umfrage')
  }
  return (
    <div className="container">
      <h3 className="text-center">{umfrageName.toUpperCase()}</h3>
      {fragen.map((frage, index) => (
        <div key={index}>
          <div>
            <h4>{frage.frage}</h4>
            <p>Wähle eine Antwort:</p>
            <Form>
              <FormGroup onChange={onChangeValue} tag="fieldset">
                <FormGroup check>
                  <Label check>
                    <Input type="radio" name="antwort" value={frage.antwortA} />{" "}
                    {frage.antwortA}
                  </Label>
                </FormGroup>
                <FormGroup check>
                  <Label check>
                    <Input type="radio" name="antwort" value={frage.antwortB} />{" "}
                    {frage.antwortB}
                  </Label>
                </FormGroup>
                <FormGroup check disabled>
                  <Label check>
                    <Input type="radio" name="antwort" value={frage.antwortC} />{" "}
                    {frage.antwortC}
                  </Label>
                </FormGroup>
                <FormGroup check disabled>
                  <Label check>
                    <Input type="radio" name="antwort" value={frage.antwortD} />{" "}
                    {frage.antwortD}
                  </Label>
                </FormGroup>
              </FormGroup>
              <hr></hr>
            </Form>
          </div>
        </div>
      ))}
      <Button onClick={handleClickAbstimmen}>Abstimmen</Button>
    </div>
  );
};

export default Abstimmen;