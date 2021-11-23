import type { NextPage } from "next";
import { useState } from "react";
import MessagesList from "../../components/MessagesList";
import NewMessageForm from "../../components/NewMessageForm";

const Forum: NextPage = () => {
  const [pseudo, setPseudo] = useState("");

  const handlePseudoChange = (pseudo: string) => {
    setPseudo(pseudo);
  };

  return (
    <div id="forum-wrapper" className="container-fluid d-flex flex-column  ">
      <div id="titre">
        <h1>Forum des Mines</h1>
      </div>
      <div
        id="message-container"
        className="flex-grow-1 d-flex flex-column rounded  mt-3"
      >
        <MessagesList currentPseudo={pseudo} />
      </div>
      <div id="new-message-container" className="rounded">
        <NewMessageForm onPseudoChange={handlePseudoChange} />
      </div>
    </div>
  );
};

export default Forum;
