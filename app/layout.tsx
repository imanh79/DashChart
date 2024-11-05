import Providers from "@/components/providers";
import type { Metadata } from "next";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "sonner";
import type { RootLayoutProps } from "@/types";

import "./globals.css";

export const metadata: Metadata = {
  title: "Soren-Test",
  description: "This project is a test by Soren Company!",
  icons: { icon: "/images/logo.png" },
};

export default function RootLayout(props: Readonly<RootLayoutProps>) {
  return (
    <html lang="fa" dir="ltr">
      <body className=" relative text-white">
        <Providers>
          <>
            {props.children}
            <Toaster />
            <Sonner />
          </>
        </Providers>
      </body>
    </html>
  );
}
