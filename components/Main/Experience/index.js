import React from 'react'

function Experience () {
  return (
    <div className="container medium experience relative">
      <h3>Expérience</h3>

      <div className="block card column">
        <Chip disabled />

        <h4>Groupement d'Action Sociale de Colmar</h4>
        <h5>Développeur Full-Stack</h5>
        <h6>2018-2019</h6>
        <ul>
          <li>Refonte du site <strong>Joomla vers PHP 7</strong> (migrations base de données)</li>
          <li>Réalisation d'un <strong>back-office</strong>, gestion d'articles, d'utilisateurs..</li>
          <li><strong>Espace membre</strong>, visualisation d'articles...</li>
        </ul>
      </div>

      <div className="block card column">
        <Chip link="https://github.com/KeziahMoselle/braille-embosser" />

        <h4>Olympiades de sciences de l'ingénieur</h4>
        <h5>1er prix STI2D sur l'académie de Strasbourg</h5>
        <h6>2017-2018</h6>
        <ul>
          <li>Réalisation d'une application mobile avec <strong>React Native</strong></li>
          <li>Développement d'un serveur <strong>Node.js</strong> sur Raspberry Pi</li>
        </ul>
      </div>

      <div className="block card column">
        <Chip link="http://justbecause.vanessamoselle.com/" />

        <h4>vanessamoselle photographie</h4>
        <h5>Développeur Front-End</h5>
        <h6>2017</h6>
        <ul>
          <li>Réalisation d'une <strong>landing page</strong> pour une exposition à Los Angeles</li>
          <li>Réalisation de 2 template emails (MJML)</li>
        </ul>
      </div>

      <div className="circle"></div>
    </div>
  )
}

function Chip ({ link, disabled }) {
  const href = link || '#!'

  return (
    <a className="chip" href={href} disabled={disabled} target={`${link ? '_blank' : '_self'}`}>
      <img src="/static/link.svg" alt="external link icon" />
    </a>
  )
}

export default Experience