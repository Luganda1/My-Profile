import React from 'react';
import {Link } from 'react-router-dom'
import img from '../image/wav11.jpg'
const ProjectLayout = ({title, image, description, url}) => {

    
    return (
        // <div className="grid-container">
        //                     <div className="grid item1">
        //                     <div className="img-container">
        //                         <img src={image || img} alt={title || "defualt title"} />
        //                     <Link to='#' className="btn btn-primary product-link">Details</Link>
        //                 </div>
        //                 <div className="product-footer">
        //                     <p className="product-title">{title || "default title"}</p>
        //                 </div>
        //             </div>
        //         </div>
            // <article className='product'>
            <article className='cocktail'>
            <div className='img-container'>
                <img src= {img} alt={title} />
                {/* <Link to={url} className="btn btn-primary product-link"> details</Link> */}
                </div>
                <div className='product-footer'>
                <h3 className="product-title">{title}</h3>
                <h3 className="description">{description}</h3>
            </div>
        </article>
    );
}

export default ProjectLayout;
