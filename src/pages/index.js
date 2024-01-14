//首页拆分为四大部分：header，content(轮播图，六大功能板块)，footer
import HermesHeader from "../components/Header/header";
import HermesContent from "./Index/Content/content";
import HermesFooter from "../components/Footer/footer";
import { Layout, ConfigProvider } from "antd";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Center from "./Center/center";
const { Header, Content, Footer } = Layout;
const IndexPage = () => {
  //antd5中新加的定制主题功能：https://ant.design/docs/react/customize-theme-cn#%E4%BF%AE%E6%94%B9%E4%B8%BB%E9%A2%98%E5%8F%98%E9%87%8F
  return (
    <>
      <ConfigProvider
        theme={{
          //全局token
          token: {
            colorPrimary: "#fcad20",
            borderRadius: 2,
          },
          //组件token
          components: {
            Layout: {
              headerBg: "#ffffff",
              headerHeight: 50,
              colorBgContainer: "#ffffff",
            },
          },
        }}
      >
        <Header
          style={{
            position: "sticky",
            top: 0,
            zIndex: 1,
            width: "100%",
            display: "flex",
            alignItems: "center",
          }}
        >
          <HermesHeader></HermesHeader>
        </Header>

        <Routes>
          <Route index element={<HermesContent></HermesContent>}></Route>
          <Route path="center" element={<Center></Center>}></Route>
        </Routes>

        <HermesFooter></HermesFooter>
      </ConfigProvider>
    </>
  );
};

export default IndexPage;
