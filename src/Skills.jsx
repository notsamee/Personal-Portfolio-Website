import React, { useState, useRef, useEffect } from 'react';
import './Skills.css'

function Skills() {
    const [selectedCategory, setSelectedCategory] = useState('Coding Skills');
    const [underlineStyle, setUnderlineStyle] = useState({ left: '0%', width: '0%' });

    const headerRefs = {
        'Coding Skills': useRef(null),
        'Technical Skills': useRef(null),
        'Soft Skills': useRef(null),
    };

    useEffect(() => {
        const initialHeader = headerRefs[selectedCategory].current;
        setUnderlineStyle({
            left: `${initialHeader.offsetLeft}px`,
            width: `${initialHeader.offsetWidth}px`,
        });
    }, []);

    const handleHeaderClick = (category) => {
        setSelectedCategory(category);
        const header = headerRefs[category].current;
        setUnderlineStyle({
            left: `${header.offsetLeft}px`,
            width: `${header.offsetWidth}px`,
        });
    };

    const renderContent = () => {
        switch(selectedCategory) {
            case 'Coding Skills':
                return(
                    <>
                        <div className='bar-line'>
                            <div className='bar-container'>
                                <h3>Python</h3>
                                <div className='bar' style={{ '--fill-width': '95%', '--animation-name' : 'coding-fillbar' }}></div>
                            </div>
                            <div className='bar-container'>
                                <h3>Java</h3>
                                <div className='bar' style={{ '--fill-width': '90%', '--animation-name' : 'coding-fillbar' }}></div>
                            </div>
                        </div>

                        <div className='bar-line'>
                            <div className='bar-container'>
                                <h3>JavaScript</h3>
                                <div className='bar' style={{ '--fill-width': '80%', '--animation-name' : 'coding-fillbar' }}></div>
                            </div>
                            <div className='bar-container'>
                                <h3>C/C++</h3>
                                <div className='bar' style={{ '--fill-width': '75%', '--animation-name' : 'coding-fillbar' }}></div>
                            </div>
                        </div>

                        <div className='bar-line'>
                            <div className='bar-container'>
                                <h3>HTML/CSS</h3>
                                <div className='bar' style={{ '--fill-width': '65%', '--animation-name' : 'coding-fillbar' }}></div>
                            </div>
                            <div className='bar-container'>
                                <h3>SQL</h3>
                                <div className='bar' style={{ '--fill-width': '75%', '--animation-name' : 'coding-fillbar' }}></div>
                            </div>
                        </div>

                        <div className='bar-line'>
                            <div className='bar-container'>
                                <h3>C#</h3>
                                <div className='bar' style={{ '--fill-width': '70%', '--animation-name' : 'coding-fillbar' }}></div>
                            </div>
                            <div className='bar-container'>
                                <h3>Git</h3>
                                <div className='bar' style={{ '--fill-width': '60%', '--animation-name' : 'coding-fillbar' }}></div>
                            </div>
                        </div>
                    </>
                );

            case 'Technical Skills':
                return(
                    <>
                        <div className='bar-line'>
                            <div className='bar-container'>
                                <h3>MS Word / Google Docs</h3>
                                <div className='bar' style={{ '--fill-width': '90%', '--animation-name' : 'technical-fillbar' }}></div>
                            </div>
                            <div className='bar-container'>
                                <h3>MS PowerPoint / Google Slides</h3>
                                <div className='bar' style={{ '--fill-width': '80%', '--animation-name' : 'technical-fillbar' }}></div>
                            </div>
                        </div>

                        <div className='bar-line'>
                            <div className='bar-container'>
                                <h3>MS Excel / Google Sheets</h3>
                                <div className='bar' style={{ '--fill-width': '75%', '--animation-name' : 'technical-fillbar' }}></div>
                            </div>
                            <div className='bar-container'>
                                <h3>VS Code</h3>
                                <div className='bar' style={{ '--fill-width': '85%', '--animation-name' : 'technical-fillbar' }}></div>
                            </div>
                        </div>
                        
                        {/*<div className='bar-line'>
                            <div className='bar-container'>
                                <h3>Skill Name</h3>
                                <div className='bar' style={{ '--fill-width': '90%', '--animation-name' : 'technical-fillbar' }}></div>
                            </div>
                            <div className='bar-container'>
                                <h3>Skill Name</h3>
                                <div className='bar' style={{ '--fill-width': '90%', '--animation-name' : 'technical-fillbar' }}></div>
                            </div>
                        </div>

                        <div className='bar-line'>
                            <div className='bar-container'>
                                <h3>Skill Name</h3>
                                <div className='bar' style={{ '--fill-width': '90%', '--animation-name' : 'technical-fillbar' }}></div>
                            </div>
                            <div className='bar-container'>
                                <h3>Skill Name</h3>
                                <div className='bar' style={{ '--fill-width': '90%', '--animation-name' : 'technical-fillbar' }}></div>
                            </div>
                        </div>*/}
                    </>
                );

            case 'Soft Skills':
                return(
                    <>
                        <div className='bar-line'>
                            <div className='bar-container'>
                                <h3>Time management</h3>
                                <div className='bar' style={{ '--fill-width': '80%', '--animation-name' : 'soft-fillbar' }}></div>
                            </div>
                            <div className='bar-container'>
                                <h3>Communication</h3>
                                <div className='bar' style={{ '--fill-width': '80%', '--animation-name' : 'soft-fillbar' }}></div>
                            </div>
                        </div>

                        <div className='bar-line'>
                            <div className='bar-container'>
                                <h3>Adaptability</h3>
                                <div className='bar' style={{ '--fill-width': '85%', '--animation-name' : 'soft-fillbar' }}></div>
                            </div>
                            <div className='bar-container'>
                                <h3>Problem-solving</h3>
                                <div className='bar' style={{ '--fill-width': '90%', '--animation-name' : 'soft-fillbar' }}></div>
                            </div>
                        </div>

                        <div className='bar-line'>
                            <div className='bar-container'>
                                <h3>Teamwork</h3>
                                <div className='bar' style={{ '--fill-width': '90%', '--animation-name' : 'soft-fillbar' }}></div>
                            </div>
                            <div className='bar-container'>
                                <h3>Leadership</h3>
                                <div className='bar' style={{ '--fill-width': '75%', '--animation-name' : 'soft-fillbar' }}></div>
                            </div>
                        </div>

                        <div className='bar-line'>
                            <div className='bar-container'>
                                <h3>Interpersonal skills</h3>
                                <div className='bar' style={{ '--fill-width': '85%', '--animation-name' : 'soft-fillbar' }}></div>
                            </div>
                            <div className='bar-container'>
                                <h3>Attention to detail</h3>
                                <div className='bar' style={{ '--fill-width': '90%', '--animation-name' : 'soft-fillbar' }}></div>
                            </div>
                        </div>
                    </>
                );

            default:
                return null;
        }
    };

    return(
        <section id='skills'>
            <h1 className='skills-header'>Skills</h1>
            <div className='bar-card-container'>
                <div className='bar-card'>
                    <div className='bar-card-header-container'>
                        <h2 className={`${selectedCategory === 'Coding Skills' ? 'selected' : 'bar-card-header'}`} ref={headerRefs['Coding Skills']} onClick={() => handleHeaderClick('Coding Skills')}>Coding Skills</h2>
                        <h2 className={`${selectedCategory === 'Technical Skills' ? 'selected' : 'bar-card-header'}`} ref={headerRefs['Technical Skills']} onClick={() => handleHeaderClick('Technical Skills')}>Technical Skills</h2>
                        <h2 className={`${selectedCategory === 'Soft Skills' ? 'selected' : 'bar-card-header'}`} ref={headerRefs['Soft Skills']} onClick={() => handleHeaderClick('Soft Skills')}>Soft Skills</h2>
                    </div>
                    <div className='underline' style={underlineStyle}></div>
                    {renderContent()}

                    

                </div>
            </div>
        </section>
    );
}

export default Skills