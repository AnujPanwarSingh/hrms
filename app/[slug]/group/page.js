"use client";
import React, { useState } from "react";
import styles from "./page.module.css";
import {
  Col,
  Collapse,
  DatePicker,
  Divider,
  Input,
  Row,
  Segmented,
  Upload,
} from "antd";
import MySelect from "yes/app/components/MySelect";
import Btn from "yes/app/components/Btn";
import { InboxOutlined } from "@ant-design/icons";

const { Panel } = Collapse;
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

  const optValue = [
    { label: "Numbering (int)", value: "N" },
    { label: "Percentage (%)", value: "P" },
  ];

  const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;
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
            Group & Headers
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
          <span style={{ fontSize: "14px" }}>Headers</span>
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
              <span>Group Name</span>
            </Col>
            <Col span={4}>
              <span>Group</span>
              <Input
                placeholder="Name"
                style={{ width: "100%" }}
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
                    backgroundColor: "#04B0A8",
                    color: "white",
                  }}
                  title="Save"
                />
              </div>
            </Col>

            <Col
              span={24}
              style={{
                backgroundColor: "#E5FFFE",
                padding: "10px",
                marginTop: "30px",
                marginBottom: "15px",
              }}
            >
              <span>Create Headers</span>
            </Col>
            <Col span={4}>
              <span>Header Name</span>
              <Input
                placeholder="Name"
                style={{ width: "100%" }}
              />
            </Col>
            <Col span={4}>
              <MySelect
                label="Head Formula Based on"
                options={optValue}
              />
            </Col>
            <Col span={4}>
              <MySelect
                label="Head Grouping"
                placeholder="Head Group"
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
            <Divider />
            <Col span={24}>
              <Collapse accordion>
                <Panel
                  showArrow={false}
                  header="Actual Breakup"
                  key="1"
                >
                  <p>Basic</p>
                  <p>Dearness Allowance(DA)</p>
                  <p>House Rent Allowance(HRA)</p>
                </Panel>
                <Panel
                  showArrow={false}
                  header="Employer Contribution"
                  key="2"
                >
                  <p>EPF Contribution</p>
                  <p>Admin Charges</p>
                  <p>Employer ESI</p>
                  <p>Insurance</p>
                </Panel>
                <Panel
                  showArrow={false}
                  header="Employer Contribution"
                  key="3"
                >
                  <p>Employee PF</p>
                  <p>Employee ESI</p>
                </Panel>
              </Collapse>
            </Col>
          </Row>
        )}
      </div>
    </div>
  );
}
