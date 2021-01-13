import React, { Component } from 'react';
import Main from './components/Main/Main';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

type State = {
    
    token: string| null ;
    userId: number;
    role: 'user' | 'admin';
    
}


class App extends Component<{}, State> {
    constructor(props: {}) {
      super(props);
      this.state = {
        token: localStorage.getItem('token') ? localStorage.getItem('token') : "",
        userId: 0,
        role: 'user',
       
      }
      console.log(this.state.token)
    }
    
    componentDidMount = () => {
      if(localStorage.getItem('token')) {
        this.setState({
          token: localStorage.getItem('token'),
          // userId: localStorage.getItem('userId'),
        });
      }
    }
    
    updateToken = (newToken: string,  newUserId: number,newRole: 'user' | 'admin') => {
      // localStorage.setItem("token", newToken);
      // localStorage.setItem('userId', String(newUserId));
      // localStorage.setItem('role', newRole);
      this.setState({
        token: newToken,
        userId: newUserId,
        role: newRole,
      })
      console.log(newToken)
      // console.log(newUserId)
      // console.log(newRole)
    };
    
    clearToken = () => {
      localStorage.clear();
      this.setState({
        token: "",
      });
    }

    // roleAdmin () {
    //   this.setState({
        
    //     role: "admin"
    //   })
    // }

    roleAdmin = (newRole: string) => {
      this.setState({role: "admin"})
      localStorage.setItem('role', "admin");
  }

    // roleUser () {
    //   this.setState({
    //     role: "user"
    //   })
    // }
    roleUser = (newRole: string) => {
      this.setState({role: "user"})
      localStorage.setItem('role', "user");
  }


    render() {
        return (
            <div className='app'>
                <Main updateToken={this.updateToken} token={this.state.token} clearToken={this.clearToken} roleAdmin={this.roleAdmin.bind(this)} roleUser={this.roleUser.bind(this)} />
            </div>
        )
    }
}
export default App