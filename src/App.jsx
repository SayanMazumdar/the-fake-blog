import Header from './components/Header';
import AddPost from './components/AddPost';
import AllPosts from './components/AllPosts';
import { useState } from 'react';
import { faker } from '@faker-js/faker';
import { v4 as uuidv4 } from 'uuid';

function composePost() {
  return { title: `${faker.hacker.adjective()} ${faker.hacker.noun()}`, body: faker.hacker.phrase(), postId: uuidv4()}
}

export default function App() {

  const [ posts, setPosts ] = useState(function() {
    return Array.from({ length: 30 }, () => composePost())
  })

  return (
    <div className='app'>
      <Header />
      <AddPost />
      <AllPosts posts={posts} />
    </div>
  )
}
