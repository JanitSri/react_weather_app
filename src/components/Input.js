import { Form, Button } from "react-bootstrap";


function Input(props){
  return (
    <Form className="mt-5" noValidate onSubmit={props.onSubmit}>
    <Form.Group controlId="validationCity">
      <Form.Control size="lg" type="text" placeholder="Enter City..." name="city" isInvalid={props.invalidInput}/>
      <Form.Control.Feedback type="invalid">
        Please provide a valid city.
      </Form.Control.Feedback>
    </Form.Group>
    <Button type="submit" className="mt-2">GET WEATHER</Button>
  </Form>
  );
}

export default Input;