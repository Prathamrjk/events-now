import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
// import { TextField, AppBar } from "material-ui";
import AppBar from "@material-ui/core/AppBar";
import TextField from "@material-ui/core/TextField";
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

class FormPersonalDetails extends Component {
  render() {
    const { values, handleChange,back,continues } = this.props;
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="Enter Personal Details" iconClassNameLeft />
          <TextField
            hintText="Enter Your Occupation"
            floatingLabelText="Occupation"
            onChange={handleChange("occupation")}
            defaultValue={values.occupation}
          />
          <br />
          <TextField
            hintText="Enter Your City"
            floatingLabelText="City"
            onChange={handleChange("city")}
            defaultValue={values.city}
          />
          <br />
          <TextField
            hintText="Enter Your Bio"
            floatingLabelText="Bio"
            onChange={handleChange("bio")}
            defaultValue={values.bio}
          />
          <br />
          
          <ArrowBackIcon
            onClick={back}
            fontSize="large"
            className="nextMenu"
          />
          <ArrowForwardIcon
            onClick={continues}
            fontSize="large"
            className="nextMenu"
          />
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}
export default FormPersonalDetails;