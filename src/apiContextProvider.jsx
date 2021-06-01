import React, { createContext, useState, useEffect } from 'react'

export const ApiContext = createContext();

const ApiContextProvider = props => {
    const [posts, setPosts] = useState([]);

    const siteUrl = 'https://joanneye.nl/kennisquizcms/wp-json/wp/v2/questions';

    useEffect(() => {
        async function loadposts() {
            const response = await fetch(siteUrl);
            if (!response.ok) {
                console.log('error');
                return
            };

            const posts = await response.json();
            setPosts(posts)
        }
        loadposts()
    }, []);

    return (
        <ApiContext.Provider value={{ posts }}>
            {props.children}
        </ApiContext.Provider>
    )
};

export default ApiContextProvider