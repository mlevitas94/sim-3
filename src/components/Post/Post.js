import React, {Component} from 'react'

class Post extends Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }
    render(){
        return(
            <div>
                {this.props.title}
                <br/>
                {this.props.username}
            </div>
        )
    }
}
export default Post