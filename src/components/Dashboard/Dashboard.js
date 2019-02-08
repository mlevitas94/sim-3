import React, {Component} from 'react'
import Post from '../Post/Post'

class Dashboard extends Component {
    constructor(props){
        super(props)
        this.state = {
            postinput: '',
            myposts: true,
            postlist: [
                {
                    postTitle: 'title here',
                    userName: 'new user'

                }
            ]
        }
    }

    inputChange(val){
        this.setState({
            postinput:val
        })
    }
    render(){
        const postlist = this.state.postlist.map((post, i) => {
            return (
                <Post title={post.postTitle} username={post.userName}/>
            )
        })
        return(
            <div>

                <input value ={this.state.postinput} onChange={(e) => this.inputChange(e.target.value)}/>
                <button>search</button>
                <button>reset</button>
                My Posts
                <input type='checkbox' value={this.state.myposts}/>

                <div>
                    {postlist}
                </div>
            </div>
        )
    }
}
export default Dashboard