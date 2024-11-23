import Logo from './Logo'
import { PostContext } from '../ContextProvider'
import { useContext } from 'react'

export default function Header() {

  const { searchString, setSearchString, posts } = useContext(PostContext);
  return (
    <div className='header'>
      <Logo />
      <div className='secondPart'>
        <p>🚀 {posts.length} faker posts found!</p>
        <input type="text" placeholder='Search posts...' value={searchString} onChange={(e) => setSearchString(e.target.value)} />
        <button className='clearBtn' onClick={() => setSearchString("")}>Clear posts</button>
      </div>
    </div>
  )
}
