import React from "react";

interface HeadingProps {
    title: string;
}

const Heading: React.FC<{ title: string}> = ( {title}) => {
    return (
        <div className="flex flex-col items-center justify-center px-4">
            {/* <h1>Heading component</h1> */}
            <h1 className=" pt-6 text-cyan-600 text-center text-4xl font-black uppercase">{title}</h1>
            <p className="pt-6 sm:text-sm md:text-xl lg:text-xl xl:text-3xl mt-4 text-center">Hi, there! Thank you for dropping by. I am currently still working on developing this project and I am also in the midst of crafting some engaging tech articles for you to revel in. I hope to see you again soon!</p>
        </div>
    );
};

export default Heading;