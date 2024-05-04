// About.jsx
import React from 'react';
import Carousel from './Carousel';
import { Car } from 'lucide-react';

const About = () => {
    return (
        <div className="flex flex-col h-full items-center justify-center">
<div class="flex flex-col gap-5 items-center p-5 lg:h-1/2 justify-center">
    <h1 class="text-5xl font-bold border-b-2 border-smokey">My Values</h1>
    <div class="grid grid-cols-3 gap-4 w-full text-center ">
        <div class="flex flex-col gap-3">
            <h3 class="text-2xl font-semibold">Problem Solving</h3>
            <p>Won 3rd place in the CSEA x Maps Coding Competition among 80 university peers, excelling in data structures and algorithms.</p>
        </div>
        <div class="flex flex-col gap-3">
            <h3 class="text-2xl font-semibold">Leadership</h3>
            <p>Led a five-person team to win New Zealand's top League of Legends tournament, Clash of the Taniwha NZ, handling scheduling and conflict resolution.</p>
        </div>
        <div class="flex flex-col gap-3">
            <h3 class="text-2xl font-semibold">Communication & Teamwork</h3>
            <p>Built teamwork skills through sports and improved them in professional settings at Gallagher and New World, focusing on proactive communication and alignment towards goals.</p>
        </div>
    </div>
</div>

            <div className="flex p-5 flex-col gap-5 items-center justify-center">
                <h1 className="text-5xl font-bold border-b-2 border-smokey">My Skills</h1>
                <Carousel />
            </div>
        </div>
    );
};

export default About;