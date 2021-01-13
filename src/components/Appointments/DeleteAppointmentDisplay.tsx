import React from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles'
import { Container } from '@material-ui/core'
import DeleteAppointment from './DeleteAppointment';



interface Props {
    token: string |null ,
    // appointments: any
}

const DeleteAppointmentDisplay =(props: Props)=>{
    const divStyle ={
        marginTop: '5em',
        backgroundColor: 'white',
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
        height: '100%'
    }

    console.log('DeleteAppointment')

    return(
        <Container style={divStyle}>
            <div>You deleted stuff!</div>
            {/* <DeleteAppointment  token={props.token} /> */}
        </Container>
    )
}

export default DeleteAppointmentDisplay;