<template>
  <div class="col s12 m10 offset-m1 l8 offset-l2">
    <div class="col s12">
      <div class="card">
        <div class="block card-content text">
          <h3>{{ $t('about.title') }}</h3>
          <p>{{ $t('about.paragraph') }}</p>
          <p>{{ $t('about.paragraph2') }}</p>
          <p>{{ $t('about.paragraph3') }} <a href="https://github.com/KeziahMoselle">GitHub</a>.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'About'
}
</script>

<style scoped>

  .card-content p {
    font-size: 1.4rem;
  }

  .btn {
    position: absolute;
    bottom: 0;
    left: 386px;
  }

</style>
