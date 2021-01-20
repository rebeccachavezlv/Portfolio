import React from 'react';

import ButtonComponent from '../button/button.component'


import './gallery.styles.scss'



class GalleryItem extends React.Component{
    constructor(props){
        super()
    }

    render() {


        return(
            <div className='galleryItem' >
                <div className='bg-image' style={{ backgroundImage: `url(${this.props.imageUrl})`}}></div>
                <div className='gallery-info'>
                    <div className='gallery-titles'>
                        <h2 className='title-text'>{this.props.title}</h2>
                        <h3 className='title-text'>{this.props.subtitle}</h3>
                    </div>
                    <div className='galleryButtons'>
                        <a href={this.props.webUrl} target='_blank' rel="noopener noreferrer"><ButtonComponent title='Live'/></a>
                        {this.props.codeUrl !== null &&
                            <a href={this.props.codeUrl} target='_blank' rel="noopener noreferrer"><ButtonComponent title='Code'/></a>
                        }
                    </div>
                    </div>
            </div>
        )
    }
}

export default GalleryItem