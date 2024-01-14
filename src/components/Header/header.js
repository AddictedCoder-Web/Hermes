import React, { useRef } from "react";
import { Menu, Image, Button, Modal } from "antd";
import logoURL from "../../assets/hermesLogo.png";
import { Link, useNavigate } from "react-router-dom";
import { BaseModal } from "../Modal/baseModal/baseModal";
import RegisterForm from "../Form/form";

const HermesHeader = () => {
  const ModelRef = useRef();
  const registerClick = () => {
    ModelRef.current?.showModal();
  };
  //header导航栏
  const headerArray = [
    { label: <Link to="/">首页</Link>, key: "1" },
    {
      label: <Link to="center">产品中心</Link>,
      key: "2",
    },

    {
      label: <Link to="show">项目组展示</Link>,
      key: "3",
    },

    {
      label: <Link to="community">Hermes社区</Link>,
      key: "4",
    },

    {
      label: <Link to="service">服务中心</Link>,
      key: "5",
    },

    {
      label: <Link to="about">关于我们</Link>,
      key: "6",
    },
  ];

  const clickItem = (e) => {
    sessionStorage.setItem("curPageKey", e.key);
  };

  const RegisterModal = () => {
    return (
      <BaseModal
        ref={ModelRef}
        ELementChildren={<RegisterForm></RegisterForm>}
      ></BaseModal>
    );
  };

  return (
    <>
      <div style={{ flex: 1 }} className="flex justify-center">
        <img src={logoURL} width={30}></img>
      </div>
      <Menu
        style={{
          flex: 6,
        }}
        mode="horizontal"
        defaultSelectedKeys={[
          `${
            sessionStorage.getItem("curPageKey")
              ? sessionStorage.getItem("curPageKey")
              : "1"
          }`,
        ]}
        onClick={clickItem}
        items={headerArray}
      />
      <div style={{ flex: 1 }}>
        <Button onClick={registerClick}>注册</Button>
        <RegisterModal></RegisterModal>
      </div>
    </>
  );
};
export default HermesHeader;
