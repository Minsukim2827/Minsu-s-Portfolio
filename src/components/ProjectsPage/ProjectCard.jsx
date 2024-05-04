import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const ProjectCard = ({ title, description, imageUrl, badges, links }) => {
    return (
        <div className="card bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-4 flex flex-col justify-between">
            <div>
                <h2 className="text-xl font-bold mb-2 h-12 dark:text-peach">{title}</h2>
                <img src={imageUrl} alt={title} className="w-auto h-40 my-3 object-cover transition-transform duration-300 hover:scale-110" />
                <div className="flex flex-wrap gap-2 mt-4 mb-4">
                    {badges.map((badge, index) => (
                        <Badge key={index}>{badge}</Badge>
                    ))}
                </div>
                <p className="dark:text-peach-dark">{description}</p>
            </div>
            <div className="flex flex-row gap-3 justify-center mt-4">
                {links.map((link, index) => (
                    <a key={index} href={link.url}><Button>{link.label}</Button></a>
                ))}
            </div>
        </div>
    );
};

export default ProjectCard;
