"use client";
import React, { useEffect, useState } from "react";

// import dayjs from "dayjs";
import dayjs from "dayjs";
import { DatePicker } from "antd";
const { RangePicker } = DatePicker;

export default function MyDateRange({
  setDateRange,
  size,
  spacedFormat,
}) {
  const [searchDateRange, setSearchDateRange] = useState([
    dayjs().subtract(89, "d"),
    dayjs(),
  ]);

  useEffect(() => {
    if (searchDateRange[0] && searchDateRange[1]) {
      const from = searchDateRange[0];
      const to = searchDateRange[1];
      let dash = spacedFormat ? " - " : "-";
      const formattedDate = from + dash + to;
      setDateRange(formattedDate);
    }
  }, [searchDateRange]);
  useEffect(() => {
    const from = dayjs()
      .subtract(89, "d")
      .format("DD-MM-YYYY");
    const to = dayjs().format("DD-MM-YYYY");

    const formattedDate = from + "-" + to;
    setSearchDateRange([from, to]);
  }, []);
  return (
    <RangePicker
      // className="date-picker"
      size={size ? size : "default"}
      style={{
        width: "100%",
        fontSize:
          window.innerWidth <= 1600 ? "0.7rem" : "0.9rem",
      }}
      defaultValue={searchDateRange}
      format="DD-MM-YYYY"
      ranges={{
        Today: [dayjs(), dayjs()],
        Yesterday: [
          dayjs().subtract(1, "day"),
          dayjs().subtract(1, "day"),
        ],
        "Last 7 Days": [dayjs().subtract(7, "d"), dayjs()],
        "This Month": [
          dayjs().startOf("month"),
          dayjs().endOf("month"),
        ],
        "Last Month": [
          dayjs().startOf("month").subtract(1, "month"),
          dayjs().startOf("month"),
        ],
        "Last 90 days": [
          dayjs().subtract(89, "d"),
          dayjs(),
        ],
      }}
      // style={{ height: "38px" }}
      onChange={(e) => {
        setSearchDateRange(
          e.map((item) => {
            return dayjs(item).format("DD-MM-YYYY");
          })
        );
      }}
    />
  );
}
