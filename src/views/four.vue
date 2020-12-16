<template>
  <div class="home">
        <div class="button" @click="$router.push({path: '/'})"></div>
    <div class="button2" @click="$router.push({path: '/2'})"></div>
    <div class="button3" @click="$router.push({path: '/3'})"></div>
    <div class="button4" @click="$router.push({path: '/4'})"></div>
    <div class="button5" @click="$router.push({path: '/5'})"></div>
    <div class="button6" @click="$router.push({path: '/6'})"></div>
  </div>
</template>

<script>
export default {
  name: 'home'
}
</script>

<style scoped>
.home {
  height: 100vh;
  background: url('../assets/images/4.jpg');
  background-size: 100% 100%;
}
</style>
