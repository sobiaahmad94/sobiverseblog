import React from "react";

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
            <p>Posts component</p>


        </div>
    );
};

export default Posts;