import React from "react";
import "./button.css";
import { IoCreateSharp } from "react-icons/io5";
import { BiShow } from "react-icons/bi";
import { Button, ButtonToolbar } from "rsuite";

const CommonButton = ({ title, name, onclick }) => {
  const properties = {
    task: {
      color: "orange",
      Icon: IoCreateSharp,
      handleclick: onclick,
    },
    list: {
      color: "yellow",
      Icon: BiShow,
      handleclick: onclick,
    },
  };

  const { color, Icon, handleclick } = properties[name];

  return (
    <Button
      style={{ zIndex: "0" }}
      onClick={handleclick}
      color={color}
      appearance="primary"
      size="xl"
    >
      <Icon id="btn-title" className="create-logo " />
      <h5 id="btn-title">{title}</h5>
    </Button>
  );
};

export default CommonButton;
