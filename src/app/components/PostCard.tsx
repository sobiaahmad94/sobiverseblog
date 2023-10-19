import React from "react";

// types Prisma generator
import type { Post } from "@prisma/client";

type postDetails = {
    post: Post;

}


const PostCard = ({ post }: postDetails) => {
    return (
        <div>
            <p>PostCard component</p>
            <h1>Title: {post.title}</h1>
            <p>Author: {post.authorId}</p>
            <p>Post ID: {post.id}</p>
            <p>Published Status: {post.published}</p>
            <p>Post Content: {post.content}</p>
        </div>
    );
    
};

export default PostCard;

