<template>
  <header v-scroll="onScroll">
    <transition name="slide">
      <nav v-if="showNavbar">
        <div class="nav-wrapper">
          <a href="#" class="brand-logo">Logo</a>
          <ul id="nav-mobile" class="right hide-on-med-and-down">
            <li><router-link to="/" class="btn white black-text waves-effect">Home</router-link></li>
            <li><router-link to="/blog" class="btn white black-text waves-effect">Blog</router-link></li>
          </ul>
        </div>
      </nav>
    </transition>
		<div id="header-container">
      <div class="banner black">
        <h1 class="hide-on-small-only baffle">KEZIAH MOSELLE</h1>
      </div>
      <img class="logo" src="@/assets/icons/logo.svg" alt="logo">
      <div class="banner dark">
        <h2 class="hide-on-small-only baffle">{{ $t('header.subtitle') }}</h2>
      </div>
    </div>
		<button @click="scrollToContent" class="btn-floating white pulse"><i class="material-icons">keyboard_arrow_down</i></button>
  </header>
</template>

<script>
import TranslationButton from '@/components/TranslationButton'
import Navbar from '@/layouts/Navbar'
import baffle from 'baffle'

export default {
  name: 'Header',
  components: {
    TranslationButton,
    Navbar
  },
  data () {
    return {
      showNavbar: false
    }
  },
  mounted () {
    baffle('.baffle', {
      characters: '01'
    }).reveal(1000)
  },
  methods: {
    scrollToContent () {
      document.querySelector('main').scrollIntoView()
    },
    onScroll () {
      console.log(window.scrollY)
      if (!this.showNavbar) {
        if (window.scrollY > 800) {
          this.showNavbar = true
        }
      } else {
        if (window.scrollY < 800) {
          this.showNavbar = false
        }
      }
    }
  }
}
</script>

<style scoped>

  nav {
    position: fixed;
    z-index: 3;
    transition: opacity 0.4s, height 0.4s;
  }

  .slide-enter-active {
    animation: slideDown 0.4s;
  }

  .slide-leave-active {
    animation: slideUp  0.4s;
  }

  @keyframes slideDown {
    0% {
      height: 0;
    }

    100% {
      height: 64px;
    }
  }

  @keyframes slideUp {
    0% {
      height: 64px;
    }

    100% {
      height: 0;
    }
  }

</style>
