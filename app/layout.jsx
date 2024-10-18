import React from "react";
import { ThemeProvider } from "./(components)/theme-provider";
import "./globals.css";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
          <div className="min-h-screen bg-gray-900 font-sans antialiased text-white">
            <main className="container mx-auto p-4">{children}</main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}