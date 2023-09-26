import Layout from "@/components/layout";
import { Button, Form, Input } from "antd";
import { useRouter } from "next/router";
import instance from "../../utils/axios";
import Link from "next/link";
import styles from "../style/auth.module.css";

const LoginForm = () => {
  type Field = {
    username: string;
    email: string;
    password: string;
    confirmPassword: string;
  };

  const router = useRouter();

  const register = async (value: Field) => {
    try {
      const response = await instance.post("auth/register", {
        ...value,
      });
      console.log(response.data);
      // alert("ok");
      router.push("/login");
    } catch (error) {
      console.log(error);
      alert("eror");
      return;
    }
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  function validatePassword(rule: any, value: any) {
    if (!value) {
      return Promise.resolve();
    }
    if (value.length < 4) {
      return Promise.reject("Password must have at least 4 characters");
    }
    if (value !== form.getFieldValue("password")) {
      return Promise.reject("Password and confirm password do not match");
    }
    return Promise.resolve();
  }

  const [form] = Form.useForm();

  return (
    <div className={styles.formContainer}>
      <div className={styles.formItem}>
        <Form
          form={form}
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          style={{ maxWidth: 600 }}
          onFinish={register}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item wrapperCol={{ offset: 8 }}>
            <h1>Register</h1>
          </Form.Item>
          <Form.Item
            label="User name"
            name="username"
            rules={[
              { required: true, message: "Please input your user name!" },
            ]}
          >
            <Input placeholder="User name" />
          </Form.Item>
          <Form.Item
            label="Email"
            name="email"
            rules={[
              {
                required: true,
                type: "email",
                message: "Please input valid email!",
              },
            ]}
          >
            <Input placeholder="example@gmail.com" />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
              { validator: validatePassword },
            ]}
          >
            <Input.Password placeholder="Password" />
          </Form.Item>

          <Form.Item
            label="Confirm Password"
            name="confirmPassword"
            rules={[
              { required: true, message: "Please input your password!" },
              { validator: validatePassword },
            ]}
          >
            <Input.Password placeholder="Confirm your password" />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Sign up
            </Button>
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            Already have an account? <Link href={"/auth/login"}>Sign in</Link>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default LoginForm;
