import { Button, Form, Input, Modal } from "antd";
import { useState } from "react";

const CreateRoleModal = () => {
  const [form] = Form.useForm();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    form.resetFields();
  };

  

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Add
      </Button>
      <Modal
        title="Create Role"
        open={isModalOpen}
        onCancel={handleCancel}
        maskClosable={false}
        footer={null}
      >
        <Form form={form}>
          <Form.Item
            name="Role name"
            label="Role name"
            rules={[{ required: true, message: "Role name is required!" }]}
            key="rolename"
          >
            <Input />
          </Form.Item>

          <Form.Item name="Description" label="Description" key="description">
            <Input />
          </Form.Item>

          <Form.Item
            name="Permission"
            label="Permission"
            rules={[{ required: true, message: "Permisison is required!" }]}
            key="permission"
          >
            <Input />
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

export default CreateRoleModal;
