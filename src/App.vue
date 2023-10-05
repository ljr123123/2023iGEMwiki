<template>
  <header-nav></header-nav>
  <router-view></router-view>
</template>

<script setup>
import headerNav from "@/components/header-nav.vue"
</script>

<style>
body, html, #app{
    width:100vw;
}
*{
  margin: 0;
  padding:0;
  font-family: Arial, Helvetica; 
}
</style>