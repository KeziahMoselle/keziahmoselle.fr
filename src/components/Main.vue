<template>
  <main class="row">
	
    <!-- ABOUT -->

    <About></About>

    <!-- SKILLS -->

    <SKills></SKills>

    <!-- TOOLS & MISC -->

    <Tools></Tools>

    <!-- PROJECTS -->

    <Projects></Projects>

    <!-- PROJECTS MODALS -->

    <div id="justbecauseVanessamoselle" class="modal bottom-sheet">
      <div class="modal-content row">
        <div class="modal-header col s12">
          <h2>justbecause.vanessamoselle.com</h2>
          <h3>Landing page for vanessamoselle's exhibition at L.A.</h3>
          <div class="modal-links">
            <a target="_blank" href="http://justbecause.vanessamoselle.com/" class="btn dark waves-effect waves-dark"><i class="material-icons left">open_in_new</i>Visit</a>
          </div>
        </div>
        <div class="modal-container">
          <h3>About the project</h3>
          <div class="modal-informations">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, eius soluta libero amet tempore vitae quam quidem rem odio, molestiae quibusdam in minima dicta quod, odit asperiores velit nemo ipsam.
            </p>
          </div>
        </div>
        <div class="modal-container">
          <h3>Technologies used</h3>
          <div class="modal-technologies">
            <div>
              <img src="assets/icons/tech/html5.svg" alt="HTML5">
              <span>HTML5</span>
            </div>
            <div>
              <img src="assets/icons/tech/css3.svg" alt="CSS3">
              <span>CSS3</span>
            </div>
            <div>
              <img src="assets/icons/tech/jquery.svg" alt="jQuery">
              <span>jQuery</span>
            </div>
          </div>
        </div>
      </div>
      <div class="modal-footer">
        <a href="#!" class="btn dark modal-close waves-effect waves-dark">Close</a>
      </div>
    </div>

    <div id="maelysm" class="modal bottom-sheet">
      <div class="modal-content row">
        <div class="col s12">
          <h2>maelysm.fr</h2>
          <h3></h3>
        </div>
        <div class="modal-links">
          <a target="_blank" href="#" class="btn dark waves-effect waves-dark" disabled><i class="material-icons left">open_in_new</i>Visit</a>
        </div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus sunt iste minus, reiciendis numquam illum quod dicta illo at. Amet eveniet placeat dolorum consequuntur dolorem voluptatibus, nesciunt corrupti tempora esse.</p>
      </div>
      <div class="modal-footer">
        <a href="#!" class="btn dark modal-close waves-effect waves-dark">Close</a>
      </div>
    </div>

    <div id="GASColmar" class="modal bottom-sheet">
      <div class="modal-content row">
        <div class="col s12">
          <h2>GAS Colmar</h2>
          <h3></h3>
        </div>
        <div class="modal-links">
          <a target="_blank" href="http://dev.gas-colmar.fr/" class="btn dark waves-effect waves-dark"><i class="material-icons left">open_in_new</i>Visit</a>
        </div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus sunt iste minus, reiciendis numquam illum quod dicta illo at. Amet eveniet placeat dolorum consequuntur dolorem voluptatibus, nesciunt corrupti tempora esse.</p>
      </div>
      <div class="modal-footer">
        <a href="#!" class="btn dark modal-close waves-effect waves-dark">Close</a>
      </div>
    </div>

    <div id="GelbooruClient" class="modal bottom-sheet">
      <div class="modal-content row">
        <div class="col s12">
          <h2>Gelbooru Client</h2>
          <h3></h3>
        </div>
        <div class="modal-links">
          <a target="_blank" href="https://keziahmoselle.github.io/gelbooru-client/" class="btn dark waves-effect waves-dark"><i class="material-icons left">open_in_new</i>Visit</a>
          <a target="_blank" href="https://github.com/KeziahMoselle/gelbooru-client" class="btn dark waves-effect waves-dark"><i class="material-icons left">code</i>Source Code</a>
        </div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus sunt iste minus, reiciendis numquam illum quod dicta illo at. Amet eveniet placeat dolorum consequuntur dolorem voluptatibus, nesciunt corrupti tempora esse.</p>
      </div>
      <div class="modal-footer">
        <a href="#!" class="btn dark modal-close waves-effect waves-dark">Close</a>
      </div>
    </div>

    <div id="EmbosseuseBraille" class="modal bottom-sheet">
      <div class="modal-content row">
        <div class="col s12">
          <h2>Embosseuse Braille</h2>
          <h3></h3>
        </div>
        <div class="modal-links">
          <a target="_blank" href="https://play.google.com/store/apps/details?id=com.embosseusebraille" class="btn dark waves-effect waves-dark"><i class="material-icons left">open_in_new</i>Visit</a>
          <a target="_blank" href="https://github.com/KeziahMoselle/braille-embosser" class="btn dark waves-effect waves-dark"><i class="material-icons left">code</i>Source Code</a>
        </div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus sunt iste minus, reiciendis numquam illum quod dicta illo at. Amet eveniet placeat dolorum consequuntur dolorem voluptatibus, nesciunt corrupti tempora esse.</p>
      </div>
      <div class="modal-footer">
        <a href="#!" class="btn dark modal-close waves-effect waves-dark">Close</a>
      </div>
    </div>

    <div id="VorrkStudio" class="modal bottom-sheet">
      <div class="modal-content row">
        <div class="col s12">
          <h2>Vorrk Studio</h2>
          <h3></h3>
        </div>
        <div class="modal-links">
          <a target="_blank" href="https://vorrk.herokuapp.com/" class="btn dark waves-effect waves-light"><i class="material-icons left">open_in_new</i>Visit</a>
        </div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus sunt iste minus, reiciendis numquam illum quod dicta illo at. Amet eveniet placeat dolorum consequuntur dolorem voluptatibus, nesciunt corrupti tempora esse.</p>
      </div>
      <div class="modal-footer">
        <a href="#!" class="btn dark modal-close waves-effect waves-dark">Close</a>
      </div>
    </div>

    <!-- Contact Form -->
    <Contact-form></Contact-form>
    
  </main>
</template>

<script>
import About from './Main/About'
import Skills from './Main/Skills'
import Tools from './Main/Tools'
import Projects from './Main/Projects'
import ContactForm from './Main/ContactForm'

export default {
  name: 'Main',
  components: {
    About,
    Skills,
    Tools,
    Projects,
    ContactForm
  }
}
</script>

<style scoped>

</style>
