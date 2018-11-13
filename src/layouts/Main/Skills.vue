<template>
  <div class="col s12 m10 offset-m1 l8 offset-l2">
    <div class="col s12">
      <div class="card">
        <div class="block card-content text">
          <h3>{{ $t('skills.title') }}</h3>
          <div class="center row">
            <Skill-card lang="HTML5" years="2014"></Skill-card>
            <Skill-card lang="CSS3" years="2014"></Skill-card>
            <Skill-card lang="JavaScript" years="2016"></Skill-card>

            <Skill-card lang="PHP" years="2016"></Skill-card>
            <Skill-card lang="MySQL" years="2016"></Skill-card>
            <Skill-card lang="NodeJS" years="2017"></Skill-card>

            <Skill-card lang="React Native" years="2017"></Skill-card>
            <Skill-card lang="Electron" years="2017"></Skill-card>
            <Skill-card lang="VueJS" years="2018"></Skill-card>
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
