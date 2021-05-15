import React, {Component} from 'react';
import { Button, Card } from 'react-bootstrap';

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

    render (){

        const { id, title, author, created, thumbnail, num_comments } = this.props; console.log(this.props);

        return (
            <>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={ thumbnail } />
                    <Card.Body>{/* { id } */}
                        <Card.Title>
                            { author }
                            { created }
                        </Card.Title>
                        <Card.Text>
                            { title }
                        </Card.Text>
                        { num_comments }
                    </Card.Body>
                </Card>
            </>
        )
        
    }
}