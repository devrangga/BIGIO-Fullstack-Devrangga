import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import SideBar from "./_components/SideBar";
import Content from "./_components/Content";

const inter = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "FullStack Bigio Devrangga",
  description: "Bismillah Keterima!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="grid min-h-screen w-full grid-cols-[300px_1fr]">
          <SideBar />
          <Content>
            <main className="p-12">{children}</main>
          </Content>
        </div>
      </body>
    </html>
  );
}
