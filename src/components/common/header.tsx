import React from 'react';
import {
  Container,
} from 'react-bootstrap';

// eslint-disable-next-line import/prefer-default-export
export const Header = () => (
  <>
    <header className="main-header d-flex p-2 p-sm-2 p-md-3 pr-0 justify-content-center">
      <Container className="main-header__wrap">
        <div className="main-header__wrap__logo" />
      </Container>
    </header>
  </>
);
