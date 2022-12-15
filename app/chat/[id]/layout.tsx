import "../styles/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head></head>
      <body>
        <header>
          //Agregar el header con la fotito del contacto su nombre el estado
          actual y un boton que me lleve a entrar a su profile
        </header>
        {children}
      </body>
    </html>
  );
}
