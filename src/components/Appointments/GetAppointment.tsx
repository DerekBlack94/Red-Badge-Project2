import React, { Component } from "react";
import { Checkbox,Button } from "@material-ui/core";
import{Typography} from "@material-ui/core";
import GetAppointmentDisplay from "./GetAppointmentDisplay"
import {Link} from 'react-router-dom';
import { DataUsageTwoTone } from "@material-ui/icons";
import DeleteAppointment from './DeleteAppointment'
import UpdateAppointment from './UpdateAppointment'
import APIURL from '../../helpers/environment'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Paper from '@material-ui/core/Paper';

interface State  {
  // userBikeId: number;
  userAppointments: Array<appointmentInterface>;
  userId: number,
 
};

interface Props {
  token: string | null;
  
  // bike: any;
}
// Array<{title: string, date: string, user: number, tags: Array<string>: null}>
interface appointmentInterface {
  id: number,
  savedDate: string,
  userInput: string,
  userId : number,
  user: {
    role: "user"| "admin"
  }
}


class GetAppointment extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      // userBikeId: this.props.bike.id,
      userAppointments: [],
      userId: 0,
      
    };
  }

   appointment() {
     fetch(`${APIURL}/appointments/`, {
       method: "GET",
       headers: new Headers({
         "Content-Type": "application/json",
         Authorization: `${this.props.token}`,
        }),
      })
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          userAppointments: data.GetAppointments,
          userId: data.id
        });
        console.log("Appointments: ", data);
        console.log('test',this.state.userAppointments)
        console.log('test2', data)
      });
  }

  

  componentDidMount() {
  
    this.appointment();
    console.log('Appointments State: ', this.state.userAppointments)
  }

  render() {

    const paperStyle = {
      backgroundColor: "green",
      width: "17vw"

    }
    const textStyle = {
      color: "white",
      display: 'flex',
      justifyContent: 'center',
      alignContent: 'center',
    }
    return (
      <div>
          <li>
          
          
          <div>
            
            {this.state.userAppointments.map((appointment: appointmentInterface , index: number) => {
                return(
                    <div key={index} >
                      <Paper style={paperStyle}>
                        <h1 style={textStyle}>Appintment Number:{appointment.id}</h1>
                        <h1 style={textStyle}>Appointments Time{appointment.savedDate}</h1>
                        <h1 style={textStyle}>Comments:{appointment.userInput}</h1>
                        {/* <h1>{appointment.id}</h1> */}
                        {/* {localStorage.getItem('')} */}
                        {/* {appointment.userId.toString() === localStorage.getItem('userId')? <DeleteAppointment appointmentId={appointment.id} token={this.props.token} /> : <div/> } */}
                        {/* <DeleteAppointment appointmentId={appointment.id} token={this.props.token} />
                        <UpdateAppointment appointmentId={appointment.id} token={this.props.token} /> */}

                        {appointment.userId.toString() === localStorage.getItem('userId')? <DeleteAppointment appointmentId={appointment.id} token={this.props.token} /> : <div/> }
                        {appointment.userId.toString() === localStorage.getItem('userId')? <UpdateAppointment appointmentId={appointment.id} token={this.props.token} /> : <div/> }
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

export default GetAppointment;