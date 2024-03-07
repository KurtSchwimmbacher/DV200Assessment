import '../App.css';
import Navigation from '../components/Navigation';
import BentoGrid from '../components/BentoGrid';
import Container from 'react-bootstrap/Container';



function Chart() {
  return (
    <>
      <Navigation />
      <h1>Chart Page</h1>
      <Container>
        <BentoGrid />
      </Container>
    </>
  );
}

export default Chart;
