import React from 'react';
import { Link } from "react-router-dom";
import striptags from 'striptags';
import Truncate from 'react-truncate';

const BlogItem = props => {
    const {
        id,
        title,
        content
    } = props.blogItem;
    
    
    return (
    <div id={id}>
    <Link to={`/b/${id}`} >
        <h1>{title}</h1>
    </Link>
    
        <div id={id}>
            <Truncate lines={5} ellipsis={
                <span>
                    ... <Link to={`/b/${id}`}>Read more</Link>
                </span>
            } >
                {striptags(content)}
            </Truncate>
        </div>
    
    </div>
    );
};

export default BlogItem;