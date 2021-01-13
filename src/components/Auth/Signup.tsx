import React, { Component, MouseEvent } from 'react';
import { TextField, Button} from '@material-ui/core';
import APIURL from '../../helpers/environment'

type SignUpState = {
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    role: "user" | "admin"
}

interface Props {
    updateToken(newToken: string, userId: number, role: 'user' | 'admin'): void,
    roleAdmin:Function,
    roleUser: Function
}

export default class Signup extends Component<Props, SignUpState>{
    constructor(props: Props) {
        super(props)
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            role: "user"
        }
        
    }

    setFirstName(e: string) {
        this.setState({
            firstName: (e)
        })
        
    }

    setLastName(e: string) {
        this.setState({
            lastName: (e)
        })
       
    }

    

    setEmail(e: string) {
        this.setState({
            email: (e)
        })
        
    }

    setPassword(e: string) {
        this.setState({
            password: (e)
        })
        // console.log('password', this.state.password)
    }

    signUpUser(e: MouseEvent<HTMLButtonElement | HTMLAnchorElement>) {
        e.preventDefault();
        fetch(`${APIURL}/user/register`, {
            method: 'POST',
            body: JSON.stringify({
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                email: this.state.email,
                password: this.state.password
            }),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        }).then((response) => response.json())
            .then((data) => {
                this.props.updateToken(data.token, data.userId, data.role)
            //    console.log(data.token)
            })
    }

    render() {
        return (
            <div>
               
                    <TextField id="outlined-basic" label="First Name" variant="outlined" onChange={(e)=>this.setFirstName(e.target.value)} />
                    <TextField id="outlined-basic" label="Last Name" variant="outlined"
                    onChange={(e)=>this.setLastName(e.target.value)} />
                    <TextField id="outlined-basic" label="Email" variant="outlined" onChange={(e)=>this.setEmail(e.target.value)} />
                    <TextField type='password' id="outlined-basic" label="Password" variant="outlined" onChange={(e)=>this.setPassword(e.target.value)} />
                    <Button onClick={(e)=>this.signUpUser(e)} type='submit' variant="contained">Register</Button>
                    <Button  onClick={(e) => this.props.roleAdmin(e)} >Admin</Button>
                    <Button onClick={(e) => this.props.roleUser(e)} >User</Button>
                    
                
            </div>
        )
    }
}