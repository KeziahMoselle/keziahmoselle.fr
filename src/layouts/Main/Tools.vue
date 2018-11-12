<template>
  <div class="col s12 m10 offset-m1 l8 offset-l2">
    <div class="col s12">
      <div class="card">
        <div class="block card-content text">
          <h3>{{ $t('tools.title') }}</h3>
          <div class="center row">
            <Skill lang="GitHub" years="2016"></Skill>
            <Skill lang="Git" years="2016"></Skill>
            <Skill lang="VSCode" years="2016"></Skill>

            <Skill lang="Materialize" years="2015"></Skill>
            <Skill lang="Bulma" years="2018"></Skill>
            <Skill lang="Webpack" years="2018"></Skill>
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
