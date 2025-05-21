import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { FaArrowRight } from "react-icons/fa";
import { twMerge } from "tailwind-merge";

const dmSans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PrepBettr",
  description: "AI-powered interview preparation platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={twMerge(dmSans.className, "antialiased")}>
        <div className="bg-black text-white p-3 text-sm text-center cursor-pointer">
          <span className="hidden sm:inline pr-2 opacity-80">
            Ace Every Interview with AI-Powered Precision
          </span>
          <a href="https://prep-bettr.vercel.app/sign-up" target="_blank" rel="noopener noreferrer" className="pr-1 hover:underline">
            Get started today <FaArrowRight className="inline h-2 w-2" />
          </a>
        </div>
        {children}
      </body>
    </html>
  );
}
