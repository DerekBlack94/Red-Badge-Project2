import React from 'react';

import {Container} from '@material-ui/core';
import Login from './Login';



interface Props {
    updateToken(newToken: string, userId: number, role: 'user' | 'admin'): void,
    
}

const LoginDisplay =(props: Props)=>{
    
    const divStyle = {
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

    return(
        <Container style={divStyle}>
            <div>
                <h1 style={title} >LOG IN</h1>
                <Login updateToken={props.updateToken} />
            </div>
        </Container>
    )
}

export default LoginDisplay;