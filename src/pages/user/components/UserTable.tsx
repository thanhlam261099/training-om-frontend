import { Button, Space, Table, notification } from "antd";
import moment from "moment";
import { UserTableContainer } from "../styled/tableContainer.styled";
import instance from "@/pages/utils/axios";
import { EditOutlined, RestOutlined } from "@ant-design/icons";

type Field = {
  email: string;
  username: string;
  roles: [];
  createdAt: Date;
  updatedAt: Date;
};

type TProps = {
  users: Field[];
  loadUser: () => Promise<void>;
  onEditButtonClick: (userId: string) => void;
};
const UserTable = (props: TProps) => {
  const deleteRow = async (id: string) => {
    await instance.delete(`users/${id}`);
    props.loadUser();
    notification.success({
      message: "User deleted",
      description: "The user has been deleted successfully.",
    });
  };

  const columns = [
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "User name",
      dataIndex: "username",
      key: "username",
    },
    {
      title: "Roles",
      dataIndex: "roles",
      key: "roles",
      render: (value: any[], row: any) => {
        return value.map((role) => role.roleName).join(", ");
      },
    },
    {
      title: "Created At",
      dataIndex: "createdAt",
      key: "createdAt",
      render: (text: moment.MomentInput) => moment(text).format("DD/MM/YYYY"),
    },
    {
      title: "Updated At",
      dataIndex: "updatedAt",
      key: "updatedAt",
      render: (text: moment.MomentInput) => moment(text).format("DD/MM/YYYY"),
    },

    {
      title: "Action",
      key: "action",
      render: (_: any, record: any) => (
        <Space size="middle">
          <EditOutlined
            onClick={() => {
              props.onEditButtonClick(record);
            }}
          />
          <RestOutlined onClick={() => deleteRow(record.id)} />
        </Space>
      ),
    },
  ];

  return (
    <div>
      <UserTableContainer>
        <Table
          columns={columns}
          dataSource={props.users}
          pagination={{ pageSize: 10 }}
        />
      </UserTableContainer>
    </div>
  );
};

export default UserTable;
