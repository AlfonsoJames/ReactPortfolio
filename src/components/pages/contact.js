import React from 'react';
import { Col, Container, Row, } from 'react-bootstrap';
import linked from '../../assets/Linked.png'

function Contact() {

    return (
        <Container>
            <Row>
                <Col>
                    <address>
                        <strong>Alfonso James</strong><br />
                        <phone>(321) 262-7458</phone><br />
                        <a href="mailto:DPAlfonsoJames@gmail.com">DPAlfonsoJames@gmail.com</a>
                    </address>
              
                    <a href="https://www.linkedin.com/in/alfonso-james-74354653/"><img className='link' src={linked}/></a>
                </Col>
                {/* <Col>
                    <a href=""><img className='link' src={linked}/></a>
                </Col> */}
            </Row>
        </Container>
    );
};

export default Contact;