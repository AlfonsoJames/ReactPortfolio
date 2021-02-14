import React from 'react';
import { Col, Container, Row, } from 'react-bootstrap';
import Headshot from "../../assets/head.jpg"

console.log(Headshot);

function About() {

    return (
        <Container>
            <Row>
                
                    <img className="col-5" src={Headshot} height="25%" width="auto"/>
               
                    <p className="center col-7">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis,
                    tenetur. Nam, facere natus sit vel quidem cum libero inventore at odio commodi ea expedita
                        minima culpa repudiandae. Voluptatum, et qui. <br />
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis repudiandae minus modi sit
                            corporis voluptates corrupti dolorum aut soluta incidunt accusamus, ipsa veniam aliquid ea
                        libero nemo explicabo vero iusto. <br />
                    </p>
             
            </Row>
        </Container>



    );
};

export default About;