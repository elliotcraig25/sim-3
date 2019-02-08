import React from 'react';
import {connect} from 'react-redux';
import {updateUser} from './../../ducks/reducer';
import axios from 'axios';
import {withRouter} from 'react-router-dom';

class Nav extends React.Component {
    constructor(props){
        super(props);
        this.state = {

        };
    };
    
    logout = ()=>{
        // console.log(this.props.history)
        axios.post('/auth/logout')
        .then(res=>{
            this.props.updateUser({})
            this.props.history.push('/')
        }).catch(err=>{
            console.log(err);
        });
    }
    render(){
        return (
            <div>
             <div>
                 <div>
                     Picture
                 </div>
                 <div>
                     Name
                 </div>
                 <div>
                     Home
                 </div>
                 <div>
                     new
                 </div>
             </div>
             <div>
                <button onClick={this.logout}>
                    Logout
                </button>
             </div>
         </div>
        )
    }
}

const mapToProps = reduxState=>{
    const {
        id, username, profile_pic
    } = reduxState;
    return {
        id, username, profile_pic
    }
}
const dispatch = {
    updateUser
}
export default withRouter(connect(mapToProps, dispatch)(Nav))