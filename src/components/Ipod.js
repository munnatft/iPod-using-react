import React, { Component } from "react";
import Screen from "./Screen";
import ZingTouch from "zingtouch";
import oneday from "../audio/OneDay.mp3";
import "../index.css";

class Ipod extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: "nowPlaying",
      activePage: "Home",
      enter: 0,
      play: true
    };
  }

  rotateWheel = () => {
    let containerElement = document.getElementById("inner-container");
    let activeRegion = new ZingTouch.Region(containerElement);
    let change = 0;
    let self = this;
    self.state.enter = self.state.enter + 1;

    if (self.state.enter < 2) {
      activeRegion.bind(containerElement, "rotate", function (event) {
        //Perform Operations

        let newAngle = event.detail.distanceFromLast;

        if (newAngle < 0) {
          // on rotating anti-clockwise , state is changing as we traverse the list from top to bottom
          change++;
          if (change === 15) {
            change = 0;
            if (self.state.activePage === "Home") {
              if (self.state.activeItem === "nowPlaying") {
                self.setState({
                  activeItem: "Music"
                });
              } else if (self.state.activeItem === "Music") {
                self.setState({
                  activeItem: "Game"
                });
              } else if (self.state.activeItem === "Game") {
                self.setState({
                  activeItem: "Coverflow"
                });
              } else if (self.state.activeItem === "Coverflow") {
                self.setState({
                  activeItem: "Setting"
                });
              } else if (self.state.activeItem === "Setting") {
                self.setState({
                  activeItem: "nowPlaying"
                });
              }
            }
            // inside the music folder , state is changing as traversing is happened.
            else if (self.state.activePage === "Music") {
              if (self.state.activeItem === "MyMusic") {
                self.setState({
                  activeItem: "Artist"
                });
              } else if (self.state.activeItem === "Artist") {
                self.setState({
                  activeItem: "MyMusic"
                });
              }
            }
          }
        } else {
          // on rotating clockwise , state is changing as we traverse the list from bottom to top.
          change++;
          if (change === 15) {
            change = 0;
            if (self.state.activePage === "Home") {
              if (self.state.activeItem === "nowPlaying") {
                self.setState({
                  activeItem: "Setting"
                });
              } else if (self.state.activeItem === "Setting") {
                self.setState({
                  activeItem: "Coverflow"
                });
              } else if (self.state.activeItem === "Coverflow") {
                self.setState({
                  activeItem: "Game"
                });
              } else if (self.state.activeItem === "Game") {
                self.setState({
                  activeItem: "Music"
                });
              } else if (self.state.activeItem === "Music") {
                self.setState({
                  activeItem: "nowPlaying"
                });
              }
            }
            // inside the music folder , state is changing as traversing is happened.
            else if (self.state.activePage === "Music") {
              if (self.state.activeItem === "MyMusic") {
                self.setState({
                  activeItem: "Artist"
                });
              } else if (self.state.activeItem === "Artist") {
                self.setState({
                  activeItem: "MyMusic"
                });
              }
            }
          }
        }
      });
    }
  };

  changePage = () => {
    if (this.state.activeItem === "Music") {
      this.setState({
        activeItem: "MyMusic",
        activePage: this.state.activeItem
      });
    } else if (this.state.activeItem === "nowPlaying") {
      this.setState({
        activeItem: "nowPlaying",
        activePage: "MyMusic"
      });
    } else {
      this.setState({
        activeItem: this.state.activeItem,
        activePage: this.state.activeItem
      });
    }
  };

  changePageToHomeScreen = () => {
    if (
      this.state.activeItem === "MyMusic" ||
      this.state.activeItem === "Artist"
    ) {
      this.setState({
        activeItem: "Music",
        activePage: "Home"
      });
    } else {
      this.setState({
        activeItem: this.state.activeItem,
        activePage: "Home"
      });
    }
  };

  toggle = () => {
    if (this.state.activePage === "MyMusic") {
      if (this.state.play === true) {
        this.state.audio.pause();
        this.setState({
          play: false
        });
      } else {
        this.state.audio.play();
        this.setState({
          play: true
        });
      }
    }
  };

  componentDidMount() {
    let audio = document.getElementsByClassName("audio-element")[0];
    this.setState({
      audio: audio
    });
  }

  render() {
    return (
      <div style={styles.ipodContainer}>
        <audio className="audio-element">
          <source src={oneday}></source>
        </audio>

        <Screen
          activeItem={this.state.activeItem}
          activePage={this.state.activePage}
          audio={this.state.audio}
        />

        <div
          id="inner-container"
          style={styles.wheel}
          onMouseOver={this.rotateWheel}
        >
          <div style={styles.buttonContainer}>
            <div style={styles.menuButton}>
              <i
                onClick={this.changePageToHomeScreen}
                style={styles.image}
                className="fas fa-bars"
              ></i>
            </div>
          </div>
          <div style={styles.buttonContainer}>
            <div style={styles.middleButtons}>
              <i style={styles.image} className="fas fa-fast-backward"></i>
              <div
                onClick={this.changePage}
                className="center-button"
                style={{
                  backgroundImage:
                    "linear-gradient(45deg, #8c8181, transparent)",
                  width: "5rem",
                  height: "5rem",
                  borderRadius: "50%"
                }}
              >
                Select
              </div>
              <i style={styles.image} className="fas fa-fast-forward"></i>
            </div>
          </div>
          <div style={styles.buttonContainer}>
            <div onClick={this.toggle} style={styles.playButton}>
              <i
                onClick={this.toggle}
                style={styles.image}
                className="fas fa-play"
              ></i>
              &nbsp;
              <i
                onClick={this.toggle}
                style={styles.image}
                className="fas fa-pause"
              ></i>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const styles = {
  ipodContainer: {
    height: "33rem",
    width: "20rem",
    backgroundImage: "radial-gradient(rgb(113 152 181 / 98%), rgb(15 44 126))",
    margin: "4rem auto",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    borderRadius: "24px"
  },
  wheel: {
    width: "75%",
    height: "40%",
    margin: "1rem auto",
    backgroundColor: "rgb(25 44 122)",
    borderRadius: "50%",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center"
  },
  buttonContainer: {
    width: "85%",
    height: "30%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center"
  },
  menuButton: {
    alignSelf: "center"
  },
  playButton: {
    alignSelf: "center"
  },
  middleButtons: {
    alignSelf: "center",
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  image: {
    alignSelf: "center",
    fontSize: "1.5rem",
    color: "white"
  }
};

export default Ipod;
