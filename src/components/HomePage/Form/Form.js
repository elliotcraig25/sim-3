import React from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import {updateUser} from './../../../ducks/reducer';

class Form extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            title: '',
            img: '',
            content: ''
        }
    };
    handleChange(prop, val){
        this.setState({
            [prop]: val
        });
    };
    postButton = ()=>{
        const {title, img, content} = this.state;
        axios.post(
            `/api/post`, {title, img, content}
        ).then(res=>{

        }).catch(err=>{
            console.log(err);
        });
    }
    render(){
        const {title, img, content} = this.state;
        // console.log({title}, {img}, {content})
        return (
            <div>
                <div>
                    <div>New</div>
                </div><br/>
                <div>
                    <div>
                        Title:<br/>
                        <input 
                            type='text'
                            value={title}
                            onChange={(e)=>{
                                this.handleChange(
                                    'title', e.target.value
                                )
                            }}
                        />
                    </div><br/>
                    <div>
                        image
                    </div><br/>
                    <div>
                        Image URL:<br/>
                        <input 
                            type='text'
                            value={img}
                            onChange={(e)=>{
                                this.handleChange(
                                    'img', e.target.value
                                )
                            }}
                        />
                    </div><br/>
                    <div>
                        Content:<br/>
                        <input 
                            type='text'
                            value={content}
                            onChange={(e)=>{
                                this.handleChange(
                                    'content', e.target.value
                                )
                            }}
                        />
                    </div><br/>
                    <div>
                        <button
                            onClick={this.postButton}
                        >
                            Post
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}
const mapToProps = reduxState => {
    return {
        id: reduxState.id
    }
};
const dispatch = {
    updateUser
}
export default connect(mapToProps, dispatch)(Form)