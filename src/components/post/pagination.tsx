import React, {Component} from 'react';
import { Pagination } from 'react-bootstrap';
import { connect } from "react-redux";
import { getData } from '../../store/actions/';

type PaginationProps = {
    page: number,
    after: string,
    prev: string,
    getData: Function,
}

type PaginationState = {
    isLoading: boolean
}

class PostPagination extends Component<PaginationProps, PaginationState> {

    constructor (props:PaginationProps) {
        super (props);
        this.state = {
            isLoading: false
        }
    }

    componentDidMount() {
        this.props.getData();
    }

    nextPage(){
        this.setState({ isLoading:true });
        this.props.getData({ page:this.props.page, after:this.props.after });
    }

    prevPage(){
        this.setState({ isLoading:true });
        this.props.getData({ page:this.props.page, prev:this.props.prev });
    }

    render (){

        const { page } = this.props;

        return (
            <>
                <Pagination className="justify-content-end">
                    {
                        this.props.prev ? 
                        <Pagination.Prev onClick={ () => this.prevPage() } />
                        : ''
                    }
                    <Pagination.Item disabled>{ page }</Pagination.Item>
                    {
                        this.props.after ? 
                        <Pagination.Next onClick={ () => this.nextPage() } />
                        : ''
                    }
                </Pagination>
            </>
        )
        
    }
}



const mapStateToProps = (state:any) => ({
    page: state.page,
    after: state.api.after,
    prev: state.api.prev
})
  
export default connect(mapStateToProps,{ getData })(PostPagination);