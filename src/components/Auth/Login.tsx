import React, { Component, MouseEvent } from 'react';
import { TextField, Button } from '@material-ui/core';
import APIURL from '../../helpers/environment'

type LoginState = {
    email: string,
    password: string
}

interface Props {
    updateToken(newToken: string, userId: number, role: 'user' | 'admin'): void,
}

export default class LoginIndex extends Component<Props, LoginState>{
    constructor(props: Props){
        super(props)
        this.state ={
            email: '',
            password: ''
        }
    }

    setUserName(e:string){
        this.setState({
            email: (e)
        })
    }

    setPassword(e: string){
        this.setState({
            password: (e)
        })
    }

    loginUser(e: MouseEvent<HTMLButtonElement | HTMLAnchorElement> ){
        e.preventDefault();
        fetch(`${APIURL}/user/login`, {
            method: 'POST',
            body: JSON.stringify({
                email: this.state.email,
                password: this.state.password
            }),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        }).then((response)=> response.json())
            .then((data)=> {
               
                localStorage.setItem("token", data.token);
                localStorage.setItem('userId', String(data.user.id));
                localStorage.setItem('role', data.user.role);
                this.props.updateToken(data.token, data.user.id, data.user.role)
            })
    }

    render() {
        return (
            <div>
                {/* <form onSubmit={(e)=>this.loginUser(e)} > */}
                    <TextField id="outlined-basic" label="email" variant="outlined" onChange={(e)=>this.setUserName(e.target.value)} />
                    <TextField id="outlined-basic" type="password" label="Password" variant="outlined" onChange={(e)=>this.setPassword(e.target.value)} />
                    <Button onClick={(e)=>this.loginUser(e)} type='submit' variant='contained'>LOG IN</Button>
                {/* </form> */}
            </div>
        )
    }
}