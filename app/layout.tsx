import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ViewTasks",
  description:
    "ViewTasks is your go-to task management app designed to streamline your productivity effortlessly. With its intuitive interface, you can easily list, organize, and prioritize your tasks for the day. Whether it's for work, school, or personal errands, ViewTasks helps you stay on top of your responsibilities with customizable categories and reminders. Say goodbye to missed deadlines and hello to a more organized life with ViewTasks.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-black text-gray-400 `}>
        <ClerkProvider>
          {children}
          <Toaster />
        </ClerkProvider>
      </body>
    </html>
  );
}
