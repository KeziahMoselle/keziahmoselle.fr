<template>
  <div class="col s12 m10 offset-m1 l8 offset-l2">
    <div class="col s12">
      <div class="card">
        <div class="block card-content text">
          <h3>{{ $t('tools.title') }}</h3>
          <div class="center row">
            <Skill-card lang="GitHub" year="2016"></Skill-card>
            <Skill-card lang="Git" year="2016"></Skill-card>
            <Skill-card lang="VSCode" year="2016"></Skill-card>

            <Skill-card lang="Materialize" year="2015"></Skill-card>
            <Skill-card lang="Bulma" year="2018"></Skill-card>
            <Skill-card lang="Webpack" year="2018"></Skill-card>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SkillCard from '@/components/SkillCard'

export default {
  name: 'Tools',
  components: {
    SkillCard
  }
}
</script>

<style>

</style>
