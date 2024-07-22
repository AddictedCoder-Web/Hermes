import React, { useState } from "react";
import { Button, Form, Input, Select, message, Result } from "antd";
import HermesTitle from "../../assets/HermesTitle.png";
import HermesLogo from "../../assets/hermesLogo.png";
import { Base64 } from "https://cdn.jsdelivr.net/npm/js-base64@3.7.5/base64.mjs";
import { http } from "../../utils/http.js";
import { env } from "../../env.js";

export const RegisterForm = (props) => {
  const { Option } = Select;
  const { setModalType } = props;
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [userNameValidateStatus, setUserNameValidateStatus] = useState({});
  const onFinish = (values) => {
    setLoading(true);
    const req = form.getFieldValue();

    http
      .post("http://localhost:3000/api/user/register", req, {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      })
      .then((rsp) => {
        setLoading(false);
        setModalType(3);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
        //可能存在网络错误 todo
        setUserNameValidateStatus({
          validateStatus:
            err.response.data.message === "用户已存在" ? "error" : "",
          errorMsg:
            err.response.data.message === "用户已存在"
              ? err.response.data.message
              : "",
        });
      });
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const onRoleChange = (value) => {
    switch (value) {
      case "visitor":
        form.setFieldsValue({ role: "visitor" });
        break;
      case "projectMember":
        form.setFieldsValue({ role: "projectMember" });
        break;
      case "szuMember":
        form.setFieldsValue({ role: "szuMember" });
        break;
      default:
    }
  };

  const onUserNameChange = () => {
    setUserNameValidateStatus({});
  };

  return (
    <>
      <div className="mt-10">
        <div className="flex flex-wrap justify-center mb-5 text-center">
          <img className="w-[30px] mr-3" src={HermesLogo}></img>
          <img className="w-[100px]" src={HermesTitle}></img>
          <h1 className="w-full mt-5 font-bold">🚀欢迎注册</h1>
        </div>
        <Form
          form={form}
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
          initialValues={{}}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="用户名"
            name="username"
            validateStatus={userNameValidateStatus.validateStatus}
            help={userNameValidateStatus.errorMsg || ""}
            rules={[
              {
                required: true,
                message: "请输入你的用户名!",
              },
            ]}
          >
            <Input onChange={onUserNameChange} />
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
            name="confirm"
            label="再次输入密码"
            dependencies={["password"]}
            hasFeedback
            rules={[
              {
                required: true,
                message: "请再次输入你的密码",
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(new Error("两次输入的密码不一致"));
                },
              }),
            ]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item name="role" label="角色" rules={[{ required: true }]}>
            <Select
              placeholder="请选择你的角色"
              onChange={onRoleChange}
              allowClear
            >
              <Option value="visitor">普通用户</Option>
              <Option value="projectMember">项目管理者</Option>
              <Option value="szuMember">深圳大学学生</Option>
            </Select>
          </Form.Item>

          <div className="w-full flex justify-center">
            <Button
              className="mr-[10px] w-[110px]"
              onClick={() => setModalType(0)}
            >
              返回
            </Button>
            <Button
              htmlType="submit"
              className="ml-[10px] w-[110px]"
              loading={loading}
            >
              注册
            </Button>
          </div>
          <div className="h-[30px]"></div>
        </Form>
      </div>
    </>
  );
};

export const LoginForm = (props) => {
  const { setModalType } = props;
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();
  const onFinish = (values) => {
    setLoading(true);
    const req = form.getFieldValue();
    const success = () => {
      messageApi.open({
        type: "success",
        content: "登陆成功",
      });
    };

    const error1 = () => {
      messageApi.open({
        type: "error",
        content: "账号或密码错误",
      });
    };
    const error2 = () => {
      messageApi.open({
        type: "error",
        content: "该用户名未注册",
      });
    };
    http
      .post("http://localhost:3000/api/user/login", req, {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      })
      .then((rsp) => {
        console.log(rsp);
        setLoading(false);
        if (rsp.data.code === 0) {
          localStorage.setItem("token", rsp.data.data.token);
          localStorage.setItem("username", form.getFieldValue().username);
          window.location.reload();
        } else {
          if (rsp.data.code === 600) {
            error1();
          } else if (rsp.data.code === 601) {
            error2();
          }
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div className="mt-10">
      <div className="flex flex-wrap justify-center mb-5 text-center">
        <img className="w-[30px] mr-3" src={HermesLogo}></img>
        <img className="w-[100px]" src={HermesTitle}></img>
        <span className="w-full mt-5 font-bold" style={{ color: "#FF8C19" }}>
          密码登陆
          <span style={{ color: "#000" }}>｜短信登陆</span>
        </span>
      </div>
      {contextHolder}
      <Form
        form={form}
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
        initialValues={{}}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
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

        <div className="w-full flex justify-center">
          <Button
            className="mr-[10px] w-[110px]"
            onClick={() => setModalType(1)}
          >
            注册
          </Button>
          <Button
            htmlType="submit"
            className="ml-[10px] w-[110px]"
            loading={loading}
          >
            登陆
          </Button>
        </div>
        <div className="h-[30px]"></div>
      </Form>
    </div>
  );
};

export const SuccessResult = (props) => {
  const { setModalType } = props;
  return (
    <Result
      status="success"
      title="注册成功!"
      subTitle="请返回登陆界面进行登陆"
      extra={[
        <Button htmlType="submit" onClick={() => setModalType(0)}>
          去登陆
        </Button>,
      ]}
    />
  );
};
