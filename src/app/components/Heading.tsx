import React from "react";

interface HeadingProps {
    title: string;
}

const Heading: React.FC<{ title: string}> = ( {title}) => {
    return (
        <div className="flex flex-col items-center justify-center px-4">
            {/* <h1>Heading component</h1> */}
            <h1 className=" pt-6 text-cyan-600 text-center text-3xl font-black uppercase">{title}</h1>
            <p className="pt-6 sm:text-lg md:text-xl lg:text-2xl xl:text-3xl mt-4 text-center">Thank you for dropping by. I'm currently still working on this project and I'm also in the midst of crafting some engaging tech articles for you to revel in. I hope to see you again soon!</p>
        </div>
    );
};

export default Heading;