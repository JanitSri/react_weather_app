import { Form, Button } from "react-bootstrap";


function Input(props){
  return (
    <Form noValidate onSubmit={props.onSubmit}>
    <Form.Group controlId="validationCity">
      <Form.Label>City</Form.Label>
      <Form.Control type="text" placeholder="Enter City..." name="city" isInvalid={props.invalidInput}/>
      <Form.Control.Feedback type="invalid">
        Please provide a valid city.
      </Form.Control.Feedback>
    </Form.Group>
    <Button type="submit">Submit form</Button>
  </Form>
  );
}

export default Input;