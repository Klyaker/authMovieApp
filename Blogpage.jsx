import BlogFilter from "components/BlogFilter";
import React from "react";
import { useEffect, useState } from "react";
import { Link, useSearchParams, useNavigate } from "react-router-dom";



const Blogpage = () => {

    const navigate = useNavigate();
    const goBack = () => navigate(-1)
    
    const [posts, setPost] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();

    const postQuery = searchParams.get('post') || '';
    const latest = searchParams.has('latest');

    const startsFrom = latest ? 80 : 1;

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => setPost(data))
    }, []);

    return (
        <div>
            <h1>Our news</h1>
            <button style={{marginTop:-10, position:'relative', width:90, marginLeft:1200,}} onClick={goBack}>Back</button>
            <BlogFilter postQuery={postQuery} latest={latest} setSearchParams={setSearchParams}/>
            {posts.filter(
                post => post.title.includes(postQuery) && post.id >= startsFrom
            ).map(post => (
                <Link style={{color:'#BD79DD', fontSize:26, marginLeft:30, position:'relative', display:'flex'}} 
                key={post.id} 
                to={`/posts/${post.id}`
                }>
                    <li>{post.title}</li>
                </Link>
            )

            )}
        </div>
    );
};

export  {Blogpage};