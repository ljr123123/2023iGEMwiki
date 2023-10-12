<template>
  <div class="main">
    <img
      src="https://static.igem.wiki/teams/4627/wiki/other-background.png"
      class="other-background"
    />
    <SideBar heading="Overview" :child_heading="['Overview']"></SideBar>
    <div class="main-content">
      <TextWithImage
        mainTitle="Overview"
        :textContent="[
          'For the wet lab team, notebook is essential. By faithfully recording daily experimental process, the subsequent summary, reflection and optimization can be effectively carried out. Each member of our experimental group has his own notebook. For details, please click on each member\'s name to view their notebook.',
        ]"
      ></TextWithImage>
      <p class="person-name" v-for="item in persons" :key="item">{{ item }}</p>
    </div>
  </div>
</template>
  
  <script setup>
import TextWithImage from "@/components/text-with-image.vue";
import SideBar from "@/components/side-bar.vue";
const persons = [
  "Yingjie Shen",
  "Weiwei Ji",
  "Yanru Liu",
  "Chenyu Luan",
  "Lingfeng Yao",
  "Jiahao Wang",
  "Gang Cao",
  "Zhiyu Zhang",
];
</script>
  
  <style scoped>
.main {
  width: 100%;
  position: relative;
}
.main-content {
  position: absolute;
  width: 85.2vw;
  top: 80vh;
  left: 14.8vw;
  padding: 5vh;
}
.person-name {
  color: blue;
  cursor: pointer;
}
.other-background {
  width: 100%;
  height: 80vh;
  position: absolute;
  left: 0;
  top: 0;
}
</style>