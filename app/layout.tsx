import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ReduxProvider } from "./store/provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Clinicare",
  description:
    "Visit Best Health Clinic for comprehensive healthcare services, expert doctors, personalized treatments, and patient-focused care. Book your appointment today!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body style={{ margin: "0px" }} className={inter.className}>
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  );
}
