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
        super (props);
    }

    setClassImage(image:string){
        var customClass='';
        if(!image || image == 'default'){ customClass = 'no-image'; }
        return `post-item__thumbnail animated ${customClass}`;
    }
    
    setBackgroundImage(image:string){
        if(image && image != 'default'){ return `url( ${image} )`; }
        return ''
    }

    render (){

        const { id, title, author, created, thumbnail, num_comments } = this.props;
        
        return (
            <>
            <Container fluid className={ ( !title ? 'empty':'' ) + ' post-item animated' } >
                <Row>
                    <Col xs={4} className="p-0">
                        <div className={ this.setClassImage(thumbnail) } style={{ backgroundImage: this.setBackgroundImage(thumbnail) }}></div>
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
                        <span className="post-item__go-to-button animated"></span>
                    </Col>
                </Row>
            </Container>
            </>
        )
        
    }
}