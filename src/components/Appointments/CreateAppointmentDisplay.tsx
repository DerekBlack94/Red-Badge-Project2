import React from 'react'
import {  makeStyles } from '@material-ui/core/styles'
import { Container } from '@material-ui/core'
import CreateAppointment from './CreateAppointment';
import image from '../assets/Logo.png'

const useStyles = makeStyles({
    
        container: {
            marginTop: '3em',
            backgroundColor: 'white',
            display: 'flex',
            justifyContent: 'center',
            alignContent: 'center',
            height: '95vh'
        },img:{
            display:'flex',
            justifyContent: 'center',
            alignContent: 'left',
            
            
          }, styleDiv:{
            //   backgroundColor: 'white',
              alignContent: 'center',
              display:'flex',
              justifyContent: 'center',
          }
    
    });

interface Props {
    token: string | null
    // bike: any
}

const CreateAppointmentDisplay = (props: Props) => {
    const classes = useStyles();

    return (
        <div className={classes.styleDiv}>

        <Container className={classes.container} >

            <div>
             <img className={classes.img} src={image} width="250vw" height="250vh" /> 
                <CreateAppointment token={props.token} />
            </div>
        </Container>
        </div>
    )
}

export default CreateAppointmentDisplay;