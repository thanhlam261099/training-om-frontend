import Layout from "@/components/layout";
import { GoogleOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input } from "antd";
import Link from "next/link";
import { useRouter } from "next/router";
import { useCallback } from "react";
import instance from "../../utils/axios";
import { setCookie } from "cookies-next";
import styles from "../style/auth.module.css";
const LoginForm = () => {
  type Field = {
    email: string;
    password: string;
  };
  const router = useRouter();

  const login = useCallback(async (value: Field) => {
    try {
      const response = await instance.post("auth/login", {
        ...value,
      });
      const token = response.data.access_token;
      console.log(token);
      setCookie("token", token);
      router.push("/");

      return token;
    } catch (error) {
      alert("eror");
      throw error;
    }
  }, []);

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className={styles.formContainer}>
      <div className={styles.formItem}>
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          style={{ maxWidth: 600 }}
          initialValues={{ remember: true }}
          onFinish={login}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item wrapperCol={{ offset: 8 }}>
            <h1>Login</h1>
          </Form.Item>
          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, message: "Please input your email!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            name="remember"
            valuePropName="checked"
            wrapperCol={{ offset: 8, span: 16 }}
          >
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Sign in
            </Button>
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button>
              <GoogleOutlined />
              Sign in Google
            </Button>
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            Don't have an account? <Link href={"/auth/register"}>Sign up</Link>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default LoginForm;
