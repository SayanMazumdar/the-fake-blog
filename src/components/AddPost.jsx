import { useCallback, useEffect, useRef, useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import { usePostContext } from '../ContextProvider';

export default function AddPost() {

  const { onAddPost } = usePostContext();
  const [title, setTitle] = useState("");
  const [post, setPost] = useState("");
  const inputEl = useRef(null);
  const textareaEl = useRef(null)

  const handleSubmit = useCallback((e) => {
    e.preventDefault();

    if (title === "" || post === "") {
      alert("Post title and body cannot be empty!");
      return;
    }
    onAddPost({ title, body: post, postId: uuidv4() });
    setTitle("");
    setPost("");
  }, [title, post, onAddPost])

  useEffect(() => {
    function handleKeyPress(e) {
      if (document.activeElement !== inputEl.current && document.activeElement !== textareaEl.current) return;
      if (e.code === 'Enter') {
        handleSubmit(e);
      }
    }

    document.addEventListener('keypress', handleKeyPress)
    return function () {
      document.removeEventListener('keypress', handleKeyPress)
    }
  }, [handleSubmit])

  return (
    <form className='addBlog'>
      <input type="text" placeholder='Post title' value={title} ref={inputEl} onChange={(e) => setTitle(e.target.value)} />
      <textarea placeholder='Write your post...' value={post} ref={textareaEl} onChange={(e) => setPost(e.target.value)}></textarea>
      <button className='addBtn' type='submit' onClick={handleSubmit} >Add post</button>
    </form>

  )
}
