import {
  SettingOutlined,
  SolutionOutlined,
  TagOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import Link from "next/link";
import styles from "./layout.module.css";
import { MenuContainer } from "@/styles/menu.styled";

const { Header, Content, Footer } = Layout;

const LayoutApp = ({ children }: any) => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout className="layout">
      <div className="">
        <Header>
          <div className="demo-logo" />
          {/* <div className={styles.headerContainer}> */}
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={["1"]}
            items={[
              {
                key: "1",
                icon: <SolutionOutlined />,
                label: <Link href={"/"}>User Management</Link>,
              },
              {
                key: "2",
                icon: <SettingOutlined />,
                label: <Link href={"/roles"}>Role Management</Link>,
              },
              {
                key: "3",
                icon: <TagOutlined />,
                label: "nav 3",
              },
              {
                key: "4",
                icon: <UserOutlined />,
              },
            ]}
          />

          {/* </div> */}
        </Header>
        <Footer style={{ textAlign: "center" }}></Footer>
      </div>
      {children}
    </Layout>
  );
};

export default LayoutApp;
