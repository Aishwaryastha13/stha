import { useState } from "react";

const Footer = () => {
    const [count,SetCount]=useState(0);
    const [liked, setLiked]=useState(false);

const toggleLike = () => {
    if(liked) {
        setLiked(false);
        SetCount(count - 1);
    } else {
        setLiked(true);
        SetCount(count + 1);
    }
    };
  return (
      <div className="tweet-footer">
        <button className="btn-reply">Reply</button>
        <button className="btn-retweet">Retweet</button>
        <button className={liked ? "btn-like liked" : "btn-like"} onClick={toggleLike}>
          
            {liked ? "unlike" : "Like"}
            </button>
        <button className="btn-share">Share</button>
        <p>likes: {count}</p>
      </div>
    );
  };
  
  export default Footer;