import React from 'react';
import ProjectCard from './ProjectCard';
import walleImage from './../../assets/projects/walle.png';
import ai from './../../assets/projects/ai.gif';
import portfolio from './../../assets/projects/portfolio.gif';
import tome from './../../assets/projects/tome.png';
import snapvote from './../../assets/projects/snapvote.jpeg';
import bank from './../../assets/projects/bank.gif';

const Projects = () => {
    const projectData = [
        {
            title: "Interactive AI Storytelling Platform",
            imageUrl: ai,
            description: "An AI Storytelling Platform which features a discovery page, user authentication, modern UI, editing profile settings, and generating storybooks via OpenAI API (GPT-3.5 and DALL-E-2)",
            badges: ["React", "Javascript", "Node.js", "Flask", "OpenAI API", "PostgreSQL", "Heroku"],
            links: [
                { url: "https://github.com/Minsukim2827/Interactive-AI-Storytelling-Platform", label: "Github" }
            ]
        },
        {
            title: "Portfolio website",
            imageUrl: portfolio,
            description: "Personal Portfolio website.",
            badges: ["React", "Javascript", "Node.js", "Vercel"],
            links: [
                { url: "https://github.com/Minsukim2827/Minsu-s-Portfolio", label: "Github" },
                { url: "https://minsu-s-portfolio.vercel.app/", label: "Website" }
            ]
        },
        {
            title: "Tome (In Progress)",
            imageUrl: tome,
            description: "A website utilising the google books API to store your books as booklists.",
            badges: ["React", "Javascript", "Node.js", "Vercel", "MySQL", "Google Books API"],
            links: [
                { url: "https://github.com/Minsukim2827/Tome", label: "Github" },
                { url: "https://minsukim2827.github.io/Tome", label: "Website" }
            ]
        },
        {
            title: "SnapVote",
            imageUrl: snapvote,
            description: "This project is a polling website which allows the user to create polls with multiple options and then generate a unique link for each poll. The unique link can be shared with others to collect votes.",
            badges: ["Javascript", "Firebase"],
            links: [
                { url: "https://github.com/Minsukim2827/SnapVote", label: "Github" },
                { url: "https://snapvote-11223.web.app/", label: "Website" }
            ]
        },
        {
            title: "Banking Application",
            imageUrl: bank,
            description: "A simple administrative banking application as a COMP603 Group project. Features registration and login, editing account details, and different types of bank accounts.",
            badges: ["Java", "Java DerbyDB", "JUnit"],
            links: [
                { url: "https://github.com/Minsukim2827/pdcproject-part2", label: "Github" } 
            ]
        },
        {
            title: "Walle Discord Bot",
            imageUrl: walleImage,
            description: "This is a Discord bot named WALLE that uses OpenAI's GPT-3 model to generate responses to user prompts.",
            badges: ["Python", "OpenAI API", "Discord API"],
            links: [
                { url: "https://github.com/Minsukim2827/Discord-OpenAI-Chatbot", label: "Github" }
            ]
        }
    ];

    return (
        <div className="flex flex-col items-center p-5">
            <h1 className="text-3xl md:text-5xl font-bold text-center mb-8">My Projects</h1>
            <div className="w-4/5 md:w-full max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
                {projectData.map((project, index) => (
                    <ProjectCard key={index} {...project} />
                ))}
            </div>
        </div>
    );
};

export default Projects;
