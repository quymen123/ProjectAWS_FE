import { ReactNode } from "react";
import style from "./Auth.module.css";

function AuthLayout({ children }: { children: ReactNode }) {
  return <div className={style.bg}>{children}</div>;
}

export default AuthLayout;
