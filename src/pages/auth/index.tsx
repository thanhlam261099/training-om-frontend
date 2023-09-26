import React, { useEffect } from "react";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input } from "antd";
import {
  FormContainer,
  LoginContainer,
  ImageContainer,
  FlexContainer,
} from "./styles/Login.style";

const Login = () => {
  return (
    <FlexContainer>
      <LoginContainer>
        <FormContainer>
          <h1>Log in</h1>
          <Form
            name="normal_login"
            initialValues={{
              rememberMe: false,
            }}
          >
            <Form.Item
              name="userId"
              rules={[
                {
                  required: true,
                  message: "Please input your User Id!",
                },
              ]}
            >
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="User ID"
                autoComplete="off"
              />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your Password!",
                },
              ]}
            >
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Password"
              />
            </Form.Item>
            <Form.Item name="rememberMe" valuePropName="checked">
              <Checkbox>
                <span id="checkbox-label">Remember me</span>
              </Checkbox>
            </Form.Item>

            <Form.Item>
              <Button htmlType="submit" block>
                Login with your account
              </Button>
            </Form.Item>
          </Form>
        </FormContainer>
      </LoginContainer>
    </FlexContainer>
  );
};

export default Login;
