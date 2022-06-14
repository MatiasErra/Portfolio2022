import React from 'react'
import face from '../Imagenes/face.png'
import insta from '../Imagenes/insta.webp'
import link from '../Imagenes/link.png'
import twitt from '../Imagenes/twitt.png'
export default function Redes() {
  return (
    <div className='social'>
        <h2 className='social-tittle' id="redes"> Redes </h2>
    <p >
<a href="#"><img className='social-img'  src={face}/></a>
<a href="#"><img className='social-img'  src={insta} /></a>
<a href="#"><img className='social-img' href="#" src={link} /></a>
<a href="#"><img className='social-img' href="#" src={twitt} /></a>
    </p>
    
    
    
    
    
    
    
    
    
    </div>
  )
}
