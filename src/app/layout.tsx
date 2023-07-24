import "./globals.css";
import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import AuthProvider from "@/lib/next-auth/AuthProvider";
// import { Toaster } from "@/components/ui/toaster"; // ? SHADCN TOASTER
import { Toaster } from "react-hot-toast";
import ReactQueryProvider from "@/lib/react-query/ReactQueryProvider";

// const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Admin Dashboard",
  description: "Admin Dashboard Template",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <AuthProvider>
        <body className={poppins.className}>
          <ReactQueryProvider>
            {children}
            {/* <Toaster /> */}
            <Toaster position="bottom-right" reverseOrder={false} />
          </ReactQueryProvider>
        </body>
      </AuthProvider>
    </html>
  );
}
