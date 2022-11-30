import "../styles/globals.css";
import Header from "../components/header";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head>
        <title>Meta Messenger</title>
      </head>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
