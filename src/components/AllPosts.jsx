import Post from './Post'
import { usePostContext } from '../ContextProvider'


export default function AllPosts() {

  const { posts } = usePostContext();
  return (
    <div className='allPosts'>
      {posts.map((item) => <Post key={item.postId} post={item} />)}
    </div>
  )
}
