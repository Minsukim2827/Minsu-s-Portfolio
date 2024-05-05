import React, {useState} from 'react';
import displayPhoto from '@/assets/photo1.png';
import {Button} from '@/components/ui/button';
import pdf from '@/assets/resume05052024.pdf';
import {Github, Linkedin} from 'lucide-react';
import { Link } from 'react-router-dom';

function Intro() {
    const [showPdfModal, setShowPdfModal] = useState(false);

    const togglePdfModal = () => {
      setShowPdfModal(!showPdfModal);
    };

    return (
        <div className="pt-8 flex flex-col md:flex-row h-auto md:h-screen justify-center items-center gap-4 md:gap-8 max-w-7xl mx-auto p-4">
            <div className="flex-1 flex flex-col justify-evenly gap-8 md:gap-3">
                <h1 className="text-3xl md:text-5xl font-extrabold -mb-2">From Pixel to Performance: Enhancing Software Through Design</h1>
                <p className="text-base md:text-lg font-bold dark:text-peach-dark">My name is Minsu! Explore my portfolio where I showcase my skills in web development, backend development, and much more! Creating new projects while learning better development fundamentals every day.</p>
                <Button className="text-md font-bold rounded-2xl w-full md:w-24 hover:bg-peach-dark" onClick={togglePdfModal}>Resume</Button>
                {showPdfModal && (
                    <div className="pdf-modal z-51" onClick={togglePdfModal}>
                      <iframe 
                        className="pdf-modal__iframe"
                        src={pdf}
                        type="application/pdf" 
                        onClick={(e) => e.stopPropagation()} 
                        style={{ height: "80vh", width: "80%", maxWidth: "1000px" }}
                      />
                    </div>
                )}
                <div className="flex flex-row gap-3">
                    <Link to="https://github.com/Minsukim2827">
                        <Github className="hover:text-peach-dark w-10 h-10"/>
                    </Link>
                    <Link to="https://www.linkedin.com/in/minsu-kim2827">
                        <Linkedin className="hover:text-peach-dark w-10 h-10"/>
                    </Link>
                </div>
            </div>
            <div className="w-full md:w-2/5">
                <img src={displayPhoto} alt="Display Photo" className="w-full h-auto rounded-full bg-peach shadow-lg " />
            </div>
        </div>
    );
}

export default Intro;
