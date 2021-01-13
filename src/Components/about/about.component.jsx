import React from 'react';
import SmoothLink from '../smooth-link/smooth-link.component'

import './about.styles.scss'

import headshot from './Headshot-1.jpg'

const AboutComponent = () => (
    <div id='about' className='aboutContainer'>
        <h1>ABOUT ME</h1>
        <div className='mainInfo'>
            <div className='imageContainer'>
                <img src={headshot} alt=''/>
            </div>
            <div className='bioContainer'>
                <p>Hi! My name is Rebecca Chavez, and I'm an intermediate web developer with 5+ years experience in front-end development along with 7+ years experience in media and advertising.</p>
                <p>I'm a developer that deeply understands the importance of effective communication, ego-free teamwork, and independent problem solving. I am extremely excited for a chance to hear how I can help you and your team!</p>
                <p>Skills include JavaScript, React.js, Redux, HTML5, CSS3, SASS, Git, and more. This website was built using React.js.</p>
                <div className='aboutButtons'>
                    <SmoothLink to='portfolioContainer' button='true' label='Portfolio' effect='white-button'/>
                    <SmoothLink to='contact' button='true' label='Contact' effect='white-button'/>
                </div>
            </div>
        </div>
    </div>
)

export default AboutComponent