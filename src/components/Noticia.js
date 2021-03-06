import React from 'react';
import Logo from './../news.jpg';
import PropTypes from 'prop-types';
const Noticia = ({noticia}) =>{

    const {urlToImage,url,title,description,source}=noticia;
    const imagen=(urlToImage)? urlToImage : Logo;
   
    return(
        <div className='col s12 m6 l4'>
            <div className='card'>
            <div className='card-image'>
              
                <img src={imagen} alt={title}
                width={150}
                height={200}/>
                <span className='card-title'>{source.name}</span>
            </div>
            <div className='card-content'>
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
            <div className='card-action'>
                <a href={url} target='_ blank'
                rel='noopener noreferrer' 
                className='wave-effect waves-light btn'>
                    Ir a la noticia
                </a>
            </div>
            </div>
        </div>
    );
}
//extrar datos
Noticia.protoType={
    noticia:PropTypes.object.isRequired
}
 
export default Noticia;