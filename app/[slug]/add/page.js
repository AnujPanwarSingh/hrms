"use client";
import React, { useState } from "react";
import styles from "./page.module.css";
import {
  Col,
  DatePicker,
  Input,
  Row,
  Segmented,
  Upload,
} from "antd";
import MySelect from "yes/app/components/MySelect";
import Btn from "yes/app/components/Btn";
import { InboxOutlined } from "@ant-design/icons";

const { Dragger } = Upload;

export default function page() {
  const [value, setValue] = useState(1);
  console.log(value);

  const props = {
    name: "file",
    multiple: true,
    action:
      "https://www.mocky.io/v2/5cc8019d300000980a055e76",
    onChange(info) {
      const { status } = info.file;
      if (status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (status === "done") {
        message.success(
          `${info.file.name} file uploaded successfully.`
        );
      } else if (status === "error") {
        message.error(
          `${info.file.name} file upload failed.`
        );
      }
    },
    onDrop(e) {
      console.log("Dropped files", e.dataTransfer.files);
    },
  };

  const optValue = [{ label: "MS-Staff", value: "staff" }];
  const optGender = [
    { label: "Male", value: "male" },
    { label: "Female", value: "female" },
  ];
  return (
    <div className={styles.mainDiv}>
      <Row>
        <Col
          style={
            value == 1
              ? {
                  padding: "20px 50px",
                  background: "#04B0A8",
                  color: "white",
                  cursor: "pointer",
                  borderRadius: "8px 8px 0px 0px",
                }
              : {
                  padding: "20px 50px",
                  background: "#F7F9FE",
                  color: "black",
                  cursor: "pointer",
                }
          }
          value={value}
          onClick={() => setValue(1)}
        >
          <span style={{ fontSize: "14px" }}>
            Add Employee
          </span>
        </Col>
        <Col
          value={value}
          onClick={() => setValue(2)}
          style={
            value == 2
              ? {
                  padding: "20px 50px",
                  background: "#04B0A8",
                  color: "white",
                  cursor: "pointer",
                  borderRadius: "8px 8px 0px 0px",
                }
              : {
                  padding: "20px 50px",
                  background: "#F7F9FE",
                  color: "black",
                  cursor: "pointer",
                }
          }
        >
          <span style={{ fontSize: "14px" }}>
            Bulk Contact
          </span>
        </Col>
      </Row>
      <div
        span={24}
        style={{
          border: "1px solid #04B0A8",
          height: "90%",
          background: "#fff",
        }}
      >
        {value == 1 ? (
          <Row gutter={[10]} style={{ margin: "10px" }}>
            <Col
              span={24}
              style={{
                backgroundColor: "#E5FFFE",
                padding: "10px",
                marginTop: "20px",
                marginBottom: "15px",
              }}
            >
              <span>Single Employee</span>
            </Col>
            <Col span={4}>
              <span>Fisrt Name</span>
              <Input
                placeholder="Name"
                style={{ width: "100%" }}
              />
            </Col>
            <Col span={4}>
              <span>Last Name</span>
              <Input
                placeholder="Last name"
                style={{ width: "100%" }}
              />
            </Col>
            <Col span={4}>
              <span>Date of birth</span>
              <DatePicker style={{ width: "100%" }} />
            </Col>
            <Col span={4}>
              <span>Mobile No</span>
              <Input
                style={{ width: "100%" }}
                placeholder="Mobile no"
              />
            </Col>
            <Col span={4}>
              <MySelect
                label="Contact Type"
                options={optValue}
              />
            </Col>
            <Col span={4}>
              <MySelect
                label="Gender"
                options={optGender}
              />
            </Col>

            <Col span={4} style={{ marginTop: "10px" }}>
              <span>Addhar No</span>
              <Input
                style={{ width: "100%" }}
                placeholder="Addhar no"
              />
            </Col>
            <Col span={24} style={{ marginTop: "20px" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "end",
                }}
              >
                <Btn
                  style={{
                    border: "1px solid #FF3333",
                    color: "#FF3333",
                    fontWeight: "500",
                  }}
                  title="Reset"
                />
                <Btn
                  style={{
                    backgroundColor: "#04B0A8",
                    color: "white",
                    marginLeft: "5px",
                  }}
                  title="Save"
                />
              </div>
            </Col>
          </Row>
        ) : (
          <Row gutter={10} style={{ margin: "10px" }}>
            <Col span={11}>
              <Row>
                <Col
                  span={24}
                  style={{
                    backgroundColor: "#E5FFFE",
                    padding: "10px",
                    marginTop: "20px",
                    marginBottom: "15px",
                  }}
                >
                  <span>Bulk Employee Upload</span>
                </Col>
                <Col span={10}>
                  <MySelect
                    label="Content Type"
                    option={[
                      { label: "MS-STAFF", value: "staff" },
                      {
                        label: "MS-Worker",
                        value: "worker",
                      },
                    ]}
                  />
                </Col>
                <Col
                  span={24}
                  style={{ marginTop: "20px" }}
                >
                  <Dragger {...props}>
                    <p className="ant-upload-drag-icon">
                      <InboxOutlined />
                    </p>
                    <p className="ant-upload-text">
                      Click or drag file to this area to
                      upload
                    </p>
                    <p className="ant-upload-hint">
                      CSV Files
                    </p>
                  </Dragger>
                </Col>
              </Row>
            </Col>

            <Col span={11} offset={2}>
              <Row>
                <Col
                  span={24}
                  style={{
                    backgroundColor: "#E5FFFE",
                    padding: "10px",
                    marginTop: "20px",
                    marginBottom: "15px",
                  }}
                >
                  <span>Bulk Salary Upload</span>
                </Col>

                <Col span={10}>
                  <MySelect
                    label="Content Type"
                    option={[
                      { label: "MS-STAFF", value: "staff" },
                      {
                        label: "MS-Worker",
                        value: "worker",
                      },
                    ]}
                  />
                </Col>
                <Col span={10}>
                  <MySelect
                    label="Structure"
                    option={[
                      { label: "MS-STAFF", value: "staff" },
                      {
                        label: "MS-Worker",
                        value: "worker",
                      },
                    ]}
                  />
                </Col>
                <Col
                  span={24}
                  style={{ marginTop: "20px" }}
                >
                  <Dragger {...props}>
                    <p className="ant-upload-drag-icon">
                      <InboxOutlined />
                    </p>
                    <p className="ant-upload-text">
                      Click or drag file to this area to
                      upload
                    </p>
                    <p className="ant-upload-hint">
                      CSV Files
                    </p>
                  </Dragger>
                </Col>
                <Col
                  span={24}
                  style={{ marginTop: "20px" }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "end",
                    }}
                  >
                    <Btn
                      style={{
                        border: "1px solid #FF3333",
                        color: "#FF3333",
                        fontWeight: "500",
                      }}
                      title="Reset"
                    />
                    <Btn
                      style={{
                        backgroundColor: "#04B0A8",
                        color: "white",
                        marginLeft: "5px",
                      }}
                      title="Save"
                    />
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        )}
      </div>
    </div>
  );
}
