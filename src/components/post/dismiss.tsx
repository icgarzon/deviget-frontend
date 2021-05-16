import React, {Component} from 'react';
import { Button } from 'react-bootstrap';
import { connect } from "react-redux";
import { dismissAll } from '../../store/actions';
import Swal from 'sweetalert2';

type PaginationProps = {
    dismissAll:Function
}

type PaginationState = {
    isLoading: boolean
}

class PostDismissAll extends Component<PaginationProps, PaginationState> {

    constructor (props:PaginationProps) {
        super (props);
        this.state = {
            isLoading: false
        }
    }

    componentDidMount() {

    }

    dismissAll(){
        Swal.fire({
          title: 'Are you sure?',
          text: 'Do you want to continue',
          icon: 'info',
          showCancelButton: true,
          confirmButtonText: 'Do it!',
          confirmButtonColor: '#ff4600',
        }).then((result) => {
          if (result.isConfirmed) {
            this.props.dismissAll();
          }
        })
    }

    render (){

        return (
            <>
                <Button variant="outline-dark" className="main-wrapper__contain__navigation-bar__actions--dismiss-all ml-2" onClick={ () => this.dismissAll() }>Dismiss All</Button>
            </>
        )
        
    }
}

const mapStateToProps = (state:any) => ({
})
  
export default connect(mapStateToProps,{ dismissAll })(PostDismissAll);