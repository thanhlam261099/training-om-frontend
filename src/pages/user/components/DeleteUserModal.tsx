import { ExclamationCircleOutlined } from "@ant-design/icons";
import { Button, Modal, Space } from "antd";

const DeleteUser = () => {
  const [modal, contextHolder] = Modal.useModal();

  const confirm = () => {
    modal.confirm({
      title: "Confirm",
      icon: <ExclamationCircleOutlined />,
      content: "Are you sure to delete this user?",
      okText: "Ok",
      cancelText: "Cancel",
    });
  };
  return (
    <>
      <Space>
        <a onClick={confirm}>Delete</a>
      </Space>
      {contextHolder}
    </>
  );
};

export default DeleteUser;
