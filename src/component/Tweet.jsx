import Header from "./Header";
import TweetBody from "./TweetBody";
import Footer from "./Footer";

const Tweet = ({name, username, image,content,avatar }) => {
  return (
    <div className="tweet">
      <img
        src="https://placekitten.com/50/50"
        alt="Profile Picture"
        height={50}
        width={50}
      />
      <div className="tweet-content">
        <Header name={name} username={username }/>
        <TweetBody image={image} content={content} />
        <Footer />
      </div>
    </div>
  );
};

export default Tweet;