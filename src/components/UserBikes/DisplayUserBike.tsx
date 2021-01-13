import React from 'react';
import { Container } from '@material-ui/core'
import CreateUserBike from './CreateUserBike';
import image from '../assets/Logo.png'



interface Props {
    token: string | null
}

const DisplayUserBike = (props: Props) => {
    

    const divStyle = {
    marginTop: '4em',
    backgroundColor: 'white',
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    height: '95vh',
    }
    return (
        <Container style={divStyle}  >
            <div>
            <img  src={image} width="250vw" height="250vh" /> 
                <h1>Tell Us About Your Bike</h1>
                <CreateUserBike token={props.token} />
            </div>
        </Container>
    )
}

export default DisplayUserBike;