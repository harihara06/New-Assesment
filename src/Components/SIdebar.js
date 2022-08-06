import React, { Component } from "react";
import Icons from "../Assests/icons.png";
import "../StyleSheets/style.css";
import SIdebarData from "../Utils/SIdebarData";
export default class Sidebar extends Component {
  render() {
    return (
      <div className="side-bar container">
        <div className="logo-container">A C M A</div>
        <ul className="ul-elements">
          {SIdebarData.map((data, i) => (
            <li>
              <div className="back-img"></div>
              <div className="new-flex">
                <div className="tagName">{data.name}</div>
                <div className="new-tag">{data.newText}</div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
