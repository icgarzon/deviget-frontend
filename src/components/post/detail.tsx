import React, {Component} from 'react';
import { Card, Container, Row } from 'react-bootstrap';
import { connect } from "react-redux";

type PostDetailProps = {
    id:string,
    posts:Array<any>
}

type PostDetailState = {
    isLoading: boolean
}

class PostDetail extends Component<PostDetailProps, PostDetailState> {

    constructor (props:PostDetailProps) {
        super (props);
        this.state = {
            isLoading: false
        }
    }

    getPostDetail(id:string){
        if(this?.props?.posts){
            return this.props.posts.filter((post:any)=>{ return post?.data?.id === id })[0].data;
        }
    }

    setClassImage(image:string){
        var customClass='';
        if(!image || image == 'default'){ customClass = 'no-image'; }
        return `animated ${customClass}`;
    }
    
    setBackgroundImage(image:string){
        if(image && image != 'default'){ return `url( ${image} )`; }
        return ''
    }

    render (){

        const { id } = this.props;

        if(id){

            const data = this.getPostDetail(id); console.log(data);

            return (
                <>
                    <Container className="main-wrapper__contain__detail__wrap__content">
                        <Row>
                            <Card>
                                <Card.Header>{ data?.author ? data.author : '' }</Card.Header>
                                <div className={ 'main-wrapper__contain__detail__wrap__content__image ' + this.setClassImage(data.thumbnail) }>
                                    <Card.Img variant="top" src={ data?.thumbnail ? data.thumbnail : '' } height="200" />
                                    <div className="main-wrapper__contain__detail__wrap__content__image__blur" style={{ backgroundImage: this.setBackgroundImage(data.thumbnail) }}></div>
                                </div>
                                <Card.Body>
                                    <Card.Subtitle className="mb-2 text-muted">{ data?.domain ? data.domain : '' }</Card.Subtitle>
                                    <Card.Text>
                                    { data?.title ? data.title : '' }
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Row>
                    </Container>
                </>
            )

        }else{
            
            return (
                <>
                    <div className="main-wrapper__contain__detail__wrap__empty">
                    <div className="main-wrapper__contain__detail__wrap__empty__icon"></div>
                    <h2>
                        Select a <span className="emphasys">item</span>
                        <span className="subtitle">{ id ? id : '' } To view the detail</span>
                    </h2>
                    </div>
                </>
            )

        }
    }
}

const mapStateToProps = (state:any) => ({
    id: state.detail.id,
    posts: state.posts
})
  
export default connect(mapStateToProps)(PostDetail);