import React, { Component, MouseEvent } from "react";
import { TextField, Button } from "@material-ui/core";
import APIURL from '../../helpers/environment'

interface State  {
  make: string;
    model: string;
    year: string;
    color: string;
    size: string;
    tireSize: string;
    userInput: string;
    // id: number;
};

interface Props {
  token: string | null;
  userBikeId: number;
  // bikeToUpdate: any;
}

class UpdateUserBike extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
            make: "",
            model: "",
            year: "",
            color: "",
            size: "",
            tireSize: "",
            userInput: "",
            // id: 0,
    };
    this.updateUserBike = this.updateUserBike.bind(this)
  }

  

  handleSubmit = (event: MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
    event.preventDefault();
    fetch(`${APIURL}/userbike/`, {
        method: "PUT",
        headers: new Headers({
            "Content-Type": "application/json",
            Authorization: `${this.props.token}`,
        }),
        body: JSON.stringify({
            userbike:{
                make: this.state.make,
                model: this.state.model,
                year: this.state.year,
                color: this.state.color,
                size: this.state.size,
                tireSize: this.state.tireSize,
                userInput: this.state.userInput

            },
        })
        
    })
    .then((result) => result.json())
    .then((data) => { console.log(data)
        
        console.log(this.props.token)
    })
}

updateUserBike() {
  // const AppId = this.state.appointment.id
  fetch(`${APIURL}/userbike/${this.props.userBikeId}`, {
    method: "PUT",
    headers: new Headers({
      "Content-Type": "application/json",
      Authorization: `${this.props.token}`,
    }),
    body: JSON.stringify({
      userbike:{
        make: this.state.make,
        model: this.state.model,
        year: this.state.year,
        color: this.state.color,
        size: this.state.size,
        tireSize: this.state.tireSize,
        userInput: this.state.userInput

    },
              })
    
  })
    .then((res) => res.json())
    .then((data) => {
      // this.setState({
      //   appointment: data.deleteUserBike,
      // });
      console.log("response", data);
    });
}

  setMake(e: string) {
    this.setState({
      make: e,
    });
  }

  setModel(e: string) {
    this.setState({
      model: e,
    });
  }

  setYear(e: string) {
    this.setState({
      year: e,
    });
  }

  setColor(e: string) {
    this.setState({
      color: e,
    });
  }

  setSize(e: string) {
    this.setState({
      size: e,
    });
  }

  setTireSize(e: string) {
    this.setState({
      tireSize: e,
    });
  }
  setUserInput(e: string) {
    this.setState({
      userInput: e,
    });
  }

  componentDidMount() {
    console.log("UpdateUserBike:");
    
  }

  render() {
    const divStyle = {
      backgroundColor: "white"
    }
    return (
      <div>
        
          <TextField style={divStyle}
            id="outlined-basic"
            label="Make"
            variant="outlined"
            value={this.state.make}
            onChange={(e) => this.setMake(e.target.value)}
          />
          <TextField style={divStyle}
            id="outlined-basic"
            label="model"
            variant="outlined"
            value={this.state.model}
            onChange={(e) => this.setModel(e.target.value)}
          />
          <TextField style={divStyle}
            id="outlined-basic"
            label="Year"
            variant="outlined"
            value={this.state.year}
            onChange={(e) => this.setYear(e.target.value)}
          />
          <TextField style={divStyle}
            id="outlined-basic"
            label="Color"
            variant="outlined"
            value={this.state.color}
            onChange={(e) => this.setColor(e.target.value)}
          />
          <TextField style={divStyle}
            id="outlined-basic"
            label="Bike Size"
            variant="outlined"
            value={this.state.size}
            onChange={(e) => this.setSize(e.target.value)}
          />
          <TextField style={divStyle}
            id="outlined-basic"
            label="Tire Size"
            variant="outlined"
            value={this.state.tireSize}
            onChange={(e) => this.setTireSize(e.target.value)}
          />
          <TextField style={divStyle}
            id="outlined-basic"
            label="what's new"
            variant="outlined"
            value={this.state.userInput}
            onChange={(e) => this.setUserInput(e.target.value)}
          />
        
          <Button variant='contained' onClick={this.updateUserBike}>Update</Button>
      </div>
    );
  }
}

export default UpdateUserBike;
