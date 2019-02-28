import React from 'react'

function Experience () {
  return (
    <div className="container medium experience relative">
      <h3>Expérience</h3>

      <div className="block card column">
        <Chip disabled />

        <h4>Groupement d'Action Sociale de Colmar</h4>
        <h5>2018-2019</h5>
        <ul>
          <li>Refonte du site Joomla vers PHP 7 (migrations base de données)</li>
          <li>Réalisation d'un back-office, gestion d'articles, d'utilisateurs..</li>
          <li>Espace membre, visualisation d'articles...</li>
        </ul>
      </div>

      <div className="block card column">
        <Chip link="https://github.com/KeziahMoselle/braille-embosser" />

        <h4>Olympiades de sciences de l'ingénieur</h4>
        <h5>2017-2018</h5>
        <ul>
          <li>Réalisation d'une application mobile avec React Native</li>
          <li>Développement d'un serveur Node.js sur Raspberry Pi</li>
        </ul>
      </div>

      <div className="block card column">
        <Chip link="http://justbecause.vanessamoselle.com/" />

        <h4>vanessamoselle photographie</h4>
        <h5>2017</h5>
        <ul>
          <li>Réalisation d'une landing page pour une exposition à Los Angeles</li>
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