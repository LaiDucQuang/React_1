import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import GoBack from "../../Components/Goback";

function BlogDetails() {
    const params =  useParams();
    const [post,setPost] = useState();

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
            .then(response => response.json())
            .then(data => {
                setPost(data);
            })
            .catch(error => console.error('Error fetching post:', error));
    }, [params.id]);
    console.log(post);
  return (
<> <GoBack/>
    {post ? (
        <div className="post-details">
        <h1>{post.title}</h1>
        <p>{post.body}</p>
        <p><strong>Author ID:</strong> {post.userId}</p>
        </div>
    ) : (
        <p>Loading...</p>
    )}
</>

  );
}
export default BlogDetails;