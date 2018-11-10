<template>
  <div id="app">
    <Header></Header>
    <Main></Main>
    <Footer></Footer>
  </div>
</template>

<script>
import Materialize from 'materialize-css'

import Header from './layouts/Header'
import Main from './layouts/Main'
import Footer from './layouts/Footer'

export default {
  name: 'App',
  components: {
    Header,
    Main,
    Footer
  },
  mounted () {
    Materialize.AutoInit()
  }
}
</script>

<style>

</style>
