import React from 'react';
import { Col, Container, Row, } from 'react-bootstrap';
import Headshot from "../../assets/head.jpg"

console.log(Headshot);

function About() {

    return (
        <Container fluid>
            <Row>
                {/* <Col >
                    <img className="HS" src={Headshot} />
                </Col> */}
                <Col >
                    <p className="center p">Having spent most of my life as a live-performer and story-teller, it is my goal to build engaging and intuitive web applications that facilitate interaction and encourage an entertaining and memorable user experience. 
                    </p>
                    <iframe src="https://drive.google.com/file/d/1Rs8njhxd9MMtfMVPbDpyjHTpuvRwXtL9/preview" width="100%" height="100%"></iframe>
                </Col>
            </Row>
        </Container>



    );
};

export default About;