import React from 'react'
import './index.css'

function Experience () {
  return (
    <div className="container medium experience">
      <h3>Expérience</h3>

      <div className="block">
        <h4>Groupement d'Action Sociale de Colmar</h4>
        <ol>
          <li>Refonte du site Joomla vers PHP 7 (migrations base de données)</li>
          <li>Réalisation d'un back-office, gestion d'articles, d'utilisateurs..</li>
          <li>Espace membre, visualisation d'articles...</li>
        </ol>
      </div>

      <div className="block">
        <h4>vanessamoselle photographie</h4>
        <ol>
          <li>Réalisation d'une landing page pour une exposition à Los Angeles</li>
          <li>Réalisation de 2 template emails (MJML)</li>
        </ol>
      </div>

      <div className="circle"></div>
    </div>
  )
}

export default Experience