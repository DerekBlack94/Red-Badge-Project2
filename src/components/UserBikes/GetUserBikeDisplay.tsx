import React from 'react';
import UpdateUserBike from './UpdateUserBike';
import GetUserBike from './GetUserBike'

import { Container } from '@material-ui/core'
import image from '../assets/Logo.png'



interface Props {
    token: string | null

}

const GetUserBikeDisplay = (props: Props) => {
    const divStyle = {
        marginTop: '3em',
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
    
    return (
        <Container style={divStyle} >
            <img  src={image} width="250vw" height="250vh" /> 
        <div>
        <h1 style={textStyle}>User Bikes</h1>
        <GetUserBike token={props.token}/>
        </div>

        </Container>

        

    ) 
}

export default GetUserBikeDisplay;