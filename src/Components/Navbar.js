import React, { Component } from "react";
import ProfileImage from "../Assests/profile.jpg";
import ProfileOne from "../Assests/profile-one.jpg";
import ProfileTwo from "../Assests/profile-two.jpg";
import ProfileThree from "../Assests/profile-three.jpg";
import { AddClassToBody } from "../Utils/Utils";
export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notifyDropDown: false,
      profileDropDown: false,
      sideBar: this.props.props,
    };
  }

  toggleProfileDropDown = (key, inheritKey) => {
    this.setState({
      [key]: !this.state[key],
      [inheritKey]: false,
    });
  };
  handleNavbarWidth = (viewValue) => {
    let { sideBar } = this.state;
    this.setState({
      sideBar: viewValue,
    });
    localStorage.setItem("sidebar", viewValue);
    AddClassToBody();
  };
  render() {
    let { notifyDropDown, profileDropDown, sideBar } = this.state;
    // let localVariable = JSON.parse(localStorage.getItem("sidebar"));
    return (
      <div className="transparent-back">
        <div className="hide-wrap">
          <div className={sideBar === "half" ? "nav-bar" : "nav-bar-inherit"}>
            <div>
              <div className="nav-bar__flex">
                {sideBar === "half" && (
                  <div
                    className="nav-bar__img cursor-point"
                    onClick={() => this.handleNavbarWidth("full")}
                  ></div>
                )}
                {sideBar === "full" && (
                  <div
                    className="nav-bar__img cursor-point"
                    onClick={() => this.handleNavbarWidth("half")}
                  ></div>
                )}

                <div className="nav-bar__flex-inherit">
                  <div className="flexy-search">
                    <div className="search-icon"></div>
                    <input
                      className="input-nav"
                      placeholder="Search transactions, invoices or help"
                    />
                  </div>
                  <div className="profile-flex">
                    <div
                      className="notification-bell"
                      onClick={() =>
                        this.toggleProfileDropDown(
                          "notifyDropDown",
                          "profileDropDown"
                        )
                      }
                    >
                      {!notifyDropDown && <div className="notify-true"></div>}
                    </div>
                    <div
                      className="profile-organized"
                      onClick={() =>
                        this.toggleProfileDropDown(
                          "profileDropDown",
                          "notifyDropDown"
                        )
                      }
                    >
                      <div className="profile-name">John Doe</div>{" "}
                      <div
                        className={
                          profileDropDown ? "arrow-icon rotate" : "arrow-icon"
                        }
                      ></div>
                      <img className="profile-image" src={ProfileImage} />{" "}
                    </div>
                  </div>
                </div>
              </div>{" "}
            </div>
          </div>
          {profileDropDown && (
            <div className="profile-drop">
              <div className="individual-drop">
                <div className="drop-icon"></div>
                <div className="drop-name">Profile</div>
              </div>
              <div className="individual-drop mt-8">
                <div className="drop-icon"></div>
                <div className="drop-name">Billings</div>
              </div>
              <div className="individual-drop mt-8">
                <div className="drop-icon"></div>
                <div className="drop-name">Logout</div>
              </div>
            </div>
          )}
          {notifyDropDown && (
            <div className="notify">
              <div className="profile-drop-notify">
                <div className="user-info-flex">
                  <div className="flex-theni">
                    <img src={ProfileOne} className="info-image" />
                    <div>
                      <div className="info-name">Drew Janes</div>
                      <div className="info-location">
                        Assigned you on call with Hari
                      </div>
                    </div>
                  </div>
                  <div className="info-mobile"> 1 min ago</div>
                </div>
                <div className="user-info-flex mt_20">
                  <div className="flex-theni">
                    <img src={ProfileTwo} className="info-image" />
                    <div>
                      <div className="info-name">David Kanes</div>
                      <div className="info-location">
                        You will have a meeting at 10AM
                      </div>
                    </div>
                  </div>
                  <div className="info-mobile"> 2 min ago</div>
                </div>
                <div className="user-info-flex mt_20">
                  <div className="flex-theni">
                    <img src={ProfileThree} className="info-image" />
                    <div>
                      <div className="info-name">Drew Janes</div>
                      <div className="info-location">
                        Could be able to change the menu
                      </div>
                    </div>
                  </div>
                  <div className="info-mobile"> 10 min ago</div>
                </div>
                <div className="border-thin"></div>
                <div className="show-notify">
                  <div>Show More</div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}
