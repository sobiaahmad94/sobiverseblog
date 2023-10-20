import React from "react";

// types Prisma generator
import type { Post } from "@prisma/client";

type postDetails = {
    post: Post;

}


const PostCard = ({ post }: postDetails) => {
    return (
        <div>
            {/* <p>PostCard component</p> */}

            <h1 className="text-xl">Title: {post.title}</h1>
            <div className="italic text-xs text-fuchsia-700">
                <p>Author: {post.authorId}</p>
                <p>Post ID: {post.id}</p>
                <p>Published?: {post.published ? "Yes" : "No"} </p>
                <p className="not-italic text-md">Post Content: {post.content}</p>
            </div>
        </div>
    );

};

export default PostCard;

