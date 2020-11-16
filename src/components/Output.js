import { Container } from 'react-bootstrap';

function Output(props){
  return (
    <Container className="my-4">
      <h2>Output</h2>
      {props.outputData != null && JSON.stringify(props.outputData, null, 2)}
    </Container>    
  );
}

export default Output;