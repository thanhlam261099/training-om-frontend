import Layout from "@/components/layout";
import { GoogleOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input } from "antd";
import axios from "axios";
import { useRouter } from "next/router";

const LoginForm = () => {
  type Field = {
    email: string;
    password: string;
  };

  const router = useRouter();

  const axiosInstance = axios.create({
    baseURL: "http://localhost:3000/auth",
    headers: {
      "Content-Type": "application/json",
    },
    timeout: 10000,
  });

  const login = async (value: Field) => {
    try {
      const response = await axiosInstance.post("/login", {
        ...value,
      });
      const token = response.data.token;
      console.log(response.data);
      localStorage.setItem("token", token);
      alert("ok");
      router.push("/");

      return token;
    } catch (error) {
      alert("eror");
      throw error;
    }
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Layout>
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
      </Form>
    </Layout>
  );
};

export default LoginForm;
