import axios from "axios";
import { useState } from "react";
//import "./createTweet.css";

    const CreateTweet = () => {
        const [tweetContent, setTweetContent] = useState("");
        const [imageUrl, setImageUrl] = useState("");
        const tweetUploader = async () =>{
            try{
            const res = await axios.post(
                "https://react-workshop.todo.fly.dev/posts/",
                {
                content:tweetContent,
                image: imageUrl,
            },
            {
                header:{
                    apikey:"645739317213f63d4355da7d"
                }
            })
            setTweetContent("");
            setImageUrl("");
        }catch(e){
            console.log(e)
        };
    }
        const handleSubmit= ()=>{
            console.log({ tweetContent });
            tweetUploader();
        };
    
    return (
        <div className="tweet-create">
            <input 
            type="text"
            placeholder="imageUrl"
            value={imageUrl}
            required
            onChange={(e) => setImageUrl(e.target.value)}
            />
        <textarea
        id="tweet-text"
        placeholder="what is happening?"
        required
        value={tweetContent}
        onChange={(e) => {
            setTweetContent(e.target.value);
            console.log(tweetContent);
        }}
        />
        <button onClick={handleSubmit}> Tweet </button>
            </div>
    );
};

export default CreateTweet;