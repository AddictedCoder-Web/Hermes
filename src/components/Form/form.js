import React from "react";
import { Button, Form, Input } from "antd";
import HermesTitle from "../../assets/HermesTitle.png";
import HermesLogo from "../../assets/hermesLogo.png";
import { Base64 } from "https://cdn.jsdelivr.net/npm/js-base64@3.7.5/base64.mjs";
const onFinish = (values) => {
  console.log("Success:", values);
};
const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};
const RegisterForm = () => {
  console.log(Base64.encode("123456"));
  return (
    <div className="mt-10">
      <div className="flex flex-wrap justify-center mb-5 text-center">
        <img className="w-[30px] mr-3" src={HermesLogo}></img>
        <img className="w-[100px]" src={HermesTitle}></img>
        <h1 className="w-full mt-5 font-bold">🚀欢迎注册</h1>
      </div>
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 12,
        }}
        style={{
          maxWidth: 600,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="用户账号"
          name="userAccount"
          rules={[
            {
              required: true,
              message: "请输入你的用户账号!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="用户名"
          name="username"
          rules={[
            {
              required: true,
              message: "请输入你的用户名!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="密码"
          name="password"
          rules={[
            {
              required: true,
              message: "请输入的密码!",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button htmlType="submit">注册</Button>
        </Form.Item>
      </Form>
    </div>
  );
};
export default RegisterForm;
