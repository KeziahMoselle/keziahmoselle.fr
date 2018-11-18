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

		<div v-scroll="animateHeader" id="header-container">
      <div class="banner black">
        <h1 class="hide-on-small-only baffle">KEZIAH MOSELLE</h1>
      </div>
      <img class="logo" src="@/assets/icons/logo.svg" alt="KeziahMoselle logo">
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
      showNavbar: false,
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
        if (window.scrollY > 800) {
          this.showNavbar = true
        }
      } else {
        if (window.scrollY < 800) {
          this.showNavbar = false
        }
      }
    },
    animateHeader () {
      const firstBanner = document.querySelector('.banner.black')
      const secondBanner = document.querySelector('.banner.dark')
      const height = secondBanner.clientHeight
      const newHeight = height - (window.scrollY / 8)
      secondBanner.style.height = `${newHeight}px`
    }
  }
}
</script>

<style scoped>

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
