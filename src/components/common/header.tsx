import React from 'react';
import {
  Col,
  Container, Row,
} from 'react-bootstrap';

import { Switch } from 'pretty-checkbox-react';

export const Header = () => (
  <>
    <header className="main-header d-flex p-2 p-sm-2 p-md-3 pr-0 justify-content-center p-0">
      <Container fluid className="main-header__wrap">
        <Row>
          <Col xs={11} className="header__wrap__logo">
            <div className="main-header__wrap__logo__image" />
          </Col>
          <Col xs={1} className="main-header__wrap__theme-mode justify-content-end p-0">
            <Switch className="p-0 mr-0">Dark</Switch>
          </Col>
        </Row>
      </Container>
    </header>
  </>
);
