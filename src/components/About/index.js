import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faNode, faHtml5, faCss3, faReact, faJsSquare, faGitAlt } from '@fortawesome/free-brands-svg-icons';
import Loader from 'react-loaders';

const About = () => {
    
    const [letterClass, setLetterClass] = useState('text-animate');

    useEffect(() => {
        setTimeout(() => {
            return setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    return (

        <>

        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={['A','b','o','u','t',' ','M','e',]}
                        idx={15}
                    />
                </h1>
                <p>
                    I am a brand-new full stack web developer that is looking to start a career. Web development is a great challenge, 
                    but it is a challenge I enjoy and I am willing to do whatever it takes to get the job done.
                </p>
                <p>
                    Programming became an interest of mine after I started to learn how to use GODOT, a video game engine. It made me realize that
                    I wanted to know more about something I use everyday: my web browser. I decided to get a proper education through the UPenn Coding Bootcamp 
                    to hone my skills so that I could make a career out my interest.
                </p>
                <p>
                    Outside of progamming and games, I love to spend time with my friends by playing board games such as Settlers of Catan. In my own time, I like to 
                    listen to math rock and fusion jazz while honing my creative skills, such as drawing and game design. 
                </p>
                <p>
                    To check out my resume and some of my work, click on the icons at the bottom of the sidebar!
                </p>
            </div>

        <div className='stage-cube-cont'>
            <div className='cubespinner'>
                <div className='face1'>
                    <FontAwesomeIcon icon={faNode} color='green' />
                </div>
                <div className='face2'>
                    <FontAwesomeIcon icon={faHtml5} color='red' />
                </div>
                <div className='face3'>
                    <FontAwesomeIcon icon={faCss3} color='blue' />
                </div>
                <div className='face4'>
                    <FontAwesomeIcon icon={faReact} color='lightblue' />
                </div>
                <div className='face5'>
                    <FontAwesomeIcon icon={faJsSquare} color='yellow' />
                </div>
                <div className='face6'>
                    <FontAwesomeIcon icon={faGitAlt} color='red' />
                </div>
            </div>
        </div>

        </div>
        <Loader type='cube-transition' />
    </>
    )
}

export default About;