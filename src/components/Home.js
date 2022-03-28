import React from "react";
import { ListGroup } from "react-bootstrap";
import Screen from "../img/screen.jpg";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../index.css";

class Home extends React.Component {
  render() {
    return (
      <div style={styles.homeScreen} id="home-screen">
        <div style={styles.menuList} id="menu-list">
          <div style={styles.titleBar}>
            <p style={{ fontWeight: "bold", color: "#431a62" }}>Home - iPod</p>
            <i
              className="fas fa-cog"
              style={{ fontSize: "20px", marginTop: "2px", color: "#660957" }}
            />
          </div>
          <ListGroup style={{ borderRadius: "0", fontFamily: "cursive" }}>
            <ListGroup.Item
              style={{ border: "0", padding: "0.2rem 0.6rem" }}
              className={this.props.activeItem === "nowPlaying" ? "active" : ""}
            >
              Now Playing{" "}
              {this.props.activeItem === "nowPlaying" ? (
                <span style={{ float: "right", fontWeight: "bold" }}>&gt;</span>
              ) : (
                ""
              )}
            </ListGroup.Item>
            <ListGroup.Item
              style={{ border: "0", padding: "0.2rem 0.6rem" }}
              className={this.props.activeItem === "Music" ? "active" : ""}
            >
              Music{" "}
              {this.props.activeItem === "Music" ? (
                <span style={{ float: "right", fontWeight: "bold" }}>&gt;</span>
              ) : (
                ""
              )}
            </ListGroup.Item>
            <ListGroup.Item
              style={{ border: "0", padding: "0.2rem 0.6rem" }}
              className={this.props.activeItem === "Game" ? "active" : ""}
            >
              Game{" "}
              {this.props.activeItem === "Game" ? (
                <span style={{ float: "right", fontWeight: "bold" }}>&gt;</span>
              ) : (
                ""
              )}
            </ListGroup.Item>
            <ListGroup.Item
              style={{ border: "0", padding: "0.2rem 0.6rem" }}
              className={this.props.activeItem === "Coverflow" ? "active" : ""}
            >
              Coverflow{" "}
              {this.props.activeItem === "Coverflow" ? (
                <span style={{ float: "right", fontWeight: "bold" }}>&gt;</span>
              ) : (
                ""
              )}
            </ListGroup.Item>
            <ListGroup.Item
              style={{ border: "0", padding: "0.2rem 0.6rem" }}
              className={this.props.activeItem === "Setting" ? "active" : ""}
            >
              Setting{" "}
              {this.props.activeItem === "Setting" ? (
                <span style={{ float: "right", fontWeight: "bold" }}>&gt;</span>
              ) : (
                ""
              )}
            </ListGroup.Item>
          </ListGroup>
        </div>
        <div style={styles.imageContainer} id="image-container"></div>
      </div>
    );
  }
}

const styles = {
  homeScreen: {
    height: "100%",
    width: "100%",
    display: "flex",
    flexDirecton: "row"
  },
  menuList: {
    height: "100%",
    width: "50%",
    boxShadow: "10px 0px 15px -5px rgba(0,0,0,0.75)",
    zIndex: "1"
  },
  imageContainer: {
    height: "100%",
    width: "50%",
    backgroundImage: `url(${Screen})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    borderRadius: "0 12px 12px 0"
  },
  titleBar: {
    height: "10%",
    width: "100%",
    borderRadius: "12px 0 0 0",
    backgroundImage: "linear-gradient(0deg, rgb(123, 132, 140), transparent)",
    borderBottom: "1px solid #6c757d",
    padding: "1px 5px 10px 8px",
    display: "flex",
    flexDirecton: "row",
    justifyContent: "space-between"
  }
};

export default Home;
