import { useContext, useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import { PostContext } from '../ContextProvider';

export default function AddPost() {

  const { onAddPost } = useContext(PostContext);
  const [ title, setTitle ] = useState("");
  const [ post, setPost ] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    onAddPost({ title, body: post, postId: uuidv4() });
    setTitle("");
    setPost("");
  }
  return (
    <form className='addBlog'>
      <input type="text" name="" id="" placeholder='Post title' value={title} onChange={(e) => setTitle(e.target.value)}/>
      <textarea name="" id="" placeholder='Write your post...' value={post} onChange={(e) => setPost(e.target.value)}></textarea>
      <button className='addBtn' type='submit' onClick={handleSubmit} >Add post</button>
    </form>

  )
}
