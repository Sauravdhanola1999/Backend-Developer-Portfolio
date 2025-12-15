import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Saurav Singh | Backend Developer",
  description:
    "Backend developer portfolio for Saurav Singh Dhanola: Node.js, Express, SQL, MongoDB, Docker, Redis, AWS S3.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
