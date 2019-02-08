import React, {Component} from 'react';
import './Login.css';
import axios from 'axios';


class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: ''
        };
        this.login = this.login.bind(this);
    }
    handleChange(prop, val){
        this.setState({
            [prop]: val
        });
    };
    register = ()=>{
        const {username, password} = this.state;
        axios.post(
            `/auth/register`, {username, password}
        )
    };
    login(){

    }
    render(){
        const {username, password} = this.state;
        console.log({username})
        console.log({password})
        return(
            <div className='login'>
                <div>
                    This is Login <br/>
                    <h1>Helo</h1><br/>
                    <div>
                        Username:
                        <input 
                            type='text'
                            value={username}
                            onChange={(e)=>{
                                this.handleChange(
                                    'username', e.target.value
                                );
                            }}
                        />
                    </div><br/>
                    <div>
                        Password:
                        <input 
                            type='password'
                            value={password}
                            onChange={(e)=>{
                                this.handleChange(
                                    'password', e.target.value
                                );
                            }}
                        />
                    </div><br/>
                    <div>
                        <button onClick={this.login}>
                            Login
                        </button>
                        <button onClick={this.register}>
                            Register
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}
export default Login