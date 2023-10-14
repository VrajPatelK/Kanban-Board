import React from "react";
import "./CardBody.css";
import { InfoOutlined, UserOutlined } from "@ant-design/icons";
import { Avatar, Badge, Checkbox } from "antd";

//
const CardBody = (props) => {
  return (
    <div className="card-body">
      <div className="cb-head">
        <div className="cb-head-id">{props.ticket.id}</div>
        <div className="cb-head-avtar">
          {/* offset={[left, top]} */}
          <Badge dot={true} offset={[0, 20]} color="#dfe6e9" size="default">
            <Avatar size="small" icon={<UserOutlined />} />
          </Badge>
        </div>
      </div>
      <div className="cb-title">
        <Checkbox>{props.ticket.title}</Checkbox>
      </div>
      <div className="cb-footer">
        <div className="cb-footer-icon">
          <span className="span-info-icon">
            <InfoOutlined />
          </span>
        </div>
        <div className="cb-footer-txt">
          <div className="span-txt"></div>
          <span className="txt">Feature Request</span>
        </div>
      </div>
    </div>
  );
};

export default CardBody;
