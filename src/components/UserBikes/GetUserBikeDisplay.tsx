import React from 'react';
import UpdateUserBike from './UpdateUserBike';
import GetUserBike from './GetUserBike'
import { createStyles, makeStyles } from '@material-ui/core/styles'
import { Container } from '@material-ui/core'
import image from '../assets/Logo.png'

const useStyles = makeStyles({
    
        container: {
            marginTop: '5em',
            backgroundColor: 'white',
            display: 'flex',
            justifyContent: 'center',
            alignContent: 'center',
            height: '100%'
        },img:{
            display:'flex',
            justifyContent: 'center',
            alignContent: 'left',
            
            
          }
    
    });

interface Props {
    token: string | null

}

const GetUserBikeDisplay = (props: Props) => {
    const classes = useStyles();
    
    return (
        <Container className={classes.container} >
            <img className={classes.img} src={image} width="250vw" height="250vh" /> 
        <div>
        <h2>Your Bikes</h2>
        <GetUserBike token={props.token}/>
        </div>

        </Container>

        

    ) 
}

export default GetUserBikeDisplay;