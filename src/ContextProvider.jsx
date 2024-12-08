import { faker } from '@faker-js/faker'
import { createContext, useContext, useEffect, useState } from 'react'
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
    const [darkMode, setDarkMode] = useState(false);

    function handleAddPost(e) {
        setPosts((prev) => [...prev, e])
    }

    useEffect(() => {
        document.documentElement.classList.toggle('changeMode');
    }, [darkMode])

    const displayedPost = searchString.trim().length > 0 ? posts.filter((item) => `${item.title} ${item.body}`.toLowerCase().includes(searchString.toLowerCase().trim())) : posts;
    return (
        <PostContext.Provider value={{
            searchString, setSearchString, onAddPost: handleAddPost,
            posts: displayedPost, darkMode, setDarkMode
        }}>
            {children}
        </PostContext.Provider>
    )
}

function usePostContext() {
    const context = useContext(PostContext);
    if (context === undefined)
        throw new Error("Context is being used outside provider component");
    return context;
}

export { ContextProvider, usePostContext }
