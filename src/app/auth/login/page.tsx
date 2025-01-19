"use client";
import { apiLogin } from "@/apis/authApi";
import AuthForm from "@/components/AuthForm";
import { LoginUser } from "@/interfaces/User";
import { endLoading, login, startLoading } from "@/stores/authSlice";
import { useAppDispatch } from "@/stores/store";
import { Button, Form, FormProps, Input, message, notification } from "antd";
import { useRouter } from "next/navigation";
import React from "react";

function Login() {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const [api, contextHolder] = notification.useNotification();

  const onFinish: FormProps<LoginUser>["onFinish"] = async (values) => {
    dispatch(startLoading());
    const response = await apiLogin(values);
    dispatch(endLoading());
    if (!response.status) {
      api.error({
        message: response.message,
        description: "",
        placement: "topLeft",
      });
      return;
    }

    dispatch(
      login({
        user: response.data?.user,
        isLoggedIn: true,
        accessToken: response.data?.token,
      })
    );
    router.push("/");
  };

  const onFinishFailed: FormProps<LoginUser>["onFinishFailed"] = (
    errorInfo
  ) => {
    console.log("Failed:", errorInfo);
  };

  const handleToRegister = () => {
    router.push("/auth/register");
  };

  return (
    <div>
      {contextHolder}
      <AuthForm formTitle="Đăng nhập">
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
          <Form.Item<LoginUser>
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

          <Form.Item<LoginUser>
            label="Password"
            name="password"
            rules={[{ required: true, message: "Vui lòng nhập mật khẩu!" }]}
          >
            <Input.Password />
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
              Đăng nhập
            </Button>
            <div className="flex items-center justify-center gap-[10px] mt-[10px]">
              <span>Chưa có tài khoản?</span>
              <span
                onClick={handleToRegister}
                className="cursor-pointer font-bold hover:text-[#4096ff]"
              >
                Đăng ký
              </span>
            </div>
          </Form.Item>
        </Form>
      </AuthForm>
    </div>
  );
}

export default Login;
