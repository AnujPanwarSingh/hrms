"use client";
import { Input, Button } from "antd";
import Link from "next/link";
import styles from "./page.module.css";
import React, { useState } from "react";
import { UserOutlined } from "@ant-design/icons";
import { Col, Row, Image } from "antd";
import { useRouter } from "next/navigation";

const page = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const handleFunction = () => {
    console.log(name, password);
  };
  return (
    <div className={styles.mainDiv}>
      <Row style={{ height: "100%" }}>
        <Col span={9}>
          <Row
            style={{ height: "100%" }}
            justify="space-around"
            align="middle"
          >
            <Col span={24}>
              <div
                style={{
                  textAlign: "center",
                  margin: "auto",
                }}
              >
                <Image width={200} src="./MainLogo.svg" />
              </div>
            </Col>
            <Col span={24}>
              <div className={styles.mainTitle}>
                <span
                  onClick={() => router.push("/dashboard")}
                >
                  The simplest way to manage your workforce.
                </span>
              </div>
            </Col>
            <Col span={24}>
              <div
                style={{
                  textAlign: "center",
                  margin: "auto",
                }}
              >
                <Image width={380} src="./loginGroup.svg" />
              </div>
            </Col>
          </Row>
        </Col>
        <Col span={15} style={{ background: "#F7F9FE" }}>
          <Row
            style={{ height: "100%" }}
            justify="space-around"
            align="middle"
          >
            {/* <Col span={24}>
              <div
                style={{
                  textAlign: "center",
                  margin: "auto",
                }}
              >
                <p className={styles.heading}>
                  Forgot Paswword
                </p>
                <p>
                  Start managing your employees details.
                </p>
              </div>
            </Col> */}
            {/* <Col span={24}>
           <div
             style={{
               margin: "auto",
               textAlign: "center",
             }}
           >
             <span className={styles.log}>
               Login
             </span>
           </div>
         </Col> */}
            <Col span={24}>
              <div
                style={{
                  margin: "auto",
                  textAlign: "center",
                  width: "30%",
                }}
              >
                <span className={styles.loginText}>
                  Forgot Password
                </span>
                <Input
                  placeholder="Email or mobile no"
                  style={{ marginTop: "20px" }}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  suffix={<UserOutlined />}
                  size="large"
                />
                <Input.Password
                  placeholder="Password"
                  size="large"
                  value={password}
                  onChange={(e) =>
                    setPassword(e.target.value)
                  }
                  style={{
                    marginTop: "5px",
                    //   marginBottom: "15px",
                  }}
                />
                <Input.Password
                  placeholder="OTP"
                  size="large"
                  value={password}
                  onChange={(e) =>
                    setPassword(e.target.value)
                  }
                  style={{
                    marginTop: "5px",
                    //   marginBottom: "15px",
                  }}
                />
                <Input.Password
                  placeholder="Again Password"
                  size="large"
                  value={password}
                  onChange={(e) =>
                    setPassword(e.target.value)
                  }
                  style={{
                    marginTop: "5px",
                    marginBottom: "15px",
                  }}
                />
                <Button
                  block
                  type="primary"
                  onClick={handleFunction}
                >
                  Rest Password
                </Button>
                <Link href={"/login"}>
                  <p
                    // onClick={() => router.push("./main")}
                    className={styles.forgotLink}
                  >
                    I have an account?
                  </p>
                </Link>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default page;
