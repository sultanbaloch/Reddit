import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import './components/dashboard/dashboard.css'

// function Reddit() {
//   const [posts, setPosts] = useState([])

//   React.useEffect(() => {
//     axios.get(`https://www.reddit.com/r/reactjs.json`)
//       .then(res => {
//         const newPosts = res.data.data.children
//           .map(obj => obj.data);

//         setPosts(newPosts);
//       });
//   },[]);

//   return(

//     <div>
//       <h1>/r/reactjs</h1>
//       <ul>
//         {posts.map(post =>{
//           <li key={post.id}>
//             {post.title}
//             </li>
//         })}
//       </ul>
//     </div>
//   );
// }



ReactDOM.render(

  <App />
  ,
  document.getElementById('root')
);

