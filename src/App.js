import React, { useState, useEffect } from "react";
import Video from "./Video";
import db from "./firebase";
import "./App.css";

function App() {
  const [post, setPost] = useState([]);

  useEffect(() => {
    db.collection("post").onSnapshot((snapshot) =>
      setPost(snapshot.docs.map((doc) => doc.data()))
    );
  }, [post]);
  console.log(post);
  return (
    <div className="app">
      <div className="app__videos">
        {post.map(
          (
            { url, channel, description, song, likes, messages, shares },
            index
          ) => (
            <Video
              url={url}
              channel={channel}
              description={description}
              song={song}
              likes={likes}
              messages={messages}
              shares={shares}
              key={index}
            />
          )
        )}
      </div>
    </div>
  );
}

export default App;
