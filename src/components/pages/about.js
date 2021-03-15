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
                    <p >Having my spent most of my life as an entertainer and story-teller it is my goal to build engaging and intuiative web applications that facilitate interaction and encourage a pleasantly entertaining and memorable user experience.
                    </p>
                </Container>

            </Row>
        </Container>



    );
};

export default About;