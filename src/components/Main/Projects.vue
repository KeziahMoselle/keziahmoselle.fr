<template>
  <div id="projects" class="col s12 m10 offset-m1 l8 offset-l2">
    <div class="card">
      <div class="block card-content">
        <h3>{{ $t('portfolio.titlePro') }}</h3>
        <a class="btn-floating btn-large waves-effect waves-light purple"><i class="material-icons">keyboard_arrow_down</i></a>
      </div>
    </div>

    <div class="center row">

      <!-- PRO -->

      <Project title="justbecause.vanessamoselle.fr" :tech="['HTML5', 'CSS3', 'jQuery']" modal-id="#justbecauseVanessamoselle"></Project>
      <Project title="maelysm.fr" :tech="['NodeJS', 'Bulma']" modal-id="#maelysm"></Project>
      <Project title="GAS Colmar" :tech="['PHP', 'Bootstrap']" modal-id="#GASColmar"></Project>

    </div>

    <div class="card">
      <div class="block card-content">
        <h3>{{ $t('portfolio.titlePerso') }}</h3>
        <a class="btn-floating btn-large waves-effect waves-light purple"><i class="material-icons">keyboard_arrow_down</i></a>
      </div>
    </div>

    <div class="center row">

      <!-- PERSO -->

      <Project title="Gelbooru Client" :tech="['NodeJS', 'Electron', 'Materialize']" modal-id="#GelbooruClient"></Project>
      <Project title="Embosseuse Braille" :tech="['NodeJS', 'Socket.io', 'React Native']" modal-id="#EmbosseuseBraille"></Project>
      <Project title="Vorrk Studio" :tech="['NodeJS', 'Bulma']" modal-id="#VorrkStudio"></Project>

    </div>
  </div>
</template>

<script>
import Project from './components/Project'

export default {
  name: 'Projects',
  components: {
    Project
  }
}
</script>

<style>

</style>
