
import React from 'react'
import Project1 from '../Imagenes/Oblig1.png'
import Project2 from '../Imagenes/Oblig2.png'
import Project3 from '../Imagenes/Oblig3.png'
export default function Projects() {
  return (
    <section class="projects" id="projects">
    <h2 class="projects-title">Alguno de mis Proyectos</h2>
    <div class="projects-container">
      <div class="project-container project-card">
        <img
          src={Project1}
          alt="expense-tracker"
          loading="lazy"
          class="project-pic"
        />
        <h3 class="project-title">Obligatorio 1 Semestre 1</h3>
        <p class="project-details">
     En este primer obligatorio se hizo un solo Abm de vinos, El editor de codigo fue Notepad++ en el lenguaje JavaScript
        </p>
        <a href="#" target="_blank" class="project-link">Ir al Proyecto</a>
      </div>
      <div class="project-container project-card">
        <img
          src={Project2}
          alt="netflic-clone"
          loading="lazy"
          class="project-pic"
        />
        <h3 class="project-title">Obligatorio 2 Semestre 1</h3>
        <p class="project-details">
        En el siguiente obligatorio se realizo un programa para una inmobiliara, El editor de codigo fue Notepad++ en el lenguaje JavaScript
        </p>
        <a href="#" target="_blank" class="project-link">Ir al Proyecto</a>
      </div>
      <div class="project-container project-card">
        <img
          src={Project3}
          alt="greeny-earth"
          loading="lazy"
          class="project-pic"
        />
        <h3 class="project-title">Obligatorio 2 Smestre 2</h3>
        <p class="project-details">
        En el obligatorio 2 en el semestre 2 se realizo un programa para una inmobiliara, en este caso era trasladar el obligatorio 1 del semestre 2 que se realizo en windows from 
        a asp.net, El editor de codigo fue Visual Stuido en el lenguaje C#.
        </p>
        <a href="#" target="_blank" class="project-link">Ir al Proyecto</a>
      </div>
    </div>
  </section>
  )
}

