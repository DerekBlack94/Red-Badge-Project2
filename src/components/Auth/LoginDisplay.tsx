import React from 'react';
import {createStyles, makeStyles} from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles';
import {Container} from '@material-ui/core';
import Login from './Login';

const useStyles = makeStyles({
  
        container: {
            marginTop: '3em',
            backgroundColor: 'white',
            display: 'flex',
            justifyContent: 'center',
            alignContent: 'center',
            height: '100vh'
        }
   
    });

interface Props {
    updateToken(newToken: string, userId: number, role: 'user' | 'admin'): void,
    
}

const LoginDisplay =(props: Props)=>{
    const classes = useStyles();

    return(
        <Container className={classes.container}>
            <div>
                <h1>LOG IN</h1>
                <Login updateToken={props.updateToken} />
            </div>
        </Container>
    )
}

export default LoginDisplay;