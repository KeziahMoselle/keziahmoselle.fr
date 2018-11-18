<template>
  <header v-scroll="onScroll">

    <transition name="slide">
      <nav v-if="showNavbar">
        <div class="nav-wrapper">
          <a href="#mobile-nav" data-target="mobile-nav" class="sidenav-trigger"><i class="material-icons">menu</i></a>
          <translation-button class="hide-on-med-and-down"></translation-button>
          <ul id="nav-mobile" class="right hide-on-med-and-down">
            <li v-for="link in links" :key="link.name">
              <router-link :to="link.to" class="btn black white-text waves-effect">{{ link.name }}</router-link>
            </li>
          </ul>
        </div>
      </nav>
    </transition>

    <ul class="sidenav" id="mobile-nav">
      <li v-for="link in links" :key="link.name">
        <router-link :to="link.to" class="btn black white-text waves-effect">{{ link.name }}</router-link>
      </li>
      <translation-button></translation-button>
    </ul>

		<div id="header-container">
      <div class="banner black" :style="{ height: headerHeight }">
        <h1 class="hide-on-small-only baffle" :class="{ fadeOut: showNavbar }">KEZIAH MOSELLE</h1>
      </div>
      <img class="logo" src="@/assets/icons/logo.svg" alt="KeziahMoselle logo">
      <div class="banner dark" :style="{ height: headerHeight }">
        <h2 class="hide-on-small-only baffle" :class="{ fadeOut: showNavbar }">{{ $t('header.subtitle') }}</h2>
      </div>
      <button @click="scrollToContent" class="btn-floating white pulse" :class="{ fadeOut: showNavbar }"><i class="material-icons">keyboard_arrow_down</i></button>
    </div>

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
      showNavbar: false,
      headerHeight: '400px',
      links: [
        {
          to: '/',
          name: 'Home'
        },
        {
          to: '/blog',
          name: 'Blog'
        }
      ]
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
    closeSidenav () {
      console.log(this.sidenavInstance)
      this.sidenavInstance.close()
    },
    onScroll () {
      if (!this.showNavbar) {
        if (window.scrollY >= 300) {
          this.showNavbar = true
        }
      } else {
        console.log(window.scrollY)
        if (window.scrollY < 300) {
          this.showNavbar = false
          this.headerHeight = '400px'
        }
        if (window.scrollY >= 400) {
          this.headerHeight = '32px'
        }
      }
    }
  }
}
</script>

<style scoped>

  h1, h2, img, button {
    transition: opacity 0.3s;
  }

  .banner {
    transition: height 0.4s;
  }

  #header-container {
    position: fixed;
    height: 100%;
    width: 100%;
  }

  nav {
    position: fixed;
    z-index: 3;
    background-color: white;
    transition: opacity 0.4s, height 0.4s;
  }

  nav a {
    color: black;
  }

  nav li {
    display: inline-block;
  }

  .nav-wrapper {
    margin: 0 20px 0 20px;
  }

  .btn {
    margin: 0 10px 0 10px;
  }

  .btn:hover {
    background-color: white !important;
    color: black !important;
  }

  .fadeOut {
    opacity: 0;
  }

  .slide-enter-active {
    animation: slideDown 0.4s;
  }

  .slide-leave-active {
    animation: slideUp  0.4s;
  }

  @keyframes slideDown {
    0% {
      opacity: 0;
      height: 0;
    }

    100% {
      opacity: 1;
      height: 64px;
    }
  }

  @keyframes slideUp {
    0% {
      opacity: 1;
      height: 64px;
    }

    100% {
      opacity: 0;
      height: 0;
    }
  }

</style>
