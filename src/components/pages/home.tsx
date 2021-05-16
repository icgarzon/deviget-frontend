/* eslint-disable max-len */
import React from 'react';
import {
  Col, Container, ListGroup, Row,
} from 'react-bootstrap';
import { Header } from '../common/header';
import { Footer } from '../common/footer';
import { PostCard } from '../post/list';
import { connect } from "react-redux";
import { getData } from '../../store/actions/';



type AppProps = {
  posts: Array<any>,
  getData: Function
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
    this.props.getData();
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
                <ListGroup className="main-wrapper__contain__navigation-bar__posts w-100">
                  {posts.map((item) => (
                    <ListGroup.Item className="main-wrapper__contain__navigation-bar__posts__items p-0">
                      <PostCard {...item.data} />
                    </ListGroup.Item>
                  ))}
                </ListGroup>
                <Container className="main-wrapper__contain__navigation-bar__actions w-100">
                    Options
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

export default connect(mapStateToProps,{ getData })(Home);