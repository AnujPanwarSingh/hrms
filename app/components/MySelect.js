import { Select } from "antd";
import React from "react";

export default function MySelect({
  label,
  options,
  placeholder,
  onSearch,
  defaultValue,
  onChange,
}) {
  return (
    <div>
      <span>{label}</span>
      <Select
        placeholder={placeholder}
        style={{ width: "100%" }}
        options={options}
        onChange={onChange}
        onSearch={onSearch}
        defaultValue={defaultValue}
      />
    </div>
  );
}
