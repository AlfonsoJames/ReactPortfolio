import React from 'react';
import { Carousel } from 'react-bootstrap';
import TT5 from '../../assets/TT5sh.png';
import WD from '../../assets/WDsh.png';
import MH from '../../assets/MHsh.png';



function Portfolio() {

  return (
    <Carousel className="squeeze">
      <Carousel.Item>
        <a href="https://alfonsojames.github.io/Travelers-Top-5/">
          <img
            className="d-block w-100 PP"
            src={TT5}
            alt="Traveler's Top 5 Web Application"
          />
        </a>
      </Carousel.Item>
      <Carousel.Item>
        <a href="https://alfonsojames.github.io/AJHW6/">
          <img
            className="d-block w-100 PP"
            src={WD}
            alt="Weather Dashboard Web Application"
          />
        </a>
      </Carousel.Item>
      <Carousel.Item>
        <a href="https://memeheim.herokuapp.com">
          <img
            className="d-block w-100 PP"
            src={MH}
            alt="Memeheim Web Application"
          />
        </a>
      </Carousel.Item>
    </Carousel>
  );
};

export default Portfolio;