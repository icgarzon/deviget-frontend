import React, {Component} from 'react';
import { Pagination } from 'react-bootstrap';
import { connect } from "react-redux";
import { getData } from '../../store/actions/';

type PaginationProps = {
    pageNumber: string,
    getData: Function,
}

type PaginationState = {

}

class PostPagination extends Component<PaginationProps, PaginationState> {

    constructor (props:PaginationProps) {
        super (props);
    }

    componentDidMount() {
        this.props.getData();
    }

    render (){

        const { pageNumber } = this.props;

        return (
            <>
                <Pagination className="justify-content-end">
                    <Pagination.Prev />
                    <Pagination.Item>{ pageNumber }</Pagination.Item>
                    <Pagination.Next />
                </Pagination>
            </>
        )
        
    }
}



const mapStateToProps = (state:PaginationProps) => ({
    posts: state.pageNumber
})
  
export default connect(mapStateToProps,{ getData })(PostPagination);