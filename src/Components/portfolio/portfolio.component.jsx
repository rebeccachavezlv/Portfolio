import React from 'react';

import './portfolio.styles.scss'

import GalleryItem from './gallery.component'

import { connect } from 'react-redux'

const Portfolio = ({ items }) => (
    <div className='portfolioContainer'>
        <h1>PORTFOLIO</h1>
        <div className='galleryContainer'>
            {items.map(({id, ...otherSectionProps}) => (
                    <GalleryItem key={id} {...otherSectionProps} />
                ))}
        </div>
    </div>
)

const mapStateToProps = state => ({
    items: state.portfolio.items
})

export default connect(mapStateToProps)(Portfolio);