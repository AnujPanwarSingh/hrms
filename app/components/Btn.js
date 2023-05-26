"use client";
import { Button } from "antd";
import React from "react";

export default function Btn({
  //   label,
  title,
  type,
  shape,
  icon,
  size,
  style,
  onClick,
}) {
  return (
    <>
      {/* <span>{label}</span> */}
      <Button
        shape={shape}
        size={size}
        type={type}
        icon={icon}
        style={style}
        onClick={onClick}
      >
        {title}
      </Button>
    </>
  );
}
