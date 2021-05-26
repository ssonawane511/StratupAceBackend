/** @format */

import React from "react";
import "./InfoBox.css";

const InfoBox = ({ note, title }) => {
  return (
    <div class='InfoBox'>
      <span>
        <b>{title}</b>
      </span>
      <p>{note}</p>
    </div>
  );
};

export default InfoBox;
