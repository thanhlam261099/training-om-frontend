import { UserTableContainer } from "@/pages/user/styled/tableContainer.styled";
import instance from "@/pages/utils/axios";
import { EditOutlined, RestOutlined } from "@ant-design/icons";
import { Space, Table } from "antd";
import moment from "moment";
import { useState, useEffect } from "react";

type Data = {
  roleName: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
  permissions: [];
};

type Props = {
  data: Data[];
};

const RoleTable = (props: Props) => {
  const [roleData, setRoleData] = useState([]);
  //   const [permissons, setPermission] = useState([]);

  const loadDataTable = async () => {
    try {
      const response = await instance.get("role");
      const roles = response.data.data;
      setRoleData(roles);
      console.log("datarole", roles);
    } catch (error) {
      console.error("Error loading data:", error);
    }
  };

  //   const loadPermission = async () => {
  //     await instance.get("permissions").then((res) => {
  //       const permission = res.data.data;
  //       setPermission(permission);
  //     });
  //   };

  useEffect(() => {
    loadDataTable();
    // loadPermission();
  }, []);
  const columns = [
    {
      title: "Role Name",
      dataIndex: "roleName",
      key: "rolename",
      width: "20%",
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Permissions",
      dataIndex: "permissions",
      key: "permissions",
      render: (value: any[], row: any) => {
        return value.map((role) => role.permissionName).join(", ");
      },
    },

    {
      title: "CreatedAt",
      dataIndex: "createdAt",
      key: "createdAt",
      render: (text: moment.MomentInput) => moment(text).format("DD/MM/YYYY"),
    },

    {
      title: "Action",
      key: "action",
      render: (_: any, record: any) => (
        <Space size="middle">
          <EditOutlined />
          <RestOutlined />
        </Space>
      ),
    },
  ];

  return (
    <div>
      <UserTableContainer>
        <Table
          columns={columns}
          dataSource={roleData}
          pagination={{ pageSize: 10 }}
        />
      </UserTableContainer>
    </div>
  );
};

export default RoleTable;
