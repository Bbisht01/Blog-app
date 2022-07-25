import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateLikes } from './Action';
import { IoHeartOutline } from "react-icons/io5";



class Likes extends Component {   

    render() {

        return (
            
            <div >               
                <button 
                    className="btn btn-success   w-100 pb-0 h-auto" style={{display:"flex",paddingBottom:"0px"}}
                    onClick={()=>this.props.OnIncrementLike(1)}>
                    <p><IoHeartOutline/></p><p>{this.props.likesCount}</p>
                </button> 
            </div>
        );
    }
}

function mapStateToProps(state){
    return {
        likesCount: state.likes
    }
}
const mapDispatchToProps = dispatch => {
    return {
      OnIncrementLike: (val) => dispatch(updateLikes(val)),
    };
  }
export default connect(mapStateToProps, mapDispatchToProps)(Likes)