import React from "react";
import { useEffect, useState } from "react";
import {  useParams, useNavigate } from "react-router-dom";



const Singlepage = () => {
    const navigate = useNavigate();
    const {id} = useParams();
    const [post, setPost] = useState(null);

    const goBack = () => navigate(-1)

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(res => res.json())
        .then(data => setPost(data))
    }, [id]);


    return (
        <div>
            <button style={{marginTop:60, position:'relative', width:90}} onClick={goBack}>Back</button>
            {post && ( 
                <>
                <h1>{post.title}</h1>
                <p>{post.body}</p>
                
                </>
            )}
        </div>
    );
};

export  {Singlepage};