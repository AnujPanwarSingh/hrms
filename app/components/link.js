import React from "react";
import "../globals.css";

// Icons
import {
  MdOutlineSpaceDashboard,
  MdOutlineDashboardCustomize,
} from "react-icons/md";
import { ImMakeGroup } from "react-icons/im";
import { TbScreenShare } from "react-icons/tb";
import { FaRegUser } from "react-icons/fa";
import { BsCashStack } from "react-icons/bs";
import { useRouter } from "next/navigation";

// const router=useRouter()
const Link = [
  {
    label: "Dashboard",
    key: "dashboard",
    icon: (
      <MdOutlineSpaceDashboard
        style={{ fontSize: "20px" }}
        className="icn"
      />
    ),
    onClick: () => router.push("/"),
  },
  {
    label: "Master",
    key: "master",
    icon: (
      <MdOutlineDashboardCustomize
        className="icn"
        style={{ fontSize: "20px" }}
      />
    ),

    children: [
      {
        label: "Create Payroll",
        key: "contractors",
        onClick: () => router.push("/Dashboard/contractor"),
      },
      {
        label: "Statuary",
        key: "statuary",
        // icon: (
        //   <UsergroupAddOutlined
        //     style={{ fontSize: "20px" }}
        //     className="icn"
        //   />
        // ),
        onClick: () => router.push("/Dashboard/statuary"),
      },
    ],
  },
  {
    label: "Employees",
    key: "expenses",
    icon: (
      <FaRegUser
        style={{ fontSize: "20px" }}
        className="icn"
      />
    ),

    children: [
      // {
      //   label: "Attendance",
      //   key: "attendance",
      //   onClick: () =>
      //     router.push(
      //       "/Dashboard/attendance"
      //     ),
      // },
      {
        label: "Employees",
        key: "employees",
        onClick: () => router.push("/Dashboard/employees"),
      },
      {
        label: "Separate",
        key: "separate",
        onClick: () => router.push("/Dashboard/separate"),
      },
      {
        label: "Add",
        key: "add",
        onClick: () => router.push("/Dashboard/add"),
      },
      {
        label: "Edit",
        key: "edit",
        onClick: () =>
          router.push("/Dashboard/view_employee"),
      },
      {
        label: "Employee Status",
        key: "empstatus",
        onClick: () => router.push("/Dashboard/status"),
      },
    ],
  },
  // {
  //   label: "Edit Employee",
  //   key: "view-employee",
  //   icon: (
  //     <UserAddOutlined
  //       style={{ fontSize: "20px" }}
  //       className="icn"
  //     />
  //   ),
  //   onClick: () =>
  //     router.push(
  //       "/Dashboard/view_employee"
  //     ),
  // },
  {
    label: "Group & Header",
    key: "group-header",
    icon: (
      <ImMakeGroup
        style={{ fontSize: "20px" }}
        className="icn"
      />
    ),
    onClick: () => router.push("/Dashboard/group"),
  },
  // {
  //   label: "Payroll",
  //   key: "payroll",
  //   icon: (
  //     <PayCircleOutlined
  //       style={{ fontSize: "20px" }}
  //       className="icn"
  //     />
  //   ),
  //   onClick: () =>
  //     router.push("/Dashboard/payroll"),
  // },
  {
    label: "Assets",
    key: "assets",
    icon: (
      <TbScreenShare
        style={{ fontSize: "20px" }}
        className="icn"
      />
    ),
    onClick: () => router.push("/Dashboard/asset"),
  },
  {
    label: "Payrolls",
    key: "payroll",
    icon: (
      <BsCashStack
        style={{ fontSize: "20px" }}
        className="icn"
      />
    ),
    children: [
      {
        label: "Payroll Check",
        key: "payroll_check",
        onClick: () => router.push("/Dashboard/payroll"),
      },
      {
        label: "Pay Slip",
        key: "payslip",
        onClick: () => router.push("/Dashboard/payslip"),
      },
      {
        label: "EPF/ESCI",
        key: "epf",
        onClick: () => router.push("/Dashboard/epf"),
      },
    ],
  },
];

export default Link;
