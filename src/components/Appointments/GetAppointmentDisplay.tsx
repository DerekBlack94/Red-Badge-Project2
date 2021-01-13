import React from 'react';
import {  makeStyles } from '@material-ui/core/styles'
import { Container } from '@material-ui/core'
import GetAppointment from './GetAppointment'
import image from '../assets/Logo.png'



interface Props {
    token: string | null
    // appointments: any
}

const GetAppointmentDisplay =(props: Props)=>{
    const divStyle = {
        marginTop: '2em',
        backgroundColor: 'white',
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
        height: '500vh',
        paddingTop: '3em'
    }
    const textStyle ={
        color: "green"
    }

    console.log('GetAppointment')

    return(
        <Container style={divStyle}>
            <img src={image} width="250vw" height="250vh" />
            <div>
            <h1 style={textStyle}>Your Scheduled Appointmnets</h1>
            
            <GetAppointment  token={props.token} />

            </div>
            
        </Container>
    )
}

export default GetAppointmentDisplay;