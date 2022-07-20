import './index.scss';
import emailjs from '@emailjs/browser'
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import { useState, useEffect, useRef } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const Contact = () => {
    
    const [letterClass, setLetterClass] = useState('text-animate');
    const refForm = useRef()

    useEffect(() => {
        setTimeout(() => {
            return setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    const sendEmail = (e) => {
        e.preventDefault()

        emailjs.sendForm(
            'service_6aiflpk',
            'template_q2il95e',
            refForm.current,
            'LeF6Y1Rbr7UdUwO6R'
        )
        .then(
            () => {
                window.alert('Message successfully sent!')
                window.location.reload(false)
            }
        )
    }

    return (
        <>
            <div className='container contact-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters 
                        letterClass={letterClass}
                        strArray={['C','o','n','t','a','c','t',' ','M','e']} 
                        idx={15}
                        />
                    </h1>
                    <p>
                        I am interested in being your go-to web developer at your place of employment. Feel free to send any inquiries using the form below.
                    </p>
                    <div className='contact-form'>
                        <form ref={refForm} onSubmit={sendEmail}>
                            <ul>
                                <li className='half'>
                                    <input type='text' name='name' placeholder='Name' required />
                                </li>
                                <li className='half'>
                                    <input type='email' name='email' placeholder='Email' required />
                                </li>
                                <li>
                                    <input placeholder="Subject" type='text' name='subject' required />
                                </li>
                                <li>
                                    <textarea placeholder='Message' name='message' required ></textarea>
                                </li>
                                <li>
                                    <input type='submit' className='flat-button' value='SEND' />
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
                    <div className='info-map'>
                        Jared Keebler
                        <br />
                        Newtown Square, 
                        <br />
                        Pennsylvania 19073
                        <br />
                        <span>jakekeebler@gmail.com</span>
                    </div>
                    <div className='map-wrap'>
                        <MapContainer center={[39.9869, -75.4007]} zoom={13}>
                            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                            <Marker position={[39.9869, -75.4007]}>
                                <Popup>Keebler's Town!</Popup>
                            </Marker>
                        </MapContainer>
                    </div>


            </div>
            <Loader type='cube-transition' />
        </>
    )
}

export default Contact;