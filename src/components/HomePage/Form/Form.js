import React from 'react';

class Form extends React.Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }
    render(){
        return (
            <div>
                <div>
                    <div>New</div>
                </div><br/>
                <div>
                    <div>
                        Title:<br/>
                        <input />
                    </div><br/>
                    <div>
                        image
                    </div><br/>
                    <div>
                        Image URL:<br/>
                        <input />
                    </div><br/>
                    <div>
                        Content:<br/>
                        <input />
                    </div><br/>
                    <div>
                        <button>Post</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Form