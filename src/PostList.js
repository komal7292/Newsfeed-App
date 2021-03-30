import React, { useState, useEffect } from "react";
import newsfeed from "./Images/newsfeed.jpg";
import { Link } from "react-router-dom";

const PostList = () => {
  const [dataPost, setDataPost] = useState([]);

  const postData = () => {
    fetch("http://localhost:3001/posts")
      .then((response) => response.json())
      .then((json) => setDataPost(json));
    // console.log(postData)
  };

  useEffect(() => {
    postData();
  }, []);

  return (
    <React.Fragment>
      <div className="ui container segment">
        <h1 className="ui block header">Create a social media newsfeed</h1>
        <img
          src={newsfeed}
          alt="My newsfeed logo"
          height="70px"
          width="300px"
        />
        <hr />
        <Link to="/form" className="ui blue button">
          Create Post
        </Link>

        <div className="ui relaxed divided list">
          {dataPost.map((item, index) => {
            return (
              <div key={index} className="item">
                <div className="content">
                  <div className="header">
                    <h2>{item.userName}</h2>
                    <div className="header">
                      {item.title}
                      <div className="description">{item.body}</div>
                      <div className="ui buttons">
                        <button className="ui button">Edit Post</button>
                        <div className="or"></div>
                        <button className="ui positive button">
                          Delete Post
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </React.Fragment>
  );
};

export default PostList;
