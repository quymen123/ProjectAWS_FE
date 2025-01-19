"use client";
import { ReactNode, useEffect, useState } from "react";
import AuthLayout from "../AuthLayout";
import { usePathname, useRouter } from "next/navigation";
import { useAppSelector } from "@/stores/store";
import { notification } from "antd";
import Loading from "@/components/Loading";

function DefaultLayout({ children }: { children: ReactNode }) {
  const pathName = usePathname();
  const router = useRouter();
  const { isLoggedIn, loading } = useAppSelector((state) => state.user);
  const [api, contextHolder] = notification.useNotification();

  const checkAuth = () => {
    if (!isLoggedIn && !pathName.startsWith("/auth")) {
      router.push("/auth/login");
    }
  };

  useEffect(() => {
    checkAuth();
  }, [pathName]);

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
