import { createStyles, makeStyles } from '@material-ui/core/styles'
import { Container, Button } from '@material-ui/core'
import image from '../assets/Logo.png'




const Home = () => {
    const divStyle ={
                marginTop: '2em',
                display: 'flex',
                justifyContent: 'center',
                alignContent: 'center',
                height: "100vh",
                backgroundColor: "white",
                paddingTop: '7em'
    }

    return (
        <Container style={divStyle}>
            <div>
                <img src={image} width="250vw" height="250vh" />                
                <h1>Family Bike Chain</h1>
                
                <Button>Check Us Out</Button>
            </div>
        </Container>
    )
}

export default Home;