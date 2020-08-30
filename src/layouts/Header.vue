<template>
  <header v-scroll="onScroll">

    <transition name="slide">
      <nav v-if="showNavbar">
        <div class="nav-wrapper">
          <a href="#mobile-nav" data-target="mobile-nav" class="sidenav-trigger"><i class="material-icons">menu</i></a>
          <translation-button class="right"></translation-button>
          <a v-if="translateLogo" href="#" class="brand-logo center"><img src="@/assets/logo-black.svg" alt="KeziahMoselle logo"></a>
          <ul id="nav-mobile" class="left hide-on-med-and-down">
            <li v-for="link in links" :key="link.name">
              <router-link :to="link.to" class="btn black white-text waves-effect">{{ link.name }}</router-link>
            </li>
          </ul>
        </div>
      </nav>
    </transition>

    <ul class="sidenav" id="mobile-nav">
      <li v-for="link in links" :key="link.name" @click="closeSidenav">
        <router-link :to="link.to" class="btn black white-text waves-effect">{{ link.name }}</router-link>
      </li>
      <translation-button></translation-button>
    </ul>

		<div id="header-container">
      <nav class="transparent z-depth-0">
        <ul class="left">
          <li v-for="link in links" :key="link.name">
            <router-link :to="link.to" class="btn black white-text waves-effect">{{ link.name }}</router-link>
          </li>
        </ul>
        <ul class="right">
          <translation-button></translation-button>
        </ul>
      </nav>
      <div class="banner black" :style="{ height: headerHeight }">
        <h1 class="hide-on-small-only baffle" :class="{ fadeOut: showNavbar }">KEZIAH MOSELLE</h1>
      </div>
      <img src="@/assets/logo.svg" alt="KeziahMoselle logo" class="logo" :class="{ translateLogo: translateLogo }">
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
      translateLogo: false,
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
      const sidenavElement = document.querySelector('.sidenav')
      const instance = new window.M.Sidenav(sidenavElement)
      instance.close()
    },
    onScroll () {
      if (!this.showNavbar) {
        if (window.scrollY >= 300) {
          this.showNavbar = true
        }
      } else {
        if (window.scrollY < 200) {
          this.showNavbar = false
          this.headerHeight = '400px'
          this.translateLogo = false
        }
        if (window.scrollY >= 200) {
          this.headerHeight = '32px'
        }
        if (window.scrollY >= 380) {
          this.translateLogo = true
        }
      }
    }
  }
}
</script>

<style scoped>

  .banner {
    height: 400px;
    width: 100%;
    box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12), 0 3px 5px -1px rgba(0, 0, 0, 0.3);
    transition: height 0.4s;
  }

  .banner > h1, .banner > h2 {
    position: relative;
    top: 50%;
    line-height: 400px;
    transform: translateY(-50%);
    text-align: center;
  }

  .banner > h1 {
    font-size: 60px;
  }

  .banner > h2 {
    font-weight: 100;
  }

  .logo {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    height: 128px;
    width: 128px;
    top: 325px;
  }

  h1, h2, button {
    transition: opacity 0.3s;
  }

  img {
    transition: top 0.4s, height 0.4s;
  }

  #header-container {
    position: fixed;
    height: 10%;
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

  .brand-logo img {
    margin-top: 10px;
    height: 40px;
    width: 40px;
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

  .translateLogo {
    top: -128px;
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
