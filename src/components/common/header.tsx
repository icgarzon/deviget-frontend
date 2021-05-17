import React, {Component}  from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { connect } from "react-redux";
import { changeTheme } from '../../store/actions/';
import { Switch } from 'pretty-checkbox-react';

type HeaderProps = {
  changeTheme: Function,
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

  setTheme = (e: any)=>{
    this.props.changeTheme({ theme: e.target.checked ? 'dark' : 'light' });
  }

  render(){

    console.log(this.props);

    return(

      <>
        <header className="main-header d-flex p-2 p-sm-2 p-md-3 pr-0 justify-content-center p-0">
          <Container fluid className="main-header__wrap">
            <Row>
              <Col xs={11} className="header__wrap__logo">
                <div className="main-header__wrap__logo__image" />
              </Col>
              <Col xs={1} className="main-header__wrap__theme-mode justify-content-end p-0">
                <Switch className="p-0 mr-0" onClick={this.setTheme}>Dark</Switch>
              </Col>
            </Row>
          </Container>
        </header>
      </>

    )

  }

};


const mapStateToProps = (state:any) => ({

})

export default connect(mapStateToProps,{ changeTheme })(HeaderComponent);