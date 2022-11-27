import React from "react";
import { useState, useEffect } from "react";
import './ReseComStyle.css'
import { GetAllPosts } from "../../services/postService";

export const ReseCom = () => {
    const [posts, setPosts] = useState([{
        name:"",
        description:"",
    }]);

    useEffect(() => {
        async function fetchData() {
        
        const data = await GetAllPosts();
        console.log(data.name);
        if (data.message) {
            setPosts(null);
            
        }
        else{
            setPosts(data);
        }
        }
        fetchData();
    }, []);
    const [cards] = useState([
        {
            title: 'User1',
            movie: 'Movie Name',
            text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
            voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
            non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`
        },

    ]);

    return (
        <div>
            <section>
                <div className="container">
                    <div className="cards">
                        {
                            posts.map((post, i) => (
                                <div key={i} className="card">
                                    <h1>{post.movie}</h1>
                                    <h4>{post.name}</h4>
                                    <p>{post.description}</p>
                                    <button className="btn">See more</button>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ReseCom
