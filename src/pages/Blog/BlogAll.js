import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function BlogAll() {
  const [post, setPost] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => {
        setPost(data)
      })
      .catch(error => console.error('Error fetching posts:', error));
  }, []);
  console.log(post);
  return (
<>
{post.map((item, index) => (
    <div key={index} className="post">
      <Link to={`/blog/${item.id}`}><h2>{item.title}</h2></Link>
      <p>{item.body}</p>
    </div>
  ))}
</>
  );
}
export default BlogAll;