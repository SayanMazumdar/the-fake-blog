import { faker } from '@faker-js/faker'
import { createContext, useState } from 'react'
import { v4 as uuidv4 } from 'uuid';

function composePost() {
    return { title: `${faker.hacker.adjective()} ${faker.hacker.noun()}`, body: faker.hacker.phrase(), postId: uuidv4() }
}

const PostContext = createContext();

function ContextProvider({ children }) {

    const [posts, setPosts] = useState(function () {
        return Array.from({ length: 32 }, () => composePost())
    })

    const [searchString, setSearchString] = useState("");

    function handleAddPost(e) {
        setPosts((prev) => [...prev, e])
    }

    const displayedPost = searchString.trim().length > 0 ? posts.filter((item) => `${item.title} ${item.body}`.toLowerCase().includes(searchString.toLowerCase().trim())) : posts;
    return (
        <PostContext.Provider value={{ searchString, setSearchString, onAddPost: handleAddPost, 
        posts: displayedPost }}>
            {children}
        </PostContext.Provider>
    )
}

export { PostContext, ContextProvider }
