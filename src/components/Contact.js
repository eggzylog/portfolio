/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';

function Contact() {
    return (
        <div className='contact row'>
            <div className="contact-info col-sm-3">
                <a href='https://www.linkedin.com/in/joven-victor-l-157181240/' target='_blank' rel='noreferrer' title='LinkedIn Link'>
                    <img src={require('../assets/images/linkedin-icon.png')} alt="LinkedIn icon" style={{ width: '75px', height: '75px' }} className='linkedin-icon' />
                </a>
            </div>

            <div className="contact-info col-sm-3">
                <a style={{ textDecoration: 'none', color: 'rgba(0, 0, 0, 0.7)' }} href="tel:+639201563777">
                    <img src={require('../assets/images/phone-icon.png')} alt="Phone icon" style={{ width: '75px', height: '75px' }} className='phone-icon' title='Cellphone Number' />
                    <p>0920 156 3777</p>
                </a>
            </div>

            <div className="contact-info email col-sm-3">
                <a href="mailto:jovenvictorlogo@gmail.com" target="_blank" rel="noopener noreferrer">
                    <img src={require('../assets/images/gmail-icon.png')} alt="Gmail icon" style={{ width: '75px', height: '75px' }} className='gmail-icon' title='Email Address' />
                </a>
                <p>jovenvictorlogo@gmail.com</p>
            </div>

            <div className="contact-info col-sm-3">
                <a href='https://github.com/eggzylog' target='_blank' rel='noreferrer' title='GitHub Link'><img src={require('../assets/images/github-icon.png')} alt="GitHub icon" style={{ width: '75px', height: '75px' }} className='github-icon' /></a>
            </div>
        </div>
    )
}

export default Contact;