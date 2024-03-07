import '../App.css';
import Navigation from '../components/Navigation';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Carousel from "../components/Carousel";
import Buttons from '../components/Buttons';
import BookingButtons from "../components/BookingButtons";
import Maps from "../components/Maps";

// import images
import controller from "../assets/controller.svg";
import trophy from "../assets/trophy.svg";

function Home() {
  return (
    <>
      <Navigation />
      <Carousel className='carousel' />
      <Container className='page-content'>
        <Row>
            <Col>
            <h1 className='title'>Home Page</h1>
            <p className='sub-title'>Welcome to the Game Store Web Page!</p>
            </Col>
        </Row>
        <Row>
            <Col className='btn-col'>
                <Buttons className='cta-button' />
            </Col>
        </Row>
        <Row className='icon-con'>
            <Col>
                <img src={controller} className='controller-icon'></img>
                <p className='icon-sub'>We host in house LAN Sessions!</p>
                <BookingButtons className='booking-btn' text={"Book Now!"} />
            </Col>
            <Col>
                <img src={trophy} className='trophy-icon'></img>
                <p className='icon-sub'>We host monthly Gaming Tournaments!</p>
                <BookingButtons className='booking-btn' text={"Book Now!"} />
            </Col>
        </Row>

        <Row>
          <Col></Col>
        </Row>

        <Row className='map-con'>
          <Col>
          <h3 className='map-title'>Where to find us!</h3>
          <Maps />
          </Col>
        </Row>
      </Container>
      
    <footer>
      <h3>GameStore</h3>
      <h5>Our partners:</h5>
      <ul>
      
        <li>Razer</li>
        <li>NVidia</li>
        <li>Radeon</li>
      </ul>
    </footer>
      
    </>
  );
}

export default Home;
