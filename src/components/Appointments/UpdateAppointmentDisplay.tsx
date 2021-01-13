import React from 'react';

import { Container } from '@material-ui/core'
import UpdateAppointment from './UpdateAppointment';



interface Props {
    token: string | null
}

const UpdateAppointmentDisplay = (props: Props) => {
    const divStyles = {
        marginTop: '3em',
        backgroundColor: 'green',
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
        height: '100%'
    }

    return (
        <Container style={divStyles} >
            <div>
                <h1>what would you like to update About Your Bike</h1>
                {/* <UpdateAppointment token={props.token} /> */}
            </div>
        </Container>
    )
}

export default UpdateAppointmentDisplay;