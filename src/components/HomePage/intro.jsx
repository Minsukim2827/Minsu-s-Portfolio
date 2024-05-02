import React, {useState} from 'react';
import displayPhoto from '@/assets/photo1.png';
import {Button} from '@/components/ui/button';
import pdf from '@/assets/resume02052024.pdf';
import {Github, Linkedin} from 'lucide-react';
import { Link } from 'react-router-dom';

function Intro() {
    const [showPdfModal, setShowPdfModal] = useState(false);

    const togglePdfModal = () => {
      setShowPdfModal(!showPdfModal);
    };

    return (
        <div className="pt-8 flex flex-row h-auto md:h-screen justify-center items-center gap-8 max-w-7xl mx-0 mr-10">
            <div className="w-3/5 flex flex-col justify-evenly gap-6">
                <h1 className="text-5xl font-extrabold -mb-2">From Pixel to Performance: Enhancing Software Through Design</h1>
                <p className="text-peach-dark font-bold">My name is Minsu! Explore my portfolio where I showcase my skills in web development, backend development, and much more! Creating new projects while learning better development fundamentals every day.</p>
                <Button className="text-md font-bold rounded-2xl w-24 hover:bg-peach-dark" onClick={togglePdfModal}>Resume</Button>
                {showPdfModal && (
        <div className="pdf-modal" onClick={togglePdfModal}>
          <iframe 
            className="pdf-modal__iframe"
            src={pdf}
            type="application/pdf" 
            onClick={(e) => e.stopPropagation()} 
          />
        </div>
      )}
      <div className = "flex flex-row gap-3">
        <Link to="https://github.com/Minsukim2827">
      <Github className="hover:text-peach-dark w-10 h-10"/>
      </Link>
      <Link to="https://www.linkedin.com/in/minsu-kim2827">
      <Linkedin className="hover:text-peach-dark w-10 h-10"/>
      </Link>
      </div>
                
            </div>
            <div className="w-2/5">
                <img src={displayPhoto} alt="Display Photo" className="w-full pr-8" />
            </div>

        </div>
    );
}

export default Intro;
