<template>
  <div class="col s12 m10 offset-m1 l8 offset-l2">
    <div class="col s12">
      <div class="card">
        <div class="block card-content text">
          <h3>{{ $t('tools.title') }}</h3>
          <div class="center row">
            <Tool lang="GitHub" :years="2"></Tool>
            <Tool lang="Git" :years="2"></Tool>
            <Tool lang="VSCode" :years="2"></Tool>

            <Tool lang="Materialize" :years="3"></Tool>
            <Tool lang="Bulma" :years="0"></Tool>
            <Tool lang="Webpack" :years="0"></Tool>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Tools'
}
</script>

<style>

</style>
