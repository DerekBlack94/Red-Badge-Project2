import React from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles'
import { Container } from '@material-ui/core'
import Signup from './Signup';



interface Props {
    updateToken(newToken: string, userId: number, role: 'user' | 'admin'): void,
    roleAdmin:Function,
    roleUser: Function
}

const SignUpDisplay = (props: Props) => {
    const divStyle ={
        marginTop: '3em',
        backgroundColor: 'white',
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
        height: '100vh'
    }
    const title = {
        marginTop: "2em",
            display: 'flex',
            justifyContent: 'center',
            alignContent: 'center',
            color: 'green'

    }

    return (
        <Container style={divStyle}>
            <div>
                <h1 style={title} >SIGN UP</h1>
                <Signup roleAdmin={props.roleAdmin} roleUser={props.roleUser} updateToken={props.updateToken} />
            </div>
        </Container>
    )
}

export default SignUpDisplay;