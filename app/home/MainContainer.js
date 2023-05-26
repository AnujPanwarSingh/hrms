"use client";
import React, { useEffect, useState } from "react";
import Btn from "../components/Btn";
import { Button, Col, Layout, Menu, Row } from "antd";
import moment from "moment";
import "../globals.css";
import { useRouter } from "next/navigation";

import {
  RiMenuFoldLine,
  RiMenuUnfoldLine,
} from "react-icons/ri";

import {
  MdOutlineSpaceDashboard,
  MdOutlineDashboardCustomize,
} from "react-icons/md";
import { ImMakeGroup } from "react-icons/im";
import { TbScreenShare } from "react-icons/tb";
import { FaRegUser } from "react-icons/fa";
import { BsCashStack } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "yes/redux/loginSlice";
import { toast } from "react-toastify";

// Destructor
const { Header, Sider, Content } = Layout;

export default function Main({ children }) {
  const { token, msg } = useSelector((state) => state.user);
  const router = useRouter();
  const dispatch = useDispatch();
  const [collapse, setCollapse] = useState(false);

  const link = [
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
          onClick: () =>
            router.push("/Dashboard/contractor"),
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
          label: "Add Employees",
          key: "add_employees",
          onClick: () => router.push("/employee/add"),
        },
        {
          label: "Employees",
          key: "employees",
          onClick: () =>
            router.push("/Dashboard/employees"),
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
      onClick: () => router.push("/header/group"),
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
      onClick: () => router.push("/asset/newAsset"),
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

  const handleLogout = () => {
    dispatch(logoutUser());
    router.push("./login");
    // toast.success(msg);
  };

  useEffect(() => {
    if (token) {
      router.push("/");
      toast.success(msg);
    } else {
      router.push("/login");
    }
  }, [token]);
  return (
    <Layout className="container">
      {token && (
        <Header
          className="header"
          style={{ backgroundColor: "#fff" }}
        >
          <div className="headerMainDiv">
            <div
              className="btnStyle"
              onClick={() => setCollapse(!collapse)}
            >
              {collapse ? (
                <RiMenuUnfoldLine
                  style={{ fontSize: "28px" }}
                />
              ) : (
                <RiMenuFoldLine
                  style={{ fontSize: "28px" }}
                />
              )}
              <img
                className="imgLogo"
                src="./MainLogo.svg"
              />
            </div>
          </div>
          <div className="secondDiv">
            {moment().format("DD MMM YYYY,ddd")}
            <img
              src="./user.png"
              style={{
                width: "30px",
                marginLeft: "10px",
                cursor: "pointer",
              }}
            />
            <h5 onClick={handleLogout}>Logout</h5>
          </div>
        </Header>
      )}
      <Layout>
        {token && (
          <Sider collapsed={collapse} theme="light">
            <Menu mode="inline" items={link} />
          </Sider>
        )}
        <Content className="content">{children}</Content>
      </Layout>
    </Layout>
  );
}
