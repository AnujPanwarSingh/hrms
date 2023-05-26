"use client";
import styles from "./page.module.css";
import { Col, Row, Image, Carousel } from "antd";
import "./globals.css";

export default function Home() {
  const contentStyle = {
    margin: 0,
    height: "160px",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    background: "#364d79",
  };
  return (
    <div className={styles.homeDiv}>
      <Row
        gutter={10}
        justify="space-between"
        style={{
          background: "#2D4040",
          borderRadius: "16px",
          padding: "10px 20px",
          margin: "5px",
        }}
      >
        <Col span={4} className={styles.mainCol}>
          <div className={styles.colStyle}>
            <img src="./policy.svg" width={"20%"} />
            <span className={styles.title}>Policies</span>
          </div>
        </Col>
        <Col span={4} className={styles.mainCol}>
          <div className={styles.colStyle}>
            <img src="./form.svg" width={"20%"} />
            <span className={styles.title}>Forms</span>
          </div>
        </Col>
        <Col span={4} className={styles.mainCol}>
          <div className={styles.colStyle}>
            <img src="./opening.svg" width={"20%"} />
            <span className={styles.title}>Openings</span>
          </div>
        </Col>
        <Col span={4} className={styles.mainCol}>
          <div className={styles.colStyle}>
            <img src="./directory.svg" width={"20%"} />
            <span className={styles.title}>Directory</span>
          </div>
        </Col>
        <Col span={4} className={styles.mainCol}>
          <div className={styles.colStyle}>
            <img src="./salary.svg" width={"20%"} />
            <span className={styles.title}>
              Salary Slip
            </span>
          </div>
        </Col>
        <Col span={4} className={styles.mainCol}>
          <div className={styles.colStyle}>
            <img src="./attendance.svg" width={"20%"} />
            <span className={styles.title}>Attendance</span>
          </div>
        </Col>
      </Row>

      <Row gutter={10} style={{ margin: "5px" }}>
        <Col
          span={11}
          style={{
            padding: "5px",
            backgroundColor: "#F7F9FE",
            borderRadius: "10px",
            margin: "5px",
          }}
        >
          <Row>
            <Col span={24} style={{ margin: "5px" }}>
              <Image src="./group.svg" width={20} />
              <span>Manage Desk</span>
            </Col>
            <Col span={24} style={{ margin: "10px" }}>
              <Row gutter={10}>
                <Col
                  span={7}
                  style={{
                    border: "1px solid grey",
                    borderRadius: "5px",
                    textAlign: "center",
                    margin: "1px",
                    padding: "5px",
                  }}
                >
                  <div>
                    <h6 style={{ fontSize: "14px" }}>
                      Leave
                    </h6>
                    <span style={{ fontWeight: "bolder" }}>
                      130
                    </span>
                  </div>
                </Col>
                <Col
                  span={7}
                  style={{
                    border: "1px solid grey",
                    borderRadius: "5px",
                    textAlign: "center",
                    margin: "1px",
                    padding: "5px",
                  }}
                >
                  <div>
                    <h6 style={{ fontSize: "14px" }}>
                      Leave
                    </h6>
                    <span style={{ fontWeight: "bolder" }}>
                      130
                    </span>
                  </div>
                </Col>
                <Col
                  span={7}
                  style={{
                    border: "1px solid grey",
                    borderRadius: "5px",
                    textAlign: "center",
                    margin: "1px",
                    padding: "5px",
                  }}
                >
                  <div>
                    <h6 style={{ fontSize: "14px" }}>
                      Leave
                    </h6>
                    <span style={{ fontWeight: "bolder" }}>
                      130
                    </span>
                  </div>
                </Col>
                <Col
                  span={7}
                  style={{
                    border: "1px solid grey",
                    borderRadius: "5px",
                    textAlign: "center",
                    margin: "1px",
                    padding: "5px",
                  }}
                >
                  <div>
                    <h6 style={{ fontSize: "14px" }}>
                      Leave
                    </h6>
                    <span style={{ fontWeight: "bolder" }}>
                      130
                    </span>
                  </div>
                </Col>
                <Col
                  span={7}
                  style={{
                    border: "1px solid grey",
                    borderRadius: "5px",
                    textAlign: "center",
                    margin: "1px",
                    padding: "5px",
                  }}
                >
                  <div>
                    <h6 style={{ fontSize: "14px" }}>
                      Leave
                    </h6>
                    <span style={{ fontWeight: "bolder" }}>
                      130
                    </span>
                  </div>
                </Col>
                <Col
                  span={7}
                  style={{
                    border: "1px solid grey",
                    borderRadius: "5px",
                    textAlign: "center",
                    margin: "1px",
                    padding: "5px",
                  }}
                >
                  <div>
                    <h6 style={{ fontSize: "14px" }}>
                      Leave
                    </h6>
                    <span style={{ fontWeight: "bolder" }}>
                      130
                    </span>
                  </div>
                </Col>
                <Col
                  span={7}
                  style={{
                    border: "1px solid grey",
                    borderRadius: "5px",
                    textAlign: "center",
                    margin: "1px",
                    padding: "5px",
                  }}
                >
                  <div>
                    <h6 style={{ fontSize: "14px" }}>
                      Leave
                    </h6>
                    <span style={{ fontWeight: "bolder" }}>
                      130
                    </span>
                  </div>
                </Col>
                <Col
                  span={7}
                  style={{
                    border: "1px solid grey",
                    borderRadius: "5px",
                    textAlign: "center",
                    margin: "1px",
                    padding: "5px",
                  }}
                >
                  <div>
                    <h6 style={{ fontSize: "14px" }}>
                      Leave
                    </h6>
                    <span style={{ fontWeight: "bolder" }}>
                      130
                    </span>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
        <Col
          span={12}
          style={{
            padding: "5px",
            backgroundColor: "#F7F9FE",
            borderRadius: "10px",
            margin: "5px",
          }}
        >
          <Row>
            <Col span={24} style={{ margin: "5px" }}>
              <Image src="./message.svg" width={20} />
              <span>Messages From Management</span>
            </Col>
            <Col
              span={24}
              style={{
                background: "#E5FFFE",
                padding: "10px",
              }}
            >
              <Carousel>
                <div>
                  <h3 style={contentStyle}>1</h3>
                </div>
                <div>
                  <h3 style={contentStyle}>2</h3>
                </div>
                <div>
                  <h3 style={contentStyle}>3</h3>
                </div>
                <div>
                  <h3 style={contentStyle}>4</h3>
                </div>
              </Carousel>
            </Col>
          </Row>
        </Col>
        <Col
          span={11}
          style={{
            padding: "5px",
            backgroundColor: "#F7F9FE",
            borderRadius: "10px",
            margin: "5px",
          }}
        >
          <Row>
            <Col span={24} style={{ margin: "5px" }}>
              <Image src="./group.svg" width={20} />
              <span>Employee Desk</span>
            </Col>
            <Col span={24} style={{ margin: "10px" }}>
              <Row gutter={10}>
                <Col
                  span={7}
                  style={{
                    border: "1px solid grey",
                    borderRadius: "5px",
                    textAlign: "center",
                    margin: "1px",
                    padding: "5px",
                  }}
                >
                  <div>
                    <h6 style={{ fontSize: "14px" }}>
                      Leave
                    </h6>
                    <span style={{ fontWeight: "bolder" }}>
                      130
                    </span>
                  </div>
                </Col>
                <Col
                  span={7}
                  style={{
                    border: "1px solid grey",
                    borderRadius: "5px",
                    textAlign: "center",
                    margin: "1px",
                    padding: "5px",
                  }}
                >
                  <div>
                    <h6 style={{ fontSize: "14px" }}>
                      Leave
                    </h6>
                    <span style={{ fontWeight: "bolder" }}>
                      130
                    </span>
                  </div>
                </Col>
                <Col
                  span={7}
                  style={{
                    border: "1px solid grey",
                    borderRadius: "5px",
                    textAlign: "center",
                    margin: "1px",
                    padding: "5px",
                  }}
                >
                  <div>
                    <h6 style={{ fontSize: "14px" }}>
                      Leave
                    </h6>
                    <span style={{ fontWeight: "bolder" }}>
                      130
                    </span>
                  </div>
                </Col>
                <Col
                  span={7}
                  style={{
                    border: "1px solid grey",
                    borderRadius: "5px",
                    textAlign: "center",
                    margin: "1px",
                    padding: "5px",
                  }}
                >
                  <div>
                    <h6 style={{ fontSize: "14px" }}>
                      Leave
                    </h6>
                    <span style={{ fontWeight: "bolder" }}>
                      130
                    </span>
                  </div>
                </Col>
                <Col
                  span={7}
                  style={{
                    border: "1px solid grey",
                    borderRadius: "5px",
                    textAlign: "center",
                    margin: "1px",
                    padding: "5px",
                  }}
                >
                  <div>
                    <h6 style={{ fontSize: "14px" }}>
                      Leave
                    </h6>
                    <span style={{ fontWeight: "bolder" }}>
                      130
                    </span>
                  </div>
                </Col>
                <Col
                  span={7}
                  style={{
                    border: "1px solid grey",
                    borderRadius: "5px",
                    textAlign: "center",
                    margin: "1px",
                    padding: "5px",
                  }}
                >
                  <div>
                    <h6 style={{ fontSize: "14px" }}>
                      Leave
                    </h6>
                    <span style={{ fontWeight: "bolder" }}>
                      130
                    </span>
                  </div>
                </Col>
                <Col
                  span={7}
                  style={{
                    border: "1px solid grey",
                    borderRadius: "5px",
                    textAlign: "center",
                    margin: "1px",
                    padding: "5px",
                  }}
                >
                  <div>
                    <h6 style={{ fontSize: "14px" }}>
                      Leave
                    </h6>
                    <span style={{ fontWeight: "bolder" }}>
                      130
                    </span>
                  </div>
                </Col>
                <Col
                  span={7}
                  style={{
                    border: "1px solid grey",
                    borderRadius: "5px",
                    textAlign: "center",
                    margin: "1px",
                    padding: "5px",
                  }}
                >
                  <div>
                    <h6 style={{ fontSize: "14px" }}>
                      Leave
                    </h6>
                    <span style={{ fontWeight: "bolder" }}>
                      130
                    </span>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
        <Col
          span={12}
          style={{
            padding: "5px",
            backgroundColor: "#F7F9FE",
            borderRadius: "10px",
            margin: "5px",
          }}
        >
          <Row>
            <Col span={24} style={{ margin: "5px" }}>
              <Image src="./message.svg" width={20} />
              <span>Wishes And Greetings</span>
            </Col>
            <Col
              span={24}
              style={{
                background: "#E5FFFE",
                padding: "10px",
              }}
            >
              <Carousel>
                <div>
                  <h3 style={contentStyle}>1</h3>
                </div>
                <div>
                  <h3 style={contentStyle}>2</h3>
                </div>
                <div>
                  <h3 style={contentStyle}>3</h3>
                </div>
                <div>
                  <h3 style={contentStyle}>4</h3>
                </div>
              </Carousel>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}
