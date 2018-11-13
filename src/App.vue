<template>
  <div id="app">
    <Header></Header>
    <transition name="fade" mode="out-in">
        <router-view></router-view>
        <router-view name="article"></router-view>
    </transition>
    <Footer></Footer>
  </div>
</template>

<script>
import Materialize from 'materialize-css'

import Header from '@/layouts/Header'
import Main from '@/layouts/Main'
import Footer from '@/layouts/Footer'

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

<style lang="scss" src="./App.scss"></style>


