import React from 'react'

const Header = () => {
  return (
    <nav>
    <h1>Matias Erramouspe</h1>
    <ul class="navigation">
      <li><a href="#about" class="nav-link">Sobre mí</a></li>
      <li><a href="#Estudios" class="nav-link">Estudios</a></li>
      <li><a href="#projects" class="nav-link">Proyectos</a></li>
      <li><a href="#redes" class="nav-link">Redes</a></li>
    </ul>
    <button class="burger-menu" id="burger-menu">
      <ion-icon class="bars" name="menu-outline"></ion-icon>
       <ion-icon class="times" name="close-outline"></ion-icon> 
    </button>
  </nav>
  )
}

export default Header;