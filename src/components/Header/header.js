import React, { useEffect, useRef, useState } from "react";
import { Menu, Image, Button, Modal, Avatar, Space, Popover } from "antd";
import logoURL from "../../assets/hermesLogo.png";
import { Link, useNavigate } from "react-router-dom";
import { BaseModal } from "../Modal/baseModal/baseModal";
import { RegisterForm, LoginForm, SuccessResult } from "../Form/form";
import { UserOutlined, EditOutlined } from "@ant-design/icons";
import { http } from "../../utils/http";
import { getUserInfo } from "../../utils/getUserInfo";
import "./header.css";

const HermesHeader = () => {
  //header导航栏
  const headerArray = [
    { label: <Link to="/">首页</Link>, key: "1" },
    {
      label: <Link to="center">产品中心</Link>,
      key: "2",
    },

    {
      label: <Link to="project">项目组展示</Link>,
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

  const LRModal = () => {
    const [modalType, setModalType] = useState(0);
    return (
      <BaseModal
        ref={ModelRef}
        setModalType={setModalType}
        ELementChildren={
          modalType === 0 ? (
            <LoginForm setModalType={setModalType}></LoginForm>
          ) : modalType === 1 ? (
            <RegisterForm setModalType={setModalType}></RegisterForm>
          ) : (
            <SuccessResult setModalType={setModalType}></SuccessResult>
          )
        }
      ></BaseModal>
    );
  };

  const [userInfo, setUserInfo] = useState({});

  useEffect(() => {
    async function getUser() {
      const data = await getUserInfo();
      setUserInfo(data);
    }
    localStorage.getItem("token") && getUser();
  }, []);

  const ModelRef = useRef();
  const onClick = () => {
    ModelRef.current?.showModal();
  };

  const UnLoginPopoverElement = () => {
    return (
      <>
        <div className="w-full text-center w-[150px] h-[50px]">欢迎登录</div>
        <div className="w-full flex justify-center">
          <Button htmlType="submit" onClick={onClick}>
            登录
          </Button>
        </div>
      </>
    );
  };

  const LoginPopoverElement = () => {
    const logoutClick = () => {
      localStorage.removeItem("token");
      localStorage.removeItem("username");
      window.location.reload();
    };
    return (
      <>
        <div className="w-full flex justify-center flex-wrap pt-[10px]">
          <Avatar
            size="16"
            src={userInfo?.avatar}
            icon={<UserOutlined></UserOutlined>}
          ></Avatar>
          <div className="w-full text-center mt-[10px]">
            {"你好," + " " + userInfo.username}
          </div>
          <div className="w-full flex justify-center my-[20px] editInfo">
            <EditOutlined />
            <span>修改个人信息</span>
          </div>
          <Button htmlType="submit" onClick={logoutClick}>
            退出登录
          </Button>
        </div>
      </>
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
        <Space>
          <div style={{ cursor: "pointer" }}>
            <Popover
              content={
                localStorage.getItem("token") ? (
                  <LoginPopoverElement></LoginPopoverElement>
                ) : (
                  <UnLoginPopoverElement></UnLoginPopoverElement>
                )
              }
            >
              <Avatar
                size="16"
                src={userInfo?.avatar}
                icon={<UserOutlined></UserOutlined>}
              ></Avatar>
            </Popover>
          </div>
        </Space>
        <LRModal></LRModal>
      </div>
    </>
  );
};
export default HermesHeader;
