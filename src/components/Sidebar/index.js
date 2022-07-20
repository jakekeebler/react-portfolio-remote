import './index.scss';
import LogoS from '../../assets/images/logo-s.png';
import LogoSubtitle from '../../assets/images/logo_sub.png';
import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faEnvelope, faBook, faHardHat } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const Sidebar = () => (
    <div className='nav-bar'>
        <Link className='logo' to='/react-portfolio-remote/'>
            <img src={LogoS} alt='logo' />
            <img className='sub-logo' src={LogoSubtitle} alt='keebler' />
        </Link>
        <nav>
            <NavLink exact='true' activeclassname='active' to='/react-portfolio-remote/'>
                <FontAwesomeIcon icon={faHome} color='#4d4d4e' />
            </NavLink>

            <NavLink exact='true' activeclassname='active' className='about-link' to='/react-portfolio-remote/about'>
                <FontAwesomeIcon icon={faUser} color='#4d4d4e' />
            </NavLink>

            <NavLink exact='true' activeclassname='active' className='contact-link' to='/react-portfolio-remote/contact'>
                <FontAwesomeIcon icon={faEnvelope} color='#4d4d4e' />
            </NavLink>

            <NavLink exact='true' activeclassname='active' className='projects-link' to='/react-portfolio-remote/projects'>
                <FontAwesomeIcon icon={faHardHat} color='#4d4d4e' />
            </NavLink>
        </nav>

        <ul>
            <li>
                <a target='_blank' rel='noreferrer' href='https://www.linkedin.com/in/jared-keebler-01a737168/'>
                    <FontAwesomeIcon icon={faLinkedin} color='#4d4d4e' />
                </a>
            </li>
            <li>
                <a target='_blank' rel='noreferrer' href='https://github.com/jakekeebler'>
                    <FontAwesomeIcon icon={faGithub} color='#4d4d4e' />
                </a>
            </li>
            <li>
                <a target='_blank' rel='noreferrer' href='https://docs.google.com/document/d/19QP5AiPIm1RxVM2UXrqs1JW5VdPE2ECEk5VMfGa1vF8/edit?usp=sharing'>
                    <FontAwesomeIcon icon={faBook} color='#4d4d4e' />
                </a>
            </li>
        </ul>

    </div>
)

export default Sidebar;