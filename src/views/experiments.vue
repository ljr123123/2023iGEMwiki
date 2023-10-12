<template>
  <div class="main">
    <img
      src="https://static.igem.wiki/teams/4627/wiki/other-background.png"
      class="other-background"
    />
    <div class="page-title">Experiments</div>
    <SideBar heading="experiments" :child_heading="['experiments']"></SideBar>
    <div class="main-content">
      <TextWithImage
        :textContent="[
          'For Ceres, a total of 64 mutants were selected. Among them, 30 proteins were successfully constructed, expressed and purified. Using DSF method, we obtain their Tm values. In addition, the enzyme activity of the protein was qualitatively identified by weighing method. For Demetra, we only conducted the test (pre-expression).',
          'The specific steps of the experiment are as follows.',
        ]"
      ></TextWithImage>
      <iframe
        src="https://static.igem.wiki/teams/4627/wiki/experiment.pdf"
      ></iframe>
    </div>
  </div>
</template>

<script setup>
import TextWithImage from "@/components/text-with-image.vue";
import SideBar from "@/components/side-bar.vue";
</script>

<style scoped>
.main {
  width: 100%;
  position: relative;
}
.main-content {
  position: absolute;
  width: 85.2%;
  top: 80vh;
  left: 14.8vw;
  padding: 5vh;
}
.other-background {
  width: 100%;
  height: 100vh;
  position: absolute;
  left: 0;
  top: 0;
}
iframe {
  height: 100vh;
  width: 80vw;
}
.page-title {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  font-size: 60px;
  font-weight: 700;
  letter-spacing: 3px;
  display: flex;
  height: calc(80vh - 70px);
  align-items: center;
  justify-content: center;
}
</style>