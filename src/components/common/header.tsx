import React from 'react';
import {
  Container,
} from 'react-bootstrap';

export const Header = () => (
  <>
    <header className="main-header d-flex p-2 p-sm-2 p-md-3 pr-0 justify-content-center">
      <Container className="main-header__wrap">
        <div className="main-header__wrap__logo" />
      </Container>
    </header>
  </>
);
