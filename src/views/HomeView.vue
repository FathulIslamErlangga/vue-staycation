<template>
  <section class="landing-hero">
    <HeroPage/>
  </section>
  <section class="landing-category">
    <LandingPage/>
  </section>
  <section class="testimony-page">
    <RatingPage/>
  </section>
</template>

<script>
// @ is an alias to /src
// import HeroPage from '@/components/HeroPage.vue'
import HeroPage from '../components/HeroPage.vue'
import LandingPage from '@/components/LandingPage.vue'
import RatingPage from '@/components/ratings/RatingPage.vue'



export default {
  name: 'HomeView',
  components: {
    HeroPage,
    LandingPage,
    RatingPage
}
}
</script>
