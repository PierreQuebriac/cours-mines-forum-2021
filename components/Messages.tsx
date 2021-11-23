import { formatDistanceToNow } from "date-fns";
import fr from "date-fns/locale/fr";

interface Props {
  body: string;
  author: string;
  date: Date;
  self: boolean;
}

const dateString = (date: Date): string => {
  return date.toISOString().replace("T", " à ").slice(0, -5);
};

const Messages = ({ body, author, date, self }: Props) => {
  let classname;
  if (self) {
    classname = "card text-end border-primary border-2 mb-3 w-50 moi";
  } else {
    classname = "card border-info border-2 mb-3 mr-6 w-50 autre";
  }
  return (
    <div className={classname}>
      <div className="card-body">
        <h5 className="card-title">{author}</h5>
        <h6 className="card-subtitle mb-2 text-muted">
          {formatDistanceToNow(date, { addSuffix: true, locale: fr })}
        </h6>
        <p className="card-text">{body}</p>
      </div>
    </div>
  );
};
export default Messages;
