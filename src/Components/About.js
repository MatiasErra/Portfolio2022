import React from 'react'
import  '../index.css';
import  Img from '../Imagenes/Rosario.jpg'
const About = () => {
  return (
      <section class="hero" id="about"> 
    <><div class="bio">

              <h2 class="bio-title">Sobre mí</h2>
              <img className="ImgBor" src= {Img} />
              <p class="bio-text">
              <p>Hola me llamo Matías Erramouspe, vivo en Rosario Colonia, </p>
              <p>Actualmente estoy estudiando en la ORT la carrera de Analista de Programador, </p>
              <p> todavía no se a que me quiero dedicar en el futuro, por ahora quiero terminar esta carrera, en el futuro ya vere.  </p>
              </p>
          </div></>
          
          </section>
  )
}

export default About