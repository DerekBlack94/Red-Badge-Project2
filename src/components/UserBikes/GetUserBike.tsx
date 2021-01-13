import React, { Component } from "react";
import { createStyles, withStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import {Container,} from "@material-ui/core";
import { ExpandMore } from "@material-ui/icons";
import GetUserBikeDisplay from "./GetUserBikeDisplay";
import DeleteUserBike from './DeleteUserBike'
import UpdateUserBike from './UpdateUserBike'
import APIURL from '../../helpers/environment'
import Paper from '@material-ui/core/Paper';



interface State {
  userbike: Array<userBikeInterface>;
  
 
};

interface Props {
  token: string | null;
  // classes: any;
}
interface userBikeInterface {
  make: string,
  model: string,
  year: string;
  color: string;
  size: string;
  tireSize: string;
  userInput: string;
  id: number;
  userId : number,
  role: "user" | "admin"
  user: {
    role: "user"| "admin"
  }
}

class GetUserBike extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      userbike: [],
      
    };
  }

  fetchedUserBike() {
    fetch(`${APIURL}/userbike/`, {
      method: "GET",
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: `${this.props.token}`,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          userbike: data.getUserBike,
        });
        console.log("response", data.getUserBike);
        console.log('test',this.state.userbike)
      });
  }

  componentDidMount() {
    this.fetchedUserBike();
    console.log('User Bikes' , this.state.userbike)
  }
//   const bottomTokenCheck = () => {
//     return this.props.token === '' ? null : <DeleteUserBike userBikeId={bike.id} token={this.props.token} />
// }

 

  render() {
    const paperStyle = {
      backgroundColor: "green",
      width: "17vw"

    }
    
    return (
      <div>
        <li>
        
        
    <div>

        {this.state.userbike.map((bike: userBikeInterface, index: number) => {
                return(
                  
                    <div key={index} >
                      <Paper style={paperStyle}>
                      <h2>Your {bike.make} {bike.model}</h2>
                        <h3>Make:{bike.make}</h3>
                        <h3>Model:{bike.model}</h3>
                        <h3>Year:{bike.year}</h3>
                        <h3>Color:{bike.color}</h3>
                        <h3>Size:{bike.size}</h3>
                        <h3>Tire Size:{bike.tireSize}</h3>
                        <h3>Comments:{bike.userInput}</h3>
                        {/* <h3>role:{bike.user.role}</h3> */}
                        {/* {this.props.token === "" ? null : <DeleteUserBike userBikeId={bike.id} token={this.props.token}/> } */}
                        {/* <DeleteUserBike userBikeId={bike.id} token={this.props.token}/> */}
                        {bike.userId.toString() === localStorage.getItem('userId') ? <DeleteUserBike userBikeId={bike.id} token={this.props.token} /> : <div/> }
                        {bike.userId.toString() === localStorage.getItem('userId') ? <UpdateUserBike userBikeId={bike.id} token={this.props.token} /> : <div/> }
                        {/* {bike.user.role.toString() === localStorage.getItem('admin') ? <DeleteUserBike userBikeId={bike.id} token={this.props.token} /> : <div/> } */}
                        {/* <UpdateUserBike userBikeId={bike.id} token={this.props.token}/> */}
                        </Paper>
                    </div>
                )
            })} 
       
       </div>

       </li>  
      </div>
      
    );
  }
}


export default GetUserBike;
