import React from "react";

// components
import PostCard from "./PostCard";

// prisma client
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();



const Posts = async () => {
    // users
    const users = await prisma.user.findMany();
    console.log(users);
 


    // posts
    const posts = await prisma.post.findMany();
    console.log(posts);
    



    return (
        <div>
            {/* <p>Posts component</p> */}
            <h1 className="text-2xl text-center mt-6">Popular Posts</h1>
            <div>
                {posts.map((post) => (
                    <PostCard key={post.id} post={post} />
                ))}
            </div>




        </div>
    );
};

export default Posts;