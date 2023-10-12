<template>
  <div class="text-with-image" ref="THIS">
    <p class="main-title">{{ props.mainTitle }}</p>
    <p class="sub-title">{{ props.subTitle }}</p>
    <p v-for="item in props.textContent" :key="item" class="simple-text">
      {{ item }}
    </p>
    <img
      v-for="item in props.imageUrls"
      :key="item"
      :src="item"
      class="image"
      @load="handleImageLoad"
    />
  </div>
</template>

<script setup>
import bus from "@/libs/bus.js";
const props = defineProps([
  "mainTitle",
  "subTitle",
  "textContent",
  "imageUrls",
]);
const handleImageLoad = () => {
  bus.emit("imageLoaded");
};
</script>

<style scoped>
.text-with-image {
  width: 50vw;
}
.main-title {
  color: rgb(101, 119, 254);
  font-size: 25px;
  font-weight: bold;
  margin: 3vh;
  margin-left: 0;
}
.sub-title {
  color: rgb(101, 119, 254);
}
.simple-text {
  font-size: 15px;
  margin: 2vh;
  margin-left: 0;
}
.image {
  max-width: 100%;
}
table{
  max-width:100%;
}
</style>