import { Form } from "antd";
import instance from "../utils/axios";
import ModalCreateUser from "./components/CreateModal";
import ModalEditUser from "./components/EditUserModal";
import UserTable from "./components/UserTable";
import { createContext, useEffect, useState } from "react";
import { useRouter } from "next/router";

const User = () => {
  const [user, setUser] = useState<any[]>([]);
  const [selectedUserId, setSelectedUserId] = useState<string>("");
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [form] = Form.useForm();
  const router = useRouter();

  const handleOpenModal = () => {
    setIsModalOpen(true);
    form.getFieldsValue();
  };

  const handleEditButtonClick = (record: any) => {
    setSelectedUserId(record);
    handleOpenModal();
    console.log(record);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedUserId("");
  };

  const loadUser = async () => {
    const response = await instance
      .get("users")
      .then((response) => {
        const users = response.data.data;
        setUser(users);
        console.log(response.data.data);
      })
      .catch((error) => {
        // throw new Error(error.data.message);
      });
  };

  useEffect(() => {
    loadUser();
  }, []);

  return (
    <div>
      <ModalEditUser
        userId={selectedUserId}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        loadUser={function (): Promise<void> {
          throw new Error("Function not implemented.");
        }}
      />
      <ModalCreateUser loadUser={loadUser} />
      <UserTable
        users={user}
        loadUser={loadUser}
        onEditButtonClick={handleEditButtonClick}
      />
    </div>
  );
};
export default User;
