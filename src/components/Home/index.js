import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
// import Logo from './Logo';
import Loader from 'react-loaders';
import Me from '../../assets/images/me.jpg';
import { NavLink } from 'react-router-dom';

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const nameArray = ['J', 'a', 'r', 'e', 'd', ' ', 'K', 'e', 'e', 'b', 'l', 'e', 'r', ','];
    const jobArray = ['a', ' ', 'F', 'u', 'l', 'l', ' ', 'S', 't', 'a', 'c', 'k',];
    const jobArray2 = ['W', 'e', 'b', ' ', 'D', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r'];

    useEffect(() => {
        setTimeout(() => {
            return setLetterClass('text-animate-hover')
        }, 6000)
    }, [])

    return (
        <>
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                    <span className={letterClass}>H</span>
                    <span className={`${letterClass} _5`}>i,</span> 
                    <span className={`${letterClass} _6`}> </span> 
                    <span className={`${letterClass} _7`}>I</span> 
                    <span className={`${letterClass} _8`}>'m</span>
                <br />
                    <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={13} />
                <br />
                    <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={25} />
                <br />
                    <AnimatedLetters letterClass={letterClass} strArray={jobArray2} idx={38} />
                </h1>
                <h2>Frontend/Backend Web Developer | React Enthusiast</h2>
                <Link to="contact" className='flat-button'>CONTACT ME</Link>
            </div>
            <nav>
            <NavLink exact='true' activeclassname='active' className='about-link' to='/about'>
            <img src={Me} alt='me'  />
            </NavLink>
            </nav>
        </div>
            <Loader type='cube-transition' />
        </>
    )
}

export default Home;