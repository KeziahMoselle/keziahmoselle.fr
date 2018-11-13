<template>
  <div id="app">
    <Header></Header>
    <Main></Main>
    <Footer></Footer>
  </div>
</template>

<script>
import Materialize from 'materialize-css'

import Header from './layouts/Header'
import Main from './layouts/Main'
import Footer from './layouts/Footer'

export default {
  name: 'App',
  components: {
    Header,
    Main,
    Footer
  },
  mounted () {
    Materialize.AutoInit()
  }
}
</script>

<style lang="scss">

  @charset "utf-8";

  $primary-color: #ED145B;
  $primary-color-light: #1F1D20;
  $primary-color-dark: #222023;

  $secondary-color: #ED145B;
  $placeholder-text-color: #FFF;

  @import 'materialize-css/sass/materialize.scss';
  @import url('https://fonts.googleapis.com/css?family=Inconsolata');
  @import url('https://fonts.googleapis.com/icon?family=Material+Icons');

  .purple {background-color: $primary-color !important;}
  .black {background-color: $primary-color-light !important;}
  .dark {background-color: $primary-color-dark !important;}

  /* FORMATAGES */

      body {
          margin: 0;
          padding: 0;
          background-color: $primary-color-dark;
          color: white;
          display: flex;
          min-height: 100vh;
          flex-direction: column;
          overflow-x: hidden;
      }

      main {
          flex: 1 0 auto;
      }

      h1, h2, h3, h4, h5, h6 {
          font-family: 'Inconsolata', sans-serif;
          margin: 0;
          font-weight: 300;
      }

      h3 {
          font-size: 2rem;
      }

      main {
          margin: 40px 0 0 0;
      }

      tr {
          border-bottom: 0;
      }

      img, label, i.material-icons.prefix {
          user-select: none;
      }

  /* HEADER */

      /* Banner */

      .banner {
          width: 100%;
          box-shadow: 0 6px 10px 0 rgba(0,0,0,0.14), 0 1px 18px 0 rgba(0,0,0,0.12), 0 3px 5px -1px rgba(0,0,0,0.3);
      }

      .banner > h1, .banner h2 {
          position: relative;
          top: 50%;
          transform: translateY(-50%);
          text-align: center;
      }

      .banner h2 {
          font-weight: 100;
      }

      .logo {
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          height: 128px;
          width: 128px;
      }


      @media only screen and (max-width: 599px)
      {
          .banner {
              height: 300px;
          }
          .banner > h1, .banner h2 {
              font-size: 40px;
          }
          
          .logo {
              top: 225px;
          }
      }
      @media only screen and (min-width: 600px)
      {
          .banner {
              height: 400px;
          }
          .banner > h1, .banner h2 {
              line-height: 400px;
          }
          .banner > h1 {
              font-size: 60px;
          }

          .logo {
              top: 325px;
          }
      }

      /* Arrow down */
      
      button.btn-floating.white {
          position: relative;
          top: -20px;
          left: 50%;
          transform: translateX(-50%);
      }

      button.white i {
          color: black !important;
      }

  /* MAIN */

      /* ABOUT ME */

      p > a {
          color: white;
          border-bottom: 1px dashed white;
          text-decoration: none;
          transition: color 200ms;
      }
      p > a:hover {
          color: #b2b2b2;
      }

      /* SKILLS */

      .skills {
          margin-bottom: 10px;
      }

      .skills img {
          width: auto;
      }

      @media only screen and (min-width: 451px) {
          .skills img {
              height: 100px;
          }
      }

      @media only screen and (max-width: 450px) {
          .skills img {
              height: 64px;
          }
      }

      /* BUTTONS */

      .btn.dark:hover {
          background-color: white !important;
          color: black;
      }

      /* CARDS */

      .card {
          background-color: $primary-color-light;
          margin-bottom: 40px;
      }

      .text p {
          font-size: 16px;
          text-align: center;
      }

      @media only screen and (min-width: 992px)
      {
          .card .text {
              padding: 36px 140px 36px 140px;
          }
      }

      .card .card-content h3 {
          font-size: 36px;
          text-align: center;
          margin-bottom: 36px;
      }

      .card-title {
          overflow: hidden;
          word-wrap: break-word;
      }

      .card .card-image img {
          filter: brightness(70%);
          -webkit-filter: brightness(70%);
          -moz-filter: brightness(70%);
          -o-filter: brightness(70%);
          -ms-filter: brightness(70%);
      }

      .card .card-content {
          padding: 14px;
          border-radius: 0 0 2px 2px;
          min-height: 82px;
      }

      @media only screen and (max-width: 450px) {
          .card .block.card-content {
              padding: 20px;
          }
      }

      @media only screen and (min-width: 451px) {
          .card .block.card-content {
              padding: 60px;
          }
      }

      .project.card-content {
          max-height: 64px;
          background-color: white;
          color: black;
          border-radius: 0 0 5px 5px;
      }

      #projects .card .card-title {
          font-size: 2rem;
      }

      #projects .card .card-content:not(.project) {
          padding: 30px;
      }

      #projects .white i.material-icons {
          color: black;
          font-size: 1.5rem;
      }

      #projects h3 + a.btn-floating {
          position: absolute;
          bottom: -27px;
          left: 50%;
          transform: translateX(-50%);
      }

      .project {
          display: flex;
          align-items: center;
          justify-content: space-evenly;
      }

      .project img {
          height: 38px;
          width: auto;
      }

  /* Wakatime integration responsiveness */

  .wakatime {
      position: relative;
      overflow: hidden;
      padding-top: 42.25%;
  }

  .wakatime embed {
      position: absolute;
      width: 100%;
      height: 100%;
      max-height: 1000px;
      top: 0;
      left: 0;
  }

  /* MODAL */

  .modal.bottom-sheet {
      overflow-x: hidden;
      min-height: fit-content;
      border-top-left-radius: 10px;
      border-top-right-radius: 10px;
  }

  .modal.modal.bottom-sheet .modal-footer {
      border-radius: 0;
  }

  @media screen and (min-width: 1300px) {
      .modal.bottom-sheet {
          width: 50%;
          transform: translateX(50%);
      }
  }

  .modal h2 {
      font-size: 2.6rem;
      text-align: left;
      word-break: break-word;
  }

  .modal h3 {
      font-size: 1.4rem;
      margin: 10px 0 30px 0;
  }

  .modal .modal-content {
      padding: 50px 24px 36px 24px;
      color: black;
  }

  .modal p {
      font-size: 1.2rem;
  }

  .modal-header {
      margin-bottom: 40px;
      border-bottom: 1px solid black;
  }

  .modal-container h3 {
      display: inline;
      padding: 8px;
      color: white;
      background-color: $primary-color-dark;
      border-radius: 3px;
  }

  .modal-technologies {
      padding: 20px 0;
      display: flex;
      justify-content: space-evenly;
  }
  .modal-technologies div {
      display: inline-flex;
      line-height: 56px;
  }
  .modal-technologies div > span {
      margin-left: 10px;
  }
  .modal-technologies img {
      height: 56px;
      width: auto;
  }
  .modal-technologies span {
      line-height: 56px;
  }

  .modal-links {
      margin-bottom: 24px;
  }

  .modal-links a {
      margin: 0 0.75rem;
  }

  /* FORM */

  input, textarea {
      color: white;
  }

  /* FOOTER */

      .page-footer {
          padding: 10px;
      }

      footer ul li {
          display: inline-block;
          padding: 0 10px 0 10px;
      }

      footer a {
          border-bottom: black 4px solid;
          transition-duration: 200ms;
      }

      footer a:hover {
          border-bottom: white 4px solid;
      }

      footer a img {
          height: 32px;
          width: auto;
      }

      footer a img:hover {
          height: 32px;
          width: auto;
      }

  /* SCROLLBAR */

  body::-webkit-scrollbar {background-color: $primary-color-dark; width: 0.5em;}
  body::-webkit-scrollbar-thumb {background-color: $primary-color;}
  
  /* SCROLL */

  html {
    scroll-behavior: smooth;
  }

  /* SELECTION */

  ::-moz-selection {background: $primary-color;}
  ::selection {background: $primary-color;}

</style>

