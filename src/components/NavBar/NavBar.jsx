import React from 'react';
import {Code, CodeXml} from 'lucide-react';

const NavBar = () => {
    return (
        <nav className="flex flex-row justify-between">
            <div className="flex flex-row items-center">
                <Code/>
                <p className="inline">M.folio</p> 
                <CodeXml/>
            </div>
            <div></div>
        </nav>
    );
};

export default NavBar;
