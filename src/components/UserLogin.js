import React from 'react';
import {connect} from 'react-redux';
import {fetchUser} from '../actions/fetchUser'

class UserLogin extends React.Component {
    state = { username: ''}

    // componentDidMount = () => {
    //     this.props.getProfileFetch()
    // }

    handleOnChange = (event) => {
        this.setState({
            username: event.target.value,
        })
    }

    handleOnSubmit = (event) => {
        console.log(this.props.history)
        event.preventDefault();
        const response = this.props.fetchUser(this.state.username, this.props.history)
        //how to insert an if statement here that only reroutes if fetch finds user?
        //this.props.history.push('/userhome')
    }

    render() {
        return( 
            <div>
               <form onSubmit={this.handleOnSubmit}> 
                <input 
                    type="username" 
                    placeholder="username" 
                    value={this.state.username}
                    onChange={this.handleOnChange}
                />
                 <input type='submit' value='Login'/>
               </form>
            </div>
        )
    }
}

export default connect(null, {fetchUser})(UserLogin)


//current_user available throughout backend
//form for username, sends to backend(fetch/post), backend returns data or error, save 
//Globetrotter videos 1-3