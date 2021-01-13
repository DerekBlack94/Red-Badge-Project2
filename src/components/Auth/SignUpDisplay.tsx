import React from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles'
import { Container } from '@material-ui/core'
import Signup from './Signup';

const useStyles = makeStyles({
   
        mainContainer: {
            marginTop: '3em',
            backgroundColor: 'white',
            display: 'flex',
            justifyContent: 'center',
            alignContent: 'center',
            height: '100vh'
        },
        signupText:{
            color:"blue",
            justifyContent: 'center',
            alignContent: 'center',
            display: 'flex',
            paddingTop:"2em"
        }
  
    });

interface Props {
    updateToken(newToken: string, userId: number, role: 'user' | 'admin'): void,
    roleAdmin:Function,
    roleUser: Function
}

const SignUpDisplay = (props: Props) => {
    const classes = useStyles();

    return (
        <Container className={classes.mainContainer}>
            <div>
                <h1 className={classes.signupText}>SIGN UP</h1>
                <Signup roleAdmin={props.roleAdmin} roleUser={props.roleUser} updateToken={props.updateToken} />
            </div>
        </Container>
    )
}

export default SignUpDisplay;