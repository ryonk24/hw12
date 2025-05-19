import React from 'react';

const Resume: React.FC = () => {
    return (
        <div>
            <h1>Resume</h1>
            <p>Welcome to my resume page. Here you can find details about my skills, experience, and education.</p>
            <section>
                <h2>Skills</h2>
                <ul>
                    <li>JavaScript</li>
                    <li>TypeScript</li>
                    <li>React</li>
                    <li>Node.js</li>
                    <li>CSS/HTML</li>
                </ul>
            </section>
            <section>
                <h2>Experience</h2>
                <p>Details about my professional experience will go here.</p>
            </section>
            <section>
                <h2>Education</h2>
                <p>Details about my educational background will go here.</p>
            </section>
        </div>
    );
};

export default Resume;