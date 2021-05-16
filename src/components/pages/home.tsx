/* eslint-disable max-len */
import React from 'react';
import {
  Button,
  Col, Container, ListGroup, Row,
} from 'react-bootstrap';
import { Header } from '../common/header';
import { Footer } from '../common/footer';
import PostCard from '../post/list';
import PostPagination from '../post/pagination';
import PostDismissAll from '../post/dismiss';
import { connect } from "react-redux";


type AppProps = {
  posts: Array<any>
};

type AppState = {
  isLoaded?: boolean
};
class Home extends React.Component<AppProps,AppState> {
  
  constructor(props:AppProps) {
    super(props);
    this.state = {
      isLoaded:false
    }
  }

  componentDidMount() {
    this.setState({ isLoaded:true });
  }

  render() {

    const { posts } = this.props;
    const isOnLine = navigator.onLine;

    if (!this.state.isLoaded) {

      return <div>Loading...</div>;

    }else{

      return (
        <>
          <Header />
          <Container fluid className="main-wrapper p-0">
            <Row className="main-wrapper__contain p-0">
              <Col xs={3} md={4} lg={4} xl={3} className="main-wrapper__contain__navigation-bar p-0">
                <Container fluid className="main-wrapper__contain__navigation-bar__wrap p-0">
                  <ListGroup className={ 'main-wrapper__contain__navigation-bar__wrap__posts w-100' + ( !posts ? ' empty':'' ) }>
                    { 
                    
                      posts ? 
                      posts.map((item) => (
                        <PostCard {...item.data} />
                      )) :  
                        <div className="main-wrapper__contain__navigation-bar__wrap__posts__empty-message">
                          <h2>No post <span>From api</span></h2>
                        </div>
                    
                    }
                  </ListGroup>
                </Container>
                <Container className="main-wrapper__contain__navigation-bar__actions">
                  <Row>
                    <Col xs={7}>
                      <PostDismissAll />
                    </Col>
                    <Col xs={5} className="justify-content-end">
                      <PostPagination />
                    </Col>
                  </Row>
                </Container>
              </Col>
              <Col xs={9} md={8} lg={8} xl={9} className="main-wrapper__contain__detail p-0">
                <div className="main-wrapper__contain__detail__empty">
                  <div className="main-wrapper__contain__detail__empty__icon"></div>
                  <h2>
                    Select a <span className="emphasys">item</span>
                    <span className="subtitle">To view the detail</span>
                  </h2>
                </div>
              </Col>
            </Row>
          </Container>
          <Footer />
        </>
      );

    }

  }
}

const mapStateToProps = (state: { posts: any; }) => ({
  posts: state.posts
})

export default connect(mapStateToProps)(Home);