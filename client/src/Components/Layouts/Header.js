import React, { Component } from "react";
import "./css/Header.css";
import { withStyles } from "@material-ui/core/styles";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  DialogActions,
  Grid
} from "@material-ui/core";

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  buttonRegister: {
    marginRight: theme.spacing(4)
  },
  buttonLogin: {
    marginRight: theme.spacing(5)
  },
  title: {
    flexGrow: 1,
    marginLeft: theme.spacing(5)
  }
});

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalLogin: false,
      modalRegister: false
    };
  }

  openModalLogin = () => {
    this.setState({
      modalLogin: true
    });
  };
  closeModalLogin = () => {
    this.setState({
      modalLogin: false
    });
  };
  openModalRegister = () => {
    this.setState({
      modalRegister: true
    });
  };
  closeModalRegister = () => {
    this.setState({
      modalRegister: false
    });
  };
  render() {
    const { classes } = this.props;

    return (
      <AppBar className="Navbar" color="transparent" position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Ticket-in
          </Typography>
          <Button
            onClick={this.openModalRegister}
            className={classes.buttonRegister}
            color="inherit"
          >
            Register
          </Button>
          <Button
            onClick={this.openModalLogin}
            className={classes.buttonLogin}
            color="inherit"
          >
            Login
          </Button>
          <Dialog
            open={this.state.modalLogin}
            onClose={this.closeModalLogin}
            aria-labelledby="form-dialog-title"
          >
            <DialogTitle id="form-dialog-title">Login</DialogTitle>
            <DialogContent>
              <Grid container direction="column">
                <TextField
                  autoFocus
                  margin="dense"
                  id="outline-basic"
                  label="Username"
                  type="text"
                  variant="outlined"
                />
                <TextField
                  margin="dense"
                  id="outline-basic"
                  label="Password"
                  type="password"
                  variant="outlined"
                />
              </Grid>
            </DialogContent>
            <DialogActions>
              <Button onClick={this.closeModalLogin} color="primary">
                Submit
              </Button>
            </DialogActions>
          </Dialog>
          <Dialog
            open={this.state.modalRegister}
            onClose={this.closeModalRegister}
            aria-labelledby="form-dialog-title"
          >
            <DialogTitle id="form-dialog-title">Register</DialogTitle>
            <DialogContent>
              <Grid container direction="column">
                <TextField
                  autoFocus
                  margin="dense"
                  id="outline-basic"
                  label="Nama Lengkap"
                  type="text"
                  variant="outlined"
                />
                <TextField
                  margin="dense"
                  id="outline-basic"
                  label="Username"
                  type="text"
                  variant="outlined"
                />
                <TextField
                  margin="dense"
                  id="outline-basic"
                  label="Email"
                  type="email"
                  variant="outlined"
                />
                <TextField
                  margin="dense"
                  id="outline-basic"
                  label="Password"
                  type="password"
                  variant="outlined"
                />
              </Grid>
            </DialogContent>
            <DialogActions>
              <Button onClick={this.closeModalRegister} color="primary">
                Submit
              </Button>
            </DialogActions>
          </Dialog>
        </Toolbar>
      </AppBar>
    );
  }
}

export default withStyles(styles)(Header);
