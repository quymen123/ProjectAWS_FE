"use client";

import { useAppDispatch, useAppSelector } from "@/stores/store";
import style from "./home.module.css";
import { logout } from "@/stores/authSlice";
import { useRouter } from "next/navigation";

export default function Home() {
  const { user } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  const router = useRouter();

  const handleLogout = () => {
    dispatch(logout());
    router.push("/auth/login");
  };

  return (
    <div className={style.container_fluid}>
      <div className={style.background}>
        <div className={style.cube}></div>
        <div className={style.cube}></div>
        <div className={style.cube}></div>
        <div className={style.cube}></div>
        <div className={style.cube}></div>

        <div className={style.logo}>
          <span>AWSProject</span>
        </div>

        <section className={style.header_content}>
          {user && <h1>{`Xin chào ${user?.lastName} ${user?.firstName}`}</h1>}
          <p>
            {" "}
            Đây là project thực hiện việc xây dựng webstite đơn giản bao gồm:
            Đăng nhập, đăng ký, đăng xuất. <br></br>Sử dụng EC2 của AWS Cloud để
            deploy
          </p>
          <button onClick={handleLogout}>Thoát</button>
        </section>
      </div>
    </div>
  );
}
