<template>
  <div class="human-practice">
    <sideBar heading="HomePage" :child_heading="masks" />
    <div class="main-content"></div>
  </div>
</template>

<script setup>
import sideBar from "@/components/side-bar.vue";
const masks = {
  4: "Previous Projects",
  3: "Relevant Literature",
  2: "Other Background",
  1: "Importance",
  0: "Project",
};
</script>

<style scoped>
.human-practice {
  width: 100%;
}
</style>