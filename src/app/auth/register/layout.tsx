import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Đăng ký",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
