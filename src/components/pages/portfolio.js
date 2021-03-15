import React from 'react';
import { Carousel } from 'react-bootstrap';
import TT5 from '../../assets/TT5sh.png';
import WD from '../../assets/WDsh.png';
import MH from '../../assets/MHsh.png';
import { Link } from 'react-router-dom';


function Portfolio() {

  return (
    <Carousel className="squeeze">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={TT5}
          alt="Traveler's Top 5 Web Application"
        />
        <Carousel.Caption>
          <Link to="https://alfonsojames.github.io/Travelers-Top-5/">
            <h3>Traveler's Top 5</h3>
          </Link>

        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={WD}
          alt="Weather Dashboard Web Application"
        />

        <Carousel.Caption>
          <Link to="https://alfonsojames.github.io/AJHW6/">
            <h3>Weather Dashboard</h3>
          </Link>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={MH}
          alt="Memeheim Web Application"
        />
        <Carousel.Caption>
          <Link to="https://memeheim.herokuapp.com">
            <h3>Memeheim - Home of the Meme-Lords</h3>
          </Link>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Portfolio;