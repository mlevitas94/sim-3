import React from 'react'
import {Link, withRouter} from 'react-router-dom'
import {connect} from 'react-redux'


 function Nav(props) {
   if(props.location.pathname==='/'){
       return <div>

       </div>
   }else{
       return (
           <div>
               <Link to='/dashboard'>Home</Link>
               <Link to ='/post/1'>New Post</Link>
               <Link to='/'>Logout</Link>
               {props.username}
               {props.profile_pic}
           </div>
       )
   }
} 

function mapStateToProps(reduxState){
    return {
        username: reduxState.username,
        profile_pic: reduxState.profile_pic
    }
}

export default withRouter(connect(mapStateToProps)(Nav))
