import React from 'react';
import { Col, Container, Row, } from 'react-bootstrap';

function Contact() {

    return (
        <Container>
            <Row>
                <Col>
                    <address>
                        <strong>Alfonso James</strong><br />
                    514 Boxelder Avenue<br />
                    Altamonte Spring, FL 32714<br />
                        <phone>(321) 262-7458</phone><br />
                        <a href="mailto:DPAlfonsoJames@gmail.com">DPAlfonsoJames@gmail.com</a>
                    </address>
                </Col>
            </Row>
        </Container>
    );
};

export default Contact;