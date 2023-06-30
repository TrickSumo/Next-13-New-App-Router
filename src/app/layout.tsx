import Header from "./Header";
import "./globals.css";

export const metadata = {
  title: "My TODO APP",
  description: "Learning new reat router",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
