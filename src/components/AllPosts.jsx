import { useContext } from 'react'
import Post from './Post'
import { PostContext } from '../ContextProvider'


export default function AllPosts() {

  const { posts } = useContext(PostContext);
  return (
    <div className='allPosts'>
      {posts.map((item) => <Post key={item.postId} post={item} />)}
    </div>
  )
}
