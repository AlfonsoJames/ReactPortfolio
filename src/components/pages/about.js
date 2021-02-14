import React from 'react';
import { Col, Container, Row, } from 'react-bootstrap';
import Headshot from "../../assets/head.jpg"

console.log(Headshot);

function About() {

    return (
        <Container>
            <Row>
                <Container className="align-middle">
                    <img src={Headshot} />
                </Container>
            </Row>
            <Row>
                <Container className="col-auto align-middle">
                    <p >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis,
                    tenetur. Nam, facere natus sit vel quidem cum libero inventore at odio commodi ea expedita
                        minima culpa repudiandae. Voluptatum, et qui. <br />
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis repudiandae minus modi sit
                            corporis voluptates corrupti dolorum aut soluta incidunt accusamus, ipsa veniam aliquid ea
                        libero nemo explicabo vero iusto. <br />
                    </p>
                </Container>

            </Row>
        </Container>



    );
};

export default About;