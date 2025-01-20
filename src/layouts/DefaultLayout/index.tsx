"use client";
import { ReactNode } from "react";
import AuthLayout from "../AuthLayout";
import { usePathname } from "next/navigation";
import { useAppSelector } from "@/stores/store";
import { notification } from "antd";
import Loading from "@/components/Loading";

function DefaultLayout({ children }: { children: ReactNode }) {
  const pathName = usePathname();
  const { loading } = useAppSelector((state) => state.user);
  const [api, contextHolder] = notification.useNotification();

  console.log(api);

  return (
    <>
      {contextHolder}
      {loading && <Loading />}
      {pathName.startsWith("/auth") ? (
        <AuthLayout>{children}</AuthLayout>
      ) : (
        <div>{children}</div>
      )}
    </>
  );
}

export default DefaultLayout;
