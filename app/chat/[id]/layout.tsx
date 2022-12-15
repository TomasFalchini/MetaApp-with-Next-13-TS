import ButtonToProfile from "../../../components/ButtonToProfile";
import "../styles/globals.css";

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { id: string };
}) {
  return (
    <html>
      <head></head>
      <body>
        <header>
          //Agregar el header con la fotito del contacto su nombre el estado
          actual y un boton que me lleve a entrar a su profile
          <ButtonToProfile id={params.id} />
        </header>
        {children}
      </body>
    </html>
  );
}
