import { Input } from "antd";
import React from "react";

export default function MyInput({
  inputHeading,
  placeholder,
  onChange,
  style,
}) {
  return (
    <div style={style}>
      <span>{inputHeading}</span>
      <Input
        style={{ width: "100%" }}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
}
