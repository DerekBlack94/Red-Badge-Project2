import React from 'react';

import { Container } from '@material-ui/core'
import UpdateUserBike from './UpdateUserBike';

interface Props {
    token: string | null
}

const UpdateUserBikeDisplay = (props: Props) => {
    const divStyles = {
        marginTop: '5em',
        backgroundColor: 'white',
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
        height: '100%'
    }

    return (
        <Container style={divStyles} >
            <div>
                <h1>what would you like to update About Your Bike</h1>
                {/* <UpdateUserBike token={props.token} /> */}
            </div>
        </Container>
    )
}

export default UpdateUserBikeDisplay;