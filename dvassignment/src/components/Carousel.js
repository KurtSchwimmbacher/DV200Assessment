import Carousel from 'react-bootstrap/Carousel';
import "../App.css"

// import images
import liesOfP from "../assets/LiesOfP.jpg";
import BgThree from "../assets/Bg3.png";
import eldenRing from "../assets/EldenRing.jpg";

function CarouselBento(props) {
    


    let infoObj = [
        {
            id:1,
            image: eldenRing,
            title: "Elden Ring",
            desc: "Elden Ring is an open world souls-like."
        },
        {
            id:2,
            image: BgThree,
            title: "Baldur's Gate 3",
            desc: "Baldur's Gate 3 is a top-down turn based rpg."
        },
        {
            id:3,
            image: liesOfP,
            title: "Lies of P",
            desc: "Lies of P is a souls-like inspired by the story of Pinocchio."
        }
    ]




  return (
    <Carousel data-bs-theme= "dark">


    {infoObj.map(item => (
        <Carousel.Item key={item.id}>
        <img
            className="d-block w-100" 
            src={item.image}
            alt={item.title}
        />
        <Carousel.Caption >
            <h3 className='car-title' style={{color: 'white'}}>{item.title}</h3>
            <p className='car-capt' style={{color: 'white'}}>{item.desc}</p>
        </Carousel.Caption>
        </Carousel.Item>
     ))}


    </Carousel>
  );
}

export default CarouselBento;