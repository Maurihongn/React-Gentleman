import { useEffect, useState } from "react";
import { serverTimestamp } from "firebase/firestore"; //import this at the top of the Feed.js

import CalendarViewDayIcon from "@mui/icons-material/CalendarViewDay";
import CreateIcon from "@mui/icons-material/Create";
import EventNoteIcon from "@mui/icons-material/EventNote";
import ImageIcon from "@mui/icons-material/Image";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import "./Feed.css";
import { InputOption } from "./InputOption";
import { Post } from "./Post";
import { db } from "../../fireBase/firebase";

const Feed = () => {
  const [posts, setPosts] = useState([]);
  const [input, setInput] = useState("");

  const sendPost = (e) => {
    e.preventDefault();

    db.collection("posts").add({
      name: "Tanmaya",
      description: "Test",
      message: input,
      photoUrl: "",
      timestamp: serverTimestamp(), //this gives the timestamp to the database
    });

    setInput("");
  };

  useEffect(() => {
    db.collection("posts").onSnapshot((snapshot) => {
      console.log(snapshot);
      console.log(snapshot.docs);
      const numberOfPosts = snapshot.docs.length;
      console.log(numberOfPosts);
      setPosts(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
      console.log(posts);
    });
  }, []);

  return (
    <div className="Feed">
      <div className="feed-inputContainer">
        <div className="feed-input">
          <CreateIcon />
          <form>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              type="text"
            />
            <button onClick={sendPost} type="submit">
              Send
            </button>
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
      {posts.map(({ id, data: { name, description, message, photoUrl } }) => (
        <Post
          key={id}
          name={name}
          description={description}
          message={message}
          photoUrl={photoUrl}
        />
      ))}
    </div>
  );
};

export default Feed;
