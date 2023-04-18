<script setup>
import Account from '../components/Account.vue';
import Header from '../components/Header.vue';
import HowItWorks from '../components/HowItWorks.vue';
import Navbar from './../components/Navbar.vue'
import Footer from './../components/Footer.vue'
</script>

<template>
  <main class="max-w-[1440px] mx-auto">
    <Navbar />
    <Header />
    <HowItWorks />
    <Account />
    <Footer />
  </main>
</template>
