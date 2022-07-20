import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import { useState, useEffect } from 'react';
import Loader from 'react-loaders';
import billspc from '../../assets/images/billspc.PNG'
import vdbapp from '../../assets/images/vdbapp.png'
import techblog from '../../assets/images/techblog.PNG'
// import { Link } from 'react-router-dom';


const Projects = () => {
    
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
                        strArray={['P','r','o','j','e','c','t','s']}
                        idx={15}
                    />
                </h1>
                <p>
                    Here are some of my websites that I have developed that you can check out.
                </p>
                <div className='project-container'>
                    <div className='project-item'>
                        <img src={billspc} alt="Bill's PC"  />
                            <p>
                                This is Bill's PC, a website where you can look up a Pokémon and it will show you every English card that has been printed under that name. It utilizes the Pokémon TCG API to achieve this.
                            </p>
                        <a href="https://jakekeebler.github.io/pkmn-tcg-website/" target="_blank" className='flat-button' rel="noreferrer">LAUNCH</a>
                    </div>
                    <div className='project-item'>
                        <img src={vdbapp} alt="VDB App"  />
                            <p>
                                This was my final project for the Penn LPS Bootcamp that I worked on with my classmates. It's a MERN application where users can search for video games and add them to a list.
                            </p>
                        <a href="https://ivdb19980714.herokuapp.com/" target="_blank" className='flat-button' rel="noreferrer">LAUNCH</a>
                    </div>
                    <div className='project-item'>
                        <img src={techblog} alt="Tech Blog"  />
                            <p>
                                Tech Blog is a simple website where users can sign up and create posts. Other users can then comment on each others posts. If a user wishes to, they may edit or delete their posts.
                            </p>
                        <a href="https://still-coast-17540.herokuapp.com/" target="_blank" className='flat-button' rel="noreferrer">LAUNCH</a>
                    </div>
                </div>


            </div>

        </div>
        <Loader type='cube-transition' />
    </>
    )
}

export default Projects;
