import React, {Component} from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import {updateUser} from './../../ducks/reducer';
import './HomePage.css';

class HomePage extends Component {
    constructor(props){
        super(props)
        this.state = {

        };
    }
    componentDidMount(){
        const {id} = this.props;
        if(!id){
            // double check sessions
            axios.get('/api/user')
            .then(res=>{
                // don't move
                // add to redux
                this.props.updateUser(res.data);
            }).catch(err=>{
                // boot to the other page
                this.props.history.push('/');
            });
        }else{
            // don't move
        };
    };
    render(){
        return(
            <div className='parent'>
                <div className='search_bar'>
                    <div>
                        <div>
                            <input />
                            <button>Search</button>
                            <button>Reset</button>
                        </div>
                        <div>

                        </div>
                    </div>
                </div>
                <div className='posts'>
                    posts
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
        id,
        username,
        profile_pic
        
    };
};
const dispatch = {
    updateUser
};
export default connect(mapToProps, dispatch)(HomePage)