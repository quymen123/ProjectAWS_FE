"use client";
import { apiRegister } from "@/apis/authApi";
import AuthForm from "@/components/AuthForm";
import { RegisterUser } from "@/interfaces/User";
import { endLoading, startLoading } from "@/stores/authSlice";
import { useAppDispatch } from "@/stores/store";
import { Button, Form, FormProps, Input, message, notification } from "antd";
import { useRouter } from "next/navigation";
import React from "react";

function Regsiter() {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const [api, contextHolder] = notification.useNotification();

  const onFinish: FormProps<RegisterUser>["onFinish"] = async (values) => {
    dispatch(startLoading());
    const response = await apiRegister(values);
    dispatch(endLoading());
    if (!response.status) {
      api.error({
        message: response.message,
        description: "",
        placement: "topLeft",
      });
      return;
    }
    api.success({
      message: response.message,
      description: "",
      placement: "topLeft",
    });
    router.push("/auth/login");
  };

  const onFinishFailed: FormProps<RegisterUser>["onFinishFailed"] = (
    errorInfo
  ) => {
    console.log("Failed:", errorInfo);
  };

  const handleToLogin = () => {
    router.push("/auth/login");
  };

  return (
    <div>
      {contextHolder}
      <AuthForm formTitle="Đăng ký">
        <Form
          style={{
            width: "100%",
            padding: "20px",
          }}
          name="basic"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          layout="vertical"
        >
          <Form.Item<RegisterUser>
            label="Email"
            name="email"
            rules={[
              {
                required: true,
                type: "email",
                message: "Vui lòng nhập đúng định dạng email!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item<RegisterUser>
            label="Password"
            name="password"
            rules={[{ required: true, message: "Vui lòng nhập mật khẩu!" }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item<RegisterUser>
            label="First Name"
            name="firstName"
            rules={[{ required: true, message: "Vui lòng nhập họ, tên đệm!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item<RegisterUser>
            label="Last Name"
            name="lastName"
            rules={[{ required: true, message: "Vui lòng nhập tên!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label={null}
            style={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <Button type="primary" htmlType="submit">
              Đăng ký
            </Button>
            <div className="flex items-center justify-center gap-[10px] mt-[10px]">
              <span>Đã có tài khoản?</span>
              <span
                onClick={handleToLogin}
                className="cursor-pointer font-bold hover:text-[#4096ff]"
              >
                Đăng nhập
              </span>
            </div>
          </Form.Item>
        </Form>
      </AuthForm>
    </div>
  );
}

export default Regsiter;
