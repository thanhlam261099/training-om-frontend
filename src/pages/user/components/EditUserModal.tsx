import instance from "@/pages/utils/axios";
import { Button, Form, Input, Modal, Select } from "antd";
import { useState, useEffect } from "react";
import { notification } from "antd";

type TProps = {
  loadUser: () => Promise<void>;
  userId: string;
  isOpen: boolean;
  onClose: () => void;
};

const ModalEditUser = (props: TProps) => {
  type Field = {
    id: string;
    username: string;
    email: string;
    roles: Roles[];
  };

  type Roles = {
    id: string;
    roleName?: string;
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [roles, setRoles] = useState([]);

  const [form] = Form.useForm();

  const handleSaveUser = async (value: Field) => {
    try {
      const roles = value.roles.map((role) => ({ id: role }));

      const payload = {
        username: value.username,
        email: value.email,
        roles: roles,
      };

      const [values] = await Promise.all([form.validateFields()]);
      const { email, userName, roleName } = values;

      await instance.put(`/users/${value.id}`, {
        ...value,
        username: userName,
        email: email,
        roles: roleName,
      });

      setIsModalOpen(false);
      form.resetFields();
      props.loadUser();
      notification.success({
        message: "User saved",
        description: "The user has been saved successfully.",
      });
    } catch (error) {
      console.log(error);
      notification.error({
        message: "Error",
        description: "Failed to save user",
      });
      return;
    }
  };
  const getAllRole = async () => {
    try {
      const response = await instance.get("role");
      const rolesData = response.data.data;
      setRoles(rolesData);
    } catch (error) {
      console.log(error);
      return;
    }
  };

  useEffect(() => {
    getAllRole();
  }, []);

  return (
    <>
      <Modal
        title="Create User"
        open={props.isOpen}
        onCancel={props.onClose}
        maskClosable={false}
        footer={null}
      >
        <Form
          form={form}
          name="nest-messages"
          style={{ maxWidth: 600 }}
          onFinish={handleSaveUser}
        >
          <Form.Item
            name="username"
            label="Name"
            rules={[{ required: true, message: "User name is required!" }]}
            key="name"
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="email"
            label="Email"
            rules={[
              { type: "email", message: "Invalid email format!" },
              { required: true, message: "Email is required!" },
            ]}
            key="email"
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="roles"
            label="Roles"
            rules={[{ required: true, message: "Please select role!" }]}
            key="roles"
          >
            <Select
              mode="multiple"
              style={{ width: "100%" }}
              placeholder="select role"
              optionLabelProp="label"
              options={roles.map((role: Roles) => ({
                label: role.roleName,
                value: role.id,
                key: role.id,
              }))}
              filterOption={false}
            ></Select>
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 10, span: 16 }}>
            <Button type="primary" htmlType="submit">
              save
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default ModalEditUser;
