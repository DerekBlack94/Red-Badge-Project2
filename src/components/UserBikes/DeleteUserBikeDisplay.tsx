import DeleteUserBike from './DeleteUserBike'
import { createStyles, makeStyles } from '@material-ui/core/styles'
import { Container } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'


interface Props {
    token: string | null
   
    
}

const DeleteUserBikeDisplay = (props: Props) => {
    // const classes = useStyles();

   

    // const { classes } = this.props;

    return (
        <Container  >
            <div>
                {/* <DeleteUserBike userBikeId={bike.id} token={props.token}  /> */}
            </div>
        </Container>
    )
}

export default DeleteUserBikeDisplay;