<template>
  <div class="home">
    <TitleBar/>
    <router-view></router-view>
    <FooterVue/>
  </div>
</template>

<script setup>
import FooterVue from "@/components/FooterBottom.vue"
import TitleBar from "@/components/HomeView/TitleBar.vue"

</script>
<style scoped>
.home{
  display: flex;
  width:100%;
  flex-direction: column;
}
</style>
