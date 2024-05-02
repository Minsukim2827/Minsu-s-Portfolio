import React from 'react';
import displayPhoto from '@/assets/photo1.png';
import {Button} from '@/components/ui/button';

function Intro() {
    return (
        <div className="flex flex-row h-auto md:h-screen mb-16 justify-center items-center gap-8 max-w-7xl mx-0 -mt-10 mr-10">
            <div className="p-4 w-3/5">
                <h1 className="text-5xl md:text-5xl font-extrabold mb-4">From Pixel to Performance: Enhancing Software Through Design</h1>
                <p>My name is Minsu! Explore my portfolio where I showcase my skills in web development, backend development, and much more! Creating new projects while learning better development fundamentals every day.</p>
                <Button className="mt-6">Resume</Button>
            </div>
            <div className="w-2/5">
                <img src={displayPhoto} alt="Display Photo" className="w-full pr-8" />
            </div>

        </div>
    );
}

export default Intro;
