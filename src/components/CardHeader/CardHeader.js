import React from "react";
import "./CardHeader.css";
import { Avatar } from "antd";
import { PlusOutlined, DashOutlined, UserOutlined } from "@ant-design/icons";

const CardHeader = () => {
  return (
    <div className="card-header">
      <div className="ch-avtar">
        <Avatar size="small" icon={<UserOutlined />} />
      </div>
      <div className="ch-title">
        <span>title</span>
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
