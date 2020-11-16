import { Container } from 'react-bootstrap';
import logo from '../assets/error.gif'

function Loading(){
  
  return (
    <Container className="my-4">
      <h2>Try a different city!!!</h2>
      <img src={logo} alt="error" />     
    </Container>
  );
}

export default Loading;