import { ChangeEvent, SyntheticEvent, useState } from "react";
import { mutate } from "swr";

interface Props {
  onPseudoChange: (pseudo: string) => void;
}

const NewMessageForm = ({ onPseudoChange }: Props) => {
  const [pseudo, setPseudo] = useState("");
  const handlePseudoChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPseudo(event.target.value);
    onPseudoChange(event.target.value);
  };

  const [message, setMessage] = useState("");
  const handleMessageChange = (event: ChangeEvent<HTMLTextAreaElement>) =>
    setMessage(event.target.value);

  const handleSubmit = async (event: SyntheticEvent) => {
    // Prevent browser to submit
    event.preventDefault();
    // Validate data
    if (pseudo.length === 0 || message.length === 0) {
      return;
    }
    // Send data
    await fetch("https://ensmn.herokuapp.com/messages", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ username: pseudo, message: message }),
    });
    // Refresh messages
    mutate("https://ensmn.herokuapp.com/messages");

    //Clear state

    setMessage("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className=" border border-primary border-1 rounded"
    >
      <div className="row m-1">
        <div className="form-label my-3 col-sm">
          <span className="input-group-text bg-light">Message</span>
          <textarea
            onChange={handleMessageChange}
            rows={6}
            id="message"
            name="Message"
            placeholder="Ton p'tit mot"
            className="form-control"
            value={message}
            required
          />
        </div>

        <div className="form-label my-3 col-sm">
          <span
            className="input-group-text  bg-light"
            id="inputGroup-sizing-default"
          >
            Pseudo
          </span>
          <input
            type="text"
            id="pseudo"
            name="Pseudo"
            onChange={handlePseudoChange}
            placeholder="Pseudo"
            className="form-control"
            value={pseudo}
            required
          />
          <br />
          <div className="d-grid flex-grow-1">
            <button className="btn btn-secondary" type="submit">
              Envoyer
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};
export default NewMessageForm;
