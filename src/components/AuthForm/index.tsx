import { ReactNode } from "react";

function AuthForm({
  children,
  formTitle,
}: {
  children: ReactNode;
  formTitle: string;
}) {
  return (
    <div className="overflow-y-scroll p-[20px] bg-white rounded-[4px] w-[90vw] h-max flex items-center justify-center flex-col md:w-[40vw]">
      <h3 className="my-[20px] text-[3em] text-[#4096ff] font-extrabold">
        {formTitle}
      </h3>
      <div className="w-full h-full">{children}</div>
    </div>
  );
}

export default AuthForm;
