import React, {Component}  from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { connect } from "react-redux";
import { changeTheme, showMenu } from '../../store/actions/';
import { Switch } from 'pretty-checkbox-react';

type HeaderProps = {
  theme: string,
  changeTheme: Function,
  showMenu: Function
}

type HeaderState = {
  isLoading: boolean
}

class HeaderComponent extends Component<HeaderProps, HeaderState> {

  constructor (props:HeaderProps) {
      super (props);
      this.state = {
          isLoading: false
      }
  }

  setNavMenu = (e: any)=>{
    this.props.showMenu();
  }

  setTheme = (e: any)=>{
    this.props.changeTheme({ theme: e.target.checked ? 'dark' : 'light' });
  }

  render(){

    const { theme } = this.props;

    return(

      <>
        <header className="main-header d-flex p-2 p-sm-2 p-md-3 pr-0 justify-content-center p-0">
          <Container fluid className="main-header__wrap">
            <Row>
              <Col xs={1} className="main-header__wrap__menu">
                <Button variant="outline-dark" className="main-header__wrap__menu--menu" onClick={this.setNavMenu}></Button>
              </Col>
              <Col xs={9} md={11} className="header__wrap__logo">
                <div className="main-header__wrap__logo__image" />
              </Col>
              <Col xs={2} md={1} className="main-header__wrap__theme-mode justify-content-end p-0">
                <Switch className="p-0 mr-0" color={ theme == 'dark' ? 'success' : 'primary' } onClick={this.setTheme}>Dark</Switch>
              </Col>
            </Row>
          </Container>
        </header>
      </>

    )

  }

};


const mapStateToProps = (state:any) => ({
  theme: state.theme
})

export default connect(mapStateToProps,{ changeTheme, showMenu })(HeaderComponent);