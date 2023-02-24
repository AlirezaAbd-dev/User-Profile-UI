import "./globals.css";
import "../assets/stylesheet.css";

export const metadata = {
  title: "User Profile",
  description: "Generated by AlirezaAbd",
  authors: [{ name: "AlirezaAbd", url: "https://AlirezaAbd-dev.vercel.app" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-sans">{children}</body>
    </html>
  );
}
