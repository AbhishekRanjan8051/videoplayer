import React from "react";
import "./player.css";
import { Card } from "react-bootstrap";
import ReactPlayer from "react-player";
const MyPlayer = () => {
  return (
    <>
      <h1>My Player</h1>
      <div className="player">
        <Card>
          <ReactPlayer url="https://youtu.be/gKvXJI7c_vU" controls/>
        </Card>
      </div>
    </>
  );
};

export default MyPlayer;
