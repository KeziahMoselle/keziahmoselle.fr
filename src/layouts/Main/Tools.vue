<template>
  <div class="col s12 m10 offset-m1 l8 offset-l2">
    <div class="col s12">
      <div class="card">
        <div class="block card-content text">
          <h3>{{ $t('tools.title') }}</h3>
          <div class="center row">
            <Skill-card lang="GitHub" years="2016"></Skill-card>
            <Skill-card lang="Git" years="2016"></Skill-card>
            <Skill-card lang="VSCode" years="2016"></Skill-card>

            <Skill-card lang="Materialize" years="2015"></Skill-card>
            <Skill-card lang="Bulma" years="2018"></Skill-card>
            <Skill-card lang="Webpack" years="2018"></Skill-card>
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
