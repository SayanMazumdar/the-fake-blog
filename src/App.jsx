import Header from './components/Header';
import AddPost from './components/AddPost';
import AllPosts from './components/AllPosts';
import { ContextProvider } from './ContextProvider';

export default function App() {

  return (
    <div className='app'>
      <ContextProvider>
        <Header />
        <AddPost />
        <AllPosts />
      </ContextProvider>
    </div>
  )
}
