import "./App.css";
import Tweet from "./component/Tweet";
import { useEffect, useState } from "react";
import axios from "axios";
import CreateTweet from "./component/createTweet";
import Navbar from "./component/Navbar";

function Home() {
  const [tweets,setTweets] = useState([]);

  const fetchTweets = async () => {
    const posts = await axios.get("https://react-workshop-todo.fly.dev/posts/all",
    {
      headers: {
        apikey:"645739317213f63d4355da7d",
      }
    }
    )
    setTweets(posts.data)
    console.log(posts.data);
  };
  useEffect(() => {
    fetchTweets();
  },[])

  return (
    <>
    <Navbar/>
    <CreateTweet/>
   {tweets.map((element) => {
      return(
        <Tweet name={element.user.fullname}  username={element.user.name} key={element._id} image={element.image} content={element.content}
        avatar={'https://avatars.githubusercontent.com/u/${element.user.githubId}'}
        /> 
      );
    }) } 
      
    </>
  );
}


export default Home;