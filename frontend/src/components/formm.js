import { Button, Checkbox, Form, Input } from "antd";
import React from "react";
import "./App.css";
import { Typography } from "antd";
const { Title } = Typography;

const App = () => {
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div
      className="main"
      style={{
        flexDirection: "column",
        background: "linear-gradient(#1f1c18,#8e0e00)",
        height: "100vh",
      }}
    >
      <div className="image_logo">
        <img src="https://static.currency.com/img/media/eth@2x.png" />
      </div>

      <div className="sub_main">
        <Form
          style={{
            margin: 50,
            paddingRight: 70,
            width: 380,
            maxHeight: 200,
            formStyle: {
              flex: 1,
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            },
          }}
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Title
            className="textLogin"
            style={{
              color: "#FFFFFF",
              marginTop: "-120px",
              marginBottom: "60px",
              marginLeft: "50px",
            }}
            level={2}
          >
            Login
          </Title>
          <Form.Item
            name="username"
            rules={[
              {
                required: true,
                message: "Please input your username!",
              },
            ]}
            style={{
              marginLeft: "50px",
            }}
          >
            <Input
              placeholder="Username"
              style={{
                borderRadius: "10px",
                height: "60px",
                width: "270px",
                marginTop: "-200px",
              }}
            />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
            style={{ marginLeft: "50px" }}
          >
            <Input.Password
              placeholder="Password"
              style={{
                borderRadius: "10px",
                height: "60px",
                width: "270px",
              }}
            />
          </Form.Item>

          <Button
            className="textLogin"
            style={{
              fontSize: "17px",
              paddingBottom: "77px",
              paddingLeft: "55px",
              color: "white",
            }}
            type="text"
          >
            Forget Password?
          </Button>

          <Form.Item
            wrapperCol={{
              offset: 6,
              span: 16,
            }}
          >
            <Button
              className="submitButton"
              htmlType="submit"
              style={{
                scale: "140%",
                borderRadius: "10px",
                backgroundColor: "#e66465",
                borderColor: "#e66465",
                color: "white",
              }}
            >
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default App;
