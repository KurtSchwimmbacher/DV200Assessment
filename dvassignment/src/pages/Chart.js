import '../App.css';
import Navigation from '../components/Navigation';
import BentoGrid from '../components/BentoGrid';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



function Chart() {
  return (
    <>
      <Navigation />
      
      <Container>
        <Row>
            <Col>
            <h1 className='title'>Chart Page</h1>
            </Col>
        </Row>
        <BentoGrid />
      </Container>
    </>
  );
}

export default Chart;
