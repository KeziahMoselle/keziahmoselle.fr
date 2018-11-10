<template>
  <div class="col s12 m10 offset-m1 l8 offset-l2">
    <div class="col s12">
      <div class="card">
        <div class="block card-content text">
          <h3>{{ $t('tools.title') }}</h3>
          <div class="center row">
            <Skill lang="GitHub" :years="2"></Skill>
            <Skill lang="Git" :years="2"></Skill>
            <Skill lang="VSCode" :years="2"></Skill>

            <Skill lang="Materialize" :years="3"></Skill>
            <Skill lang="Bulma" :years="0"></Skill>
            <Skill lang="Webpack" :years="0"></Skill>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Skill from './components/Skill'

export default {
  name: 'Tools',
  components: {
    Skill
  }
}
</script>

<style>

</style>
