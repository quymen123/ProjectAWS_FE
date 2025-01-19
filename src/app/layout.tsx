import type { Metadata } from "next";
import "./globals.css";
import DefaultLayout from "@/layouts/DefaultLayout";
import StoreProvider from "@/stores/provider";

export const metadata: Metadata = {
  title: "ProjectAWS",
  description: "ProjectAWS app use AWS cloud to deploy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <StoreProvider>
          <DefaultLayout>{children}</DefaultLayout>
        </StoreProvider>
      </body>
    </html>
  );
}
