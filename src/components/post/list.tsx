import React, {Component} from 'react';
import { Container, Col, Row } from 'react-bootstrap';

type CardProps = {
    id: string,
    title: string,
    author: string,
    created: string,
    thumbnail: string,
    num_comments: string,
}


export class PostCard extends Component<CardProps, {}> {

    constructor (props:CardProps) {
        super (props)
    }

    setBackgroundImage(image:string){
        if(image){ return `url( ${image} )`; }
        return `url(assets/no-thumbnail.jpg)`
    }

    render (){

        const { id, title, author, created, thumbnail, num_comments } = this.props; console.log(this.props);

        return (
            <>
            <Container fluid className="post-item animated">
                <Row>
                    <Col xs={4} className="p-0">
                        <div className="post-item__thumbnail animated" style={{ backgroundImage: this.setBackgroundImage(thumbnail) }}></div>
                    </Col>
                    <Col xs={7} className="p-0 pl-3">
                        <Container fluid className="post-item__body">
                            <Row className="post-item__body__title">
                                { author }
                            </Row>
                            <Row className="post-item__body__description text-truncate">
                                { title }
                            </Row>
                            <Row className="post-item__body__more">
                                <Col xs={8} className="p-0 post-item__body__more__comments">
                                    { num_comments } comments
                                </Col>
                                <Col xs={4} className="p-0 post-item__body__more__created">
                                    { created }
                                </Col>
                            </Row>
                        </Container>
                    </Col>
                    <Col xs={1} className="p-0">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                        </svg>
                    </Col>
                </Row>
            </Container>
            </>
        )
        
    }
}