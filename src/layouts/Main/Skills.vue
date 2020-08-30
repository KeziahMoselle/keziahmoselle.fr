<template>
  <div class="col s12 m10 offset-m1 l8 offset-l2">
    <div class="col s12">
      <div class="card">
        <div class="block card-content text">
          <h3>{{ $t('skills.title') }}</h3>
          <div class="center row">
            <Skill-card lang="HTML5" year="2014"></Skill-card>
            <Skill-card lang="CSS3" year="2014"></Skill-card>
            <Skill-card lang="JavaScript" year="2016"></Skill-card>

            <Skill-card lang="PHP" year="2016"></Skill-card>
            <Skill-card lang="MySQL" year="2016"></Skill-card>
            <Skill-card lang="NodeJS" year="2017"></Skill-card>

            <Skill-card lang="React Native" year="2017"></Skill-card>
            <Skill-card lang="Electron" year="2017"></Skill-card>
            <Skill-card lang="VueJS" year="2018"></Skill-card>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SkillCard from '@/components/SkillCard'

export default {
  name: 'Skills',
  components: {
    SkillCard
  }
}
</script>

<style>

</style>
