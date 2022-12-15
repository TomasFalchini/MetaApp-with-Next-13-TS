import React from "react";
import ChatInput from "../components/ChatInput";
import MessageList from "../components/MessageList";

//en home page voy a tener lista de chats para hablar

export default function HomePage() {
  return (
    <main>
      Listado de usuarios para mandar mensaje, cada uno con un boton que lo
      redirija a chat/id donde id es userReciver.uid
    </main>
  );
}
