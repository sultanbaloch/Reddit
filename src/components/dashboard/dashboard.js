
import React, { useState, useEffect } from 'react';
import axios from 'axios';


function Dashboard() {
  const [state, setState] = useState([])
  React.useEffect(() => {
    axios.get(`https://www.reddit.com/r/reactjs.json`)
      .then(res => {

        const newPosts = res.data.data.children
          .map(obj => obj.data);

        setState(newPosts);
        console.log(newPosts)
      });
  }, []);


  return (
    // <div>
    //   <h1>/r/reactjs</h1>
    //   <ul>
    //     {state.map((post) => {
    //       console.log(post);
    //        return( <li>{post.title}</li>)
    //     })}
    //   </ul>
    // </div>


    <div>
      <div className="container">
        {state.map((posts, index) => {
          return (
            <div classname="App_post" key={index}>
              <div className="post_child">
                <div className="post_left">
                  <p><b>{posts.score}</b></p>
                </div>
                <div className="post_right">
                  <p><span>
                    <a href={posts.url}>{posts.author}</a></span>
                    <br />
                    <span><a href={posts.url}>{posts.title}</a></span></p>
                  <div>{posts.selftext}</div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
export default Dashboard;