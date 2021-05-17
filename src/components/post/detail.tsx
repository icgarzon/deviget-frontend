import React, {Component} from 'react';
import { connect } from "react-redux";

type PostDetailProps = {
    id:string
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

    }

    render (){

        const { id } = this.props;

        if(id){

            const data = this.getPostDetail(id);

            return (
                <>
                    Info { id }
                </>
            )

        }else{
            
            return (
                <>
                    <div className="main-wrapper__contain__detail__empty">
                    <div className="main-wrapper__contain__detail__empty__icon"></div>
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
})
  
export default connect(mapStateToProps)(PostDetail);