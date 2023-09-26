import { Space, Table, Tag } from "antd";
import type { ColumnsType } from "antd/es/table";
import { useEffect, useState } from "react";
import instance from "../../utils/axios";
import moment from "moment";

const UserTable = () => {
  const [gridData, setGridData] = useState([]);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const response = await instance.get("users");
    setGridData(response.data.data);
    console.log(response.data.data);
  };

  const columns = [
    {
      title: "No",
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "User name",
      dataIndex: "username",
    },
    {
      title: "Roles",
      dataIndex: "roles",
      render: (value: any[], row: any) => {
        return value.map((role) => role.roleName).join(",");
      },
    },
    {
      title: "Created At",
      dataIndex: "createdAt",
      render: (text: moment.MomentInput) => moment(text).format("DD/MM/YYYY"),
    },
    {
      title: "Updated At",
      dataIndex: "updatedAt",
      render: (text: moment.MomentInput) => moment(text).format("DD/MM/YYYY"),
    },

    {
      title: "Action",
      key: "action",
      render: (_: any, record: any) => (
        <Space size="middle">
          <a>Edit</a>
          <a>Delete</a>
        </Space>
      ),
    },
    // {
    //   title: "isDisable",
    //   dataIndex: "isDisable",
    //   render: (value, row) => {
    //     return value ? "false" : "true";
    //   },
    // },
  ];

  return (
    <div>
      <Table
        columns={columns}
        dataSource={gridData}
        pagination={{ pageSize: 10 }}
      />
    </div>
  );
};

export default UserTable;
