import { useEffect, useState } from "react";
import RoleTable from "./components/RoleTable";
import instance from "../utils/axios";
import CreateRoleModal from "./components/CreateRoleModal";

const Roles = () => {
  const [roleData, setRoleData] = useState([]);

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

  useEffect(() => {
    loadDataTable();
  }, []);

  return (
    <>
      <CreateRoleModal />
      <RoleTable props={roleData} loadDataTable={loadDataTable} />
    </>
  );
};
export default Roles;
