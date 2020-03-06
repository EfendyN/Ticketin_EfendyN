import React, { Component } from "react";
import "./css/Content.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel, Row, Col } from "react-bootstrap";
import { Paper, Container, Grid } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import Tabs from "./tabs";
import iklan1 from "../img/iklan1.svg";
import iklan2 from "../img/iklan2.svg";

const styles = theme => ({
  kotak: {
    position: "relative",
    bottom: "50px"
  }
});

class Content extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className="body">
        <div className="container1">
          <div className="content">
            <h1>Selamat Pagi, Ticket Seekers!</h1>
            <h3>
              Ingin Pulkam dengan Good Deal?
              <br />
              Masuk atau Daftar Sekarang !!
            </h3>
          </div>
          <Carousel>
            <Carousel.Item>
              <img className="d-block w-100" src={iklan1} alt="First slide" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={iklan2} alt="Third slide" />
            </Carousel.Item>
          </Carousel>
        </div>
        <div>
          <Container maxWidth="md" className={classes.kotak}>
            <Grid Container spacing={0}>
              <Grid items xs={12} flow>
                <Paper className={classes.paperList}>
                  <Tabs />
                </Paper>
              </Grid>
            </Grid>
          </Container>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Content);
