import React, {Component} from 'react'
import Axios from 'axios';
import {connect} from 'react-redux'
import {updateUser} from '../../ducks/reducer'

class Auth extends Component {
    constructor(props){
        super(props)
        this.state = {
            username: '',
            password:''
        }
    }

   handleInput(name, val){
        this.setState({
            [name]: val
        })
   }

   registerUser =() =>{
    const {username, password} = this.state

    Axios.post('/api/register', {username, password})
    .then(res => {
        console.log(res.data)
        this.props.history.push('/dashboard')
    })
   }

   login = () => {
       const {username, password} = this.state

       Axios.post('/api/login', {username, password})
       .then(res => {
        this.props.history.push('/dashboard')
         this.props.updateUser(res.data)
         
       })
       .catch(err => {
           console.log(err)
       })
   }


    render(){
        return(
            <div>
                <p>username</p>
                <input value={this.state.username} onChange={(e)=> {this.handleInput('username', e.target.value)}}/>
                <p>password</p>
                <input value={this.state.password} onChange={(e)=> {this.handleInput('password', e.target.value)}}/>
                <br/>
                <button onClick={this.login}>Login</button>
                <button onClick={this.registerUser}>register</button>
            </div>
        )
    }
}
export default connect(null, {updateUser})(Auth)