import React, { useEffect, useState } from 'react';
import { Col, Container, Row, } from 'react-bootstrap';
import linked from '../../assets/Linked.png'
import ReactLoading from "react-loading";

function Contact() {
    const [done, setDone] = useState(undefined);

    useEffect(() => {
        setTimeout(() => {
            setDone(true);
        }, 1500);
    }, []);

    return (
        <Container className="h-100 contact">
             {!done ? (
                <ReactLoading
                    className='loader'
                    type={"bars"}
                    color={"white"}
                    height={100}
                    width={100}
                />
            ) : (
            <Row className="align-items-center h-100">
                <Col align="center">
                    <address >
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
                )}
        </Container>
    );
};

export default Contact;