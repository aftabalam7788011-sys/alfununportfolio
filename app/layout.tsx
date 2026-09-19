import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AL Funun Academy | Learn Today, Earn Tomorrow",
  description: "Practical computer, language and professional skills training at AL Funun Academy. Admissions are now open.",
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
