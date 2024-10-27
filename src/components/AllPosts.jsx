import Post from './Post'

export default function AllPosts({ posts }) {
  return (
    <div className='allPosts'>
      {posts.map((item) => <Post key={item.postId} post={item} />)}
    </div>
  )
}
