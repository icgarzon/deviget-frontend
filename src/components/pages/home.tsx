/* eslint-disable max-len */
import React from 'react';
import {
  Col, Container, Row,
} from 'react-bootstrap';
import { Header } from '../common/header';
import { Footer } from '../common/footer';

class Home extends React.Component {
  constructor(props: {} | Readonly<{}>) {
    super(props);
    this.state = { };
  }

  render() {
    return (
      <>
        <Header />
        <Container fluid className="main-wrapper p-0">
          <Row className="main-wrapper__contain p-0">
            <Col xs={3} className="main-wrapper__contain__navigation-bar">1</Col>
            <Col xs={9} className="">
              Not selected yet
            </Col>
          </Row>
        </Container>
        <Footer />
      </>
    );
  }
}

export default Home;
