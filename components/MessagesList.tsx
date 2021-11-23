import Messages from "./Messages";
import useSWR from "swr";
import Props from "./Messages";

interface MessageApi {
  author: string;
  content: string;
  timestamp: number;
}

const fetcher = async (url: string) => {
  let pageIndex = 0;
  let messages: MessageApi[] = [];
  let finished = false;
  while (!finished) {
    let urlWithPage = `${url}?page=${pageIndex}`;
    const response = await fetch(urlWithPage).then((response) =>
      response.json()
    );
    messages = messages.concat(response);
    pageIndex += 1;
    finished = response.length === 0;
  }
  return messages.reverse();
};

interface Props {
  currentPseudo: string;
}

const MessagesList = ({ currentPseudo }: Props) => {
  const { data, error } = useSWR<MessageApi[]>(
    "https://ensmn.herokuapp.com/messages",
    fetcher,
    { refreshInterval: 20000 }
  );
  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  // const messages = [
  //   {
  //     body: "Message",
  //     author: "Pierre",
  //     date: new Date(),
  //     self: true,
  //   },
  //   {
  //     body: "Message2",
  //     author: "Enzo",
  //     date: new Date(),
  //     self: false,
  //   },
  //   {
  //     body: "Message3",
  //     author: "Enora",
  //     date: new Date(),
  //     self: false,
  //   },
  //   {
  //     body: "Message4",
  //     author: "Pierre",
  //     date: new Date(),
  //     self: true,
  //   },
  //   {
  //     body: "Message5",
  //     author: "Paul",
  //     date: new Date(),
  //     self: false,
  //   },
  // ];

  return (
    <>
      {data.map(({ content, author, timestamp }, i) => (
        <Messages
          key={i}
          body={content}
          author={author}
          date={new Date(timestamp)}
          self={currentPseudo === author}
        ></Messages>
      ))}
    </>
  );
};
export default MessagesList;
