import { InputOption } from "../InputOption";
import ThumbUpAltOutlinedIcon from "@mui/icons-material/ThumbUpAltOutlined";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import "./Post.css";
import Avatar from "@mui/material/Avatar";

const Post = ({ name, description, message, photoUrl }) => {
  return (
    <div className="Post">
      <div className="Post__header">
        <Avatar />
        <div className="Post__info">
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
      </div>
      <div className="Post__body">
        <p>{message}</p>
      </div>
      <div className="Post__buttons">
        <InputOption
          Icon={ThumbUpAltOutlinedIcon}
          title={"Like"}
          color={"lightgray"}
        />
        <InputOption
          Icon={ChatOutlinedIcon}
          title={"Comment"}
          color={"lightgray"}
        />
        <InputOption
          Icon={ShareOutlinedIcon}
          title={"Share"}
          color={"lightgray"}
        />
        <InputOption
          Icon={SendOutlinedIcon}
          title={"Send"}
          color={"lightgray"}
        />
      </div>
    </div>
  );
};

export default Post;
