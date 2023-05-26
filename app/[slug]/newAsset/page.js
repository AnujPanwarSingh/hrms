"use client";
import React, { useState } from "react";
import styles from "./page.module.css";
import {
  UploadOutlined,
  InfoOutlined,
  QuestionCircleFilled,
  RollbackOutlined,
} from "@ant-design/icons";
import {
  Col,
  Collapse,
  DatePicker,
  Divider,
  Input,
  Row,
  Table,
  Upload,
  Button,
} from "antd";
import MySelect from "yes/app/components/MySelect";
import Btn from "yes/app/components/Btn";

import MyInput from "yes/app/components/MyInput";

const { TextArea } = Input;

export default function page() {
  const [value, setValue] = useState(1);

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

  const dataSource = [
    {
      sno: "HP",
      model_number: "BHDSHBWBHS789",
      serial_code: "85454854646",
      emp_id: "msw001",
      name: "Anuj Panwar",
      action: (
        <span
          style={{
            border: "1px solid #04B0A8",
            padding: "6px",
            borderRadius: "8px",
          }}
        >
          <RollbackOutlined
            style={{ marginRight: "3px" }}
          />
          Return
        </span>
      ),
    },
  ];

  const columns = [
    {
      title: "Asset Name",
      dataIndex: "sno",
      key: "sno",
    },
    {
      title: "Model Number",
      dataIndex: "model_number",
      key: "model_number",
    },
    {
      title: "Serial Number",
      dataIndex: "serial_code",
      key: "serial_code",
    },
    {
      title: "Emp ID",
      dataIndex: "emp_id",
      key: "emp_id",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },

    {
      title: "Action",
      dataIndex: "action",
      key: "action",
    },
  ];
  const underWarranty = [
    { label: "Yes", value: "y" },
    { label: "No", value: "n" },
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
            New Asset
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
            All Asset
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
            <Col span={4}>
              <MyInput
                inputHeading="Allocated To"
                placeholder="Allocated To"
              />
            </Col>
            <Col span={4}>
              <MySelect
                label="Allocated Group"
                options={underWarranty}
              />
            </Col>
            <Col span={4}>
              <MyInput
                inputHeading="Asset Name"
                placeholder="Asset Name"
              />
            </Col>
            <Col span={4}>
              <span>Assign Date</span>
              <DatePicker style={{ width: "100%" }} />
            </Col>

            <Col span={4}>
              <MyInput
                inputHeading="Model"
                placeholder="Model"
              />
            </Col>
            <Col span={4}>
              <MyInput
                inputHeading="Serial Number"
                placeholder="Serial Number"
              />
            </Col>
            <Col span={4} style={{ marginTop: "10px" }}>
              <span>Date of Purchase</span>
              <DatePicker style={{ width: "100%" }} />
            </Col>
            <Col span={4} style={{ marginTop: "10px" }}>
              <MyInput
                inputHeading="Invoice No"
                placeholder="Invoice No"
              />
            </Col>
            <Col span={4} style={{ marginTop: "10px" }}>
              <MyInput
                inputHeading="Current Asset Value"
                placeholder="Current Asset Value"
              />
            </Col>

            <Col span={8} style={{ marginTop: "10px" }}>
              <span>Remark</span>
              <TextArea
                cols={10}
                rows={4}
                placeholder="Description"
              />
            </Col>

            <Col span={4} style={{ marginTop: "10px" }}>
              <MySelect
                label="Is Under Warranty?"
                options={underWarranty}
              />
            </Col>

            <Col span={6}>
              <Upload>
                <Button
                  style={{ width: "100%" }}
                  icon={<UploadOutlined />}
                >
                  Upload
                </Button>
              </Upload>
            </Col>

            <Col span={24} style={{ marginTop: "50px" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "end",
                }}
              >
                <Btn
                  style={{
                    backgroundColor: "#04B0A8",
                    color: "white",
                  }}
                  title="Save"
                />
              </div>
            </Col>

            {/* <Col span={24} style={{ marginTop: "20px" }}>
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
            </Col> */}
          </Row>
        ) : (
          <>
            <Row gutter={10} style={{ margin: "10px" }}>
              <Col span={4}>
                <MySelect
                  placeholder="Assets Type"
                  option={[
                    { label: "Laptop", value: "laptop" },
                    {
                      label: "Keyboard",
                      value: "keyboard",
                    },
                    { label: "Mouse", value: "mouse" },
                    {
                      label: "Mouse Pad",
                      value: "mouse_pad",
                    },
                    {
                      label: "Monitor",
                      value: "monitor",
                    },
                    { label: "UPS", value: "ups" },
                    { label: "CPU", value: "cpu" },
                  ]}
                />
              </Col>
              <Col span={2}>
                <Button
                  style={{
                    background: "#04B0A8",
                    color: "#fff",
                    marginLeft: "10px",
                  }}
                >
                  Search
                </Button>
              </Col>
              <Col span={2} offset={16}>
                <Button
                  style={{
                    background: "#04B0A8",
                    color: "#fff",
                  }}
                >
                  <InfoOutlined />
                </Button>
                <Button
                  style={{
                    background: "#04B0A8",
                    color: "#fff",
                    marginLeft: "10px",
                  }}
                >
                  <QuestionCircleFilled />
                </Button>
              </Col>

              <Col span={24} style={{ marginTop: "10px" }}>
                <Table
                  dataSource={dataSource}
                  columns={columns}
                />
              </Col>
            </Row>
          </>
        )}
      </div>
    </div>
  );
}
