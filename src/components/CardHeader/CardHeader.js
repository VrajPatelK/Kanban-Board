import React from "react";
import "./CardHeader.css";
import { PlusOutlined, DashOutlined } from "@ant-design/icons";

//
const CardHeader = (props) => {
  return (
    <div className="card-header">
      {props.children}
      <div className="ch-title">
        <span>{props.title}</span>
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
