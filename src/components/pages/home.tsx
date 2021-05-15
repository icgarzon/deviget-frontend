/* eslint-disable max-len */
import React from 'react';
import {
  Col, Container, Row,
} from 'react-bootstrap';
import { Header } from '../common/header';
import { Footer } from '../common/footer';

import store from '../../store';
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

    const { posts } = this.props; console.log('Props', this.props);
    const isOnLine = navigator.onLine;

    if(posts){
      console.log('isOnLine', isOnLine);
      console.log('Posts:');
      console.log(posts);
    }

    if (!this.state.isLoaded) {

      return <div>Loading...</div>;

    }else{

      return (
        <>
          <Header />
          <Container fluid className="main-wrapper p-0">
            <Row className="main-wrapper__contain p-0">
              <Col xs={3} className="main-wrapper__contain__navigation-bar">
                <ul>
                  {
                    posts && posts.length > 0 ? 
                    posts.map((item) => (
                      <li key={item.data.id}>
                        {item.data.title}
                        {item.data.author}
                        {item.data.created}
                        {item.data.thumbnail}
                        {item.data.num_comments}
                        {item.data.num_comments}
                      </li>
                    )) : ''
                  }
                </ul>
              </Col>
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
}

const mapStateToProps = (state: { posts: any; }) => ({
  posts: state.posts
})

export default connect(mapStateToProps,{ getData })(Home);