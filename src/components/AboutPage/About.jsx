import React from 'react';


const About = () => {
    return (
        <div className="flex flex-col h-auto items-center justify-center">
            <div className=" flex flex-col gap-5 items-center p-5 lg:h-1/2 justify-center mt-10">
                <h1 className="text-3xl md:text-5xl font-bold border-b-2 border-smokey mb-10">My Values</h1>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-3/4 md:w-full max-w-4xl mx-auto text-center">
                    <div className="flex flex-col gap-3">
                        <h3 className="text-xl md:text-2xl font-semibold dark:text-cream">Problem Solving</h3>
                        <p className="dark:text-peach-dark">Won 3rd place in the CSEA x Maps Coding Competition among 80 university peers, excelling in data structures and algorithms.</p>
                    </div>
                    <div className="flex flex-col gap-3">
                        <h3 className="text-xl md:text-2xl font-semibold dark:text-cream">Leadership</h3>
                        <p className="dark:text-peach-dark">Led a five-person team to win New Zealand's top League of Legends tournament, Clash of the Taniwha NZ, handling scheduling and conflict resolution.</p>
                    </div>
                    <div className="flex flex-col gap-3">
                        <h3 className="text-xl md:text-2xl font-semibold dark:text-cream">Communication & Teamwork</h3>
                        <p className="dark:text-peach-dark">Built teamwork skills through sports and improved them in professional settings at Gallagher and New World, focusing on proactive communication and alignment towards goals.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
