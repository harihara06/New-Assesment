import React, { Component } from "react";
import Chart from "react-apexcharts";
import tableData from "../Utils/tableData";
import ProfileImage from "../Assests/profile.jpg";
import ProfileOne from "../Assests/profile-one.jpg";
import ProfileTwo from "../Assests/profile-two.jpg";
import ProfileThree from "../Assests/profile-three.jpg";
import video from "../Assests/Empower.mp4";
export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      series: [
        {
          name: "series1",
          data: [31, 40, 28, 51, 42, 109, 100],
        },
        {
          name: "series2",
          data: [11, 32, 45, 32, 34, 52, 41],
        },
      ],
      options: {
        chart: {
          height: 550,
          width: 900,
          type: "area",
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          curve: "smooth",
        },
        xaxis: {
          type: "datetime",
          categories: [
            "2018-09-19T00:00:00.000Z",
            "2018-09-19T01:30:00.000Z",
            "2018-09-19T02:30:00.000Z",
            "2018-09-19T03:30:00.000Z",
            "2018-09-19T04:30:00.000Z",
            "2018-09-19T05:30:00.000Z",
            "2018-09-19T06:30:00.000Z",
          ],
        },
        chart: {
          width: "100%",
          toolbar: {
            show: false,
          },
        },
      },
      seriesPie: [44, 55, 41, 25],
      optionsPie: {
        chart: {
          type: "donut",
        },
        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                width: "200px",
                // height: 100,
              },
              legend: {
                position: "bottom",
              },
            },
          },
        ],
      },
    };
  }
  render() {
    // let localVariable = JSON.parse(localStorage.getItem("sidebar"));
    return (
      <div className={"container-routes"}>
        <div className="dashboard-content">
          <div className="flexy">
            <label>Overview</label>
            <button>
              Add Funds <div className="additive-icons">+</div>
            </button>
          </div>
          <div className="flexy-dashboard">
            <div className="inherit-content">
              <div className="sub-child-content">
                <div className="chart-content">
                  <div className="statistics">
                    <div>Statistics</div>
                    <select className="select-option">
                      <option>Last 3 month</option>
                      <option>Last 6 month</option>
                      <option>Last 1 year</option>
                    </select>{" "}
                  </div>
                  <div className="char-margin">
                    <Chart
                      options={this.state.options}
                      series={this.state.series}
                      type="area"
                    />
                  </div>
                </div>

                <div className="pie-content">
                  <div className="pt_10">Sales Distribution</div>
                  <div className="pie-flex-content">
                    <div className="specify-chart">
                      <Chart
                        options={this.state.optionsPie}
                        series={this.state.seriesPie}
                        type="donut"
                        className="pie_chart"
                      />
                    </div>
                    <div className="pie-border">
                      {" "}
                      <div className="flexy-pie ml-18">
                        <div className="flex-dot">
                          <div className="dot bg-blue"></div>
                          <label className="pie-name">France</label>
                          <label className="pie-value">4200 Sales</label>
                        </div>
                        <div className="flex-dot">
                          <div className="dot bg-pink"></div>
                          <label className="pie-name">Italy</label>
                          <label className="pie-value">4200 Sales</label>
                        </div>
                      </div>
                    </div>

                    <div className="flexy-pie mt_10 ml-27">
                      <div className="flex-dot">
                        <div className="dot bg-yellow"></div>
                        <label className="pie-name">Japan</label>
                        <label className="pie-value">5433 Sales</label>
                      </div>
                      <div className="flex-dot mr-1">
                        <div className="dot bg-voilet"></div>
                        <label className="pie-name">Canada</label>
                        <label className="pie-value">5500 Sales</label>
                      </div>
                      <div></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="sub-child-table">
                <label>Referrer</label>
                <div className="table-content">
                  <table className="table table-bordered datatable">
                    <thead>
                      <tr>
                        <th>Location</th>
                        <th>Views</th>
                        <th>Sales</th>
                        <th>Conversation</th>
                        <th>Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      {tableData.map((data, i) => (
                        <tr>
                          <td>{data.location}</td>
                          <td>{data.view}</td>
                          <td>{data.sale}</td>
                          <td>{data.conversation}</td>
                          <td>{data.total}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="show-more">Show More</div>
              </div>
            </div>
            <div className="inherit-wide">
              <div className="profile-card">
                <div className="profile-center">
                  <div className="user-image">
                    <img src={ProfileImage} className="profile-pic" />
                    <div className="edit-icon"></div>
                  </div>
                  <div className="user-name">Nick Herasimenka</div>
                  <div className="user-location">United States</div>
                  <div className="social-media">
                    <div className="social-icon"></div>
                    <div className="social-icon"></div>
                    <div className="social-icon"></div>
                    <div className="social-icon"></div>
                  </div>
                </div>
                <div className="users-info">
                  <div className="our-flex">
                    <div className="ours-users">Our Users</div>
                    <div className="dot-icon"></div>
                  </div>
                  <div className="user-info-flex">
                    <div className="flex-theni">
                      <img src={ProfileOne} className="info-image" />
                      <div>
                        <div className="info-name">Drew Janes</div>
                        <div className="info-location">United States</div>
                      </div>
                    </div>
                    <div className="info-mobile"> Mobile : 8715674877</div>
                  </div>
                  <div className="user-info-flex mt_20">
                    <div className="flex-theni">
                      <img src={ProfileTwo} className="info-image" />
                      <div>
                        <div className="info-name">David Kanes</div>
                        <div className="info-location">United States</div>
                      </div>
                    </div>
                    <div className="info-mobile"> Mobile : 8715674877</div>
                  </div>
                  <div className="user-info-flex mt_20">
                    <div className="flex-theni">
                      <img src={ProfileThree} className="info-image" />
                      <div>
                        <div className="info-name">Drew Janes</div>
                        <div className="info-location">United States</div>
                      </div>
                    </div>
                    <div className="info-mobile"> Mobile : 8715674877</div>
                  </div>
                </div>
              </div>
              <div className="product">
                <div className="our-flex">
                  <div className="ours-users">Our Users</div>
                  <div className="dot-icon"></div>
                </div>
                <div className="mt_1_5">
                  <video width="100%" controls>
                    <source src={video} type="video/mp4" />
                  </video>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
