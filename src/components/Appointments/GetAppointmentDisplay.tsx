import React from 'react';
import {  makeStyles } from '@material-ui/core/styles'
import { Container } from '@material-ui/core'
import GetAppointment from './GetAppointment'
import image from '../assets/Logo.png'

const useStyles = makeStyles({
    
        container: {
            marginTop: '2em',
            backgroundColor: 'white',
            display: 'flex',
            justifyContent: 'center',
            alignContent: 'center',
            height: '95vh',
            paddingTop: '3em'
        }
    
    });

interface Props {
    token: string | null
    // appointments: any
}

const GetAppointmentDisplay =(props: Props)=>{
    const classes = useStyles();

    console.log('GetAppointment')

    return(
        <Container className={classes.container}>
            <img src={image} width="250vw" height="250vh" />
            <div><h2>Your Scheduled Appointmnets</h2></div>
            <GetAppointment  token={props.token} />
            
        </Container>
    )
}

export default GetAppointmentDisplay;