<template>
  <div class="col s12 m10 offset-m1 l8 offset-l2">
    <div class="col s12">
      <div class="card">
        <div class="block card-content text">
          <h3>{{ $t('skills.title') }}</h3>
          <div class="center row">
            <Skill lang="HTML5" :years="4"></Skill>
            <Skill lang="CSS3" :years="4"></Skill>
            <Skill lang="JavaScript" :years="2"></Skill>

            <Skill lang="PHP" :years="2"></Skill>
            <Skill lang="MySQL" :years="2"></Skill>
            <Skill lang="NodeJS" :years="1"></Skill>

            <Skill lang="React Native" :years="0"></Skill>
            <Skill lang="Electron" :years="0"></Skill>
            <Skill lang="VueJS" :years="0"></Skill>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SKills'
}
</script>

<style>

</style>
