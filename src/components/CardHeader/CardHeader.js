import React from "react";
import "./CardHeader.css";
import { Avatar } from "antd";
import { PlusOutlined, DashOutlined } from "@ant-design/icons";

//
const BG_COLORS = [
  "#fde3cf",
  "#f56a00",
  "#87d068",
  "#1677ff",
  "#34e7e4",
  "#ff3f34",
  "#3c40c6",
  "#ffa801",
];

//
const CardHeader = (props) => {
  return (
    <div className="card-header">
      <div className="ch-avtar">
        <Avatar
          size="small"
          style={{
            backgroundColor:
              BG_COLORS[
                Number.parseInt(
                  Math.floor((Math.random() * 10) % BG_COLORS.length)
                )
              ],
          }}
        >
          {props.user.name[0]}
        </Avatar>
      </div>
      <div className="ch-title">
        <span>{props.user.name}</span>
        <span style={{ marginLeft: ".5rem", color: "gray" }}>
          {props.noOfTickets}
        </span>
      </div>
      <div className="ch-btns">
        <div>
          <button className="ant-icon">
            <PlusOutlined />
          </button>
        </div>
        <div>
          <button className="ant-icon">
            <DashOutlined />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardHeader;
