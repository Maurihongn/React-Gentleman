import CalendarViewDayIcon from "@mui/icons-material/CalendarViewDay";
import CreateIcon from "@mui/icons-material/Create";
import EventNoteIcon from "@mui/icons-material/EventNote";
import ImageIcon from "@mui/icons-material/Image";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import "./Feed.css";
import { InputOption } from "./InputOption";

const Feed = () => {
  return (
    <div className="Feed">
      <div className="feed-inputContainer">
        <div className="feed-input">
          <CreateIcon />
          <form>
            <input type="text" />
            <button type="submit">Send</button>
          </form>
        </div>
        <div className="feed-inputOptions">
          {/* Input options */}
          <InputOption Icon={ImageIcon} title="Photo" color="#70b5f9" />
          <InputOption Icon={SubscriptionsIcon} title="Video" color="#e7a33e" />
          <InputOption Icon={EventNoteIcon} title="Event" color="#c0cbcd" />
          <InputOption
            Icon={CalendarViewDayIcon}
            title="Write article"
            color="#7fc15e"
          />
        </div>
      </div>
      {/* Posts */}
    </div>
  );
};

export default Feed;
