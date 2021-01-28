import React from 'react';

import ButtonComponent from '../button/button.component'


import './gallery.styles.scss'

const GalleryItem = ({imageUrl, title, subtitle, webUrl, codeUrl}) => (
    <div className='galleryItem' >
        <div className='bg-image' style={{ backgroundImage: `url(${imageUrl})`}}></div>
        <div className='gallery-info'>
            <div className='gallery-titles'>
                <h2 className='title-text'>{title}</h2>
                <h3 className='title-text'>{subtitle}</h3>
            </div>
            <div className='galleryButtons'>
                <a href={webUrl} target='_blank' rel="noopener noreferrer"><ButtonComponent title='Live'/></a>
                {codeUrl !== null &&
                    <a href={codeUrl} target='_blank' rel="noopener noreferrer"><ButtonComponent title='Code'/></a>
                }
            </div>
            </div>
    </div>
)

export default GalleryItem