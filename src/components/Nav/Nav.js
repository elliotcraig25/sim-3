import React from 'react';
import {connect} from 'react-redux';
import {updateUser} from './../../ducks/reducer';
import axios from 'axios';
import {withRouter} from 'react-router-dom';
import {Link} from 'react-router-dom';

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
        console.log(this.props.username)
        return (
            <div>
             <div>
                 <div>
                     <img src={this.props.profile_pic} alt='Profile'/>
                 </div>
                 <div>
                     {this.props.username}
                 </div>
                 <div>
                     <Link to='/dashboard'>
                        Home
                     </Link>
                 </div>
                 <div>
                     <Link to='/new'>
                        new
                     </Link>
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
    console.log({username})
    return {
        id, username, profile_pic
    }
}
const dispatch = {
    updateUser
}
export default withRouter(connect(mapToProps, dispatch)(Nav))