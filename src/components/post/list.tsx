import React, {Component} from 'react';
import { Container, Col, Row, ListGroup, Button } from 'react-bootstrap';
import { connect } from "react-redux";
import { dismissItem, detailItem } from '../../store/actions';
import Swal from 'sweetalert2';
import { Animated } from 'react-animated-css';

type CardProps = {
    id: string,
    title: string,
    author: string,
    created: string,
    thumbnail: string,
    num_comments: string,
    dismissItem: Function,
    detailItem: Function
}

type CardState = {
    isRead: boolean,
    isDismissed: boolean,
    isHide: boolean
}
class PostCard extends Component<CardProps, CardState> {

    constructor (props:CardProps) {
        super (props);

        this.state = {
            isRead:false,
            isDismissed:false,
            isHide:false
        }
    }

    componentWillUnmount() {
        this.setState({ isHide:true });
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

    setDateAgo(date:any){

        if(date){

            var date_get = new Date(date*1000);
            var date_now = new Date();
            var diff_seconds = Math.abs(date_get.getTime() - date_now.getTime()) / 1000;
            var suffix = 'ago';

            // Days
            var days = Math.floor(diff_seconds / 86400);
            if(days > 0){ return `${days} d ${suffix}`; }
            diff_seconds -= days * 86400;

            // Hours
            var hours = Math.floor(diff_seconds / 3600) % 24;
            if(hours > 0){ return `${hours} h ${suffix}`; }
            diff_seconds -= hours * 3600;

            // Minutes
            var minutes = Math.floor(diff_seconds / 60) % 60;
            if(minutes > 0){ return `${minutes} min ${suffix}`; }
            diff_seconds -= minutes * 60;
            
            // Seconds Left
            var seconds = diff_seconds % 60;
            if(seconds > 0){ return `${seconds} s ${suffix}`; }

            return date_get.toString();

        }

        return '';
        
    }

    showDetail(e:any,id:string){
        this.setState({ isRead:true });
        this.props.detailItem({ id:id });
    }

    setDismissed(e:any,id:string){

        e.stopPropagation();

        Swal.fire({
            title: 'Are you sure?',
            text: 'Do you want to continue',
            icon: 'info',
            showCancelButton: true,
            confirmButtonText: 'Do it!',
            confirmButtonColor: '#ff4600',
        }).then((result) => {
            if (result.isConfirmed) {
                this.setState({ isDismissed:true });
                setTimeout(() => {
                    this.props.dismissItem({ id:id });
                },
                700);
            }
        })

    }

    render (){

        const { id, title, author, created, thumbnail, num_comments } = this.props;

        if(!this.state.isHide){
            return (
                <>
                <Animated animationIn="fadeIn" animationOut="bounceOutUp" isVisible={ !this.state.isDismissed ? true : false } key={id}>
                    <ListGroup.Item className={ 'main-wrapper__contain__navigation-bar__wrap__posts__items p-0 '+ ( !this.state.isRead ? ' not-read':'' ) } onClick={(e) => this.showDetail(e,id)}>
                        <Container fluid className={ ( !title ? 'empty':'' ) + ' post-item animated '+ ( !this.state.isRead ? ' not-read':'')  } >
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
                                        { id }{ title }
                                        </Row>
                                        <Row className="post-item__body__more">
                                            <Col xs={8} className="p-0 post-item__body__more__comments">
                                                { num_comments } comments
                                            </Col>
                                            <Col xs={4} className="p-0 post-item__body__more__created">
                                                { this.setDateAgo(created) }
                                            </Col>
                                            <Col xs={4} className="p-0 post-item__body__more__dismiss">
                                                <Button variant="outline-dark" className="post-item__body__more__dismiss--button p-0" 
                                                        onClick={ (e) => this.setDismissed(e,id) }
                                                        size="sm">
                                                            Dismiss
                                                </Button>
                                            </Col>
                                        </Row>
                                    </Container>
                                </Col>
                                <Col xs={1} className="p-0">
                                    <span className="post-item__go-to-button animated"></span>
                                </Col>
                            </Row>
                        </Container>
                    </ListGroup.Item>
                </Animated>
                </>
            )
        }else{
            return (<></>);
        }
        
    }
}


const mapStateToProps = (state:any) => ({
})
  
export default connect(mapStateToProps,{ dismissItem, detailItem })(PostCard);