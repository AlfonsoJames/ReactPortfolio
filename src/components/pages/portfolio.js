import React, { useEffect, useState } from 'react';
import { Carousel, Container } from 'react-bootstrap';
import TT5 from '../../assets/TT5sh.png';
import WD from '../../assets/WDsh.png';
import MH from '../../assets/MHsh.png';
import CA from '../../assets/CAsh.png';
import ReactLoading from "react-loading";


function Portfolio() {
  const [done, setDone] = useState(undefined);

  useEffect(() => {
    setTimeout(() => {
      setDone(true);
    }, 1500);
  }, []);

  return (
    <>
      {!done ? (
        <ReactLoading
          className='loader'
          type={"bars"}
          color={"white"}
          height={100}
          width={100}
        />
      ) : (
        <Carousel >
          <Carousel.Item>
            <a href="https://memeheim.herokuapp.com">
              <img
                className="d-block w-100 PP"
                src={MH}
                alt="Memeheim Web Application"
              />
            </a>
            {/* <Carousel.Caption>
              <h3>Memeheim</h3>
              <p>Meme generator and search Application</p>
              <ul>
                <li>React Bootstrap</li>
                <li>Express</li>
                <li>Mongoose</li>
                <li>Node.js</li>
              </ul>
            </Carousel.Caption> */}
          </Carousel.Item>
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
            <a href="https://crushitapp.herokuapp.com/">
              <img
                className="d-block w-100 PP"
                src={CA}
                alt="Crush It Mobile Workout Planner"
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
        </Carousel>
      )}
    </>
  );
};

export default Portfolio;