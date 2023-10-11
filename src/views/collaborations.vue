<!--Jerry开始做了-->
<template>
  <div class="main">
    <SideBar heading="experiments" :child_heading="['experiments']"></SideBar>
    <div class="main-content">
      <TextWithImage 
      :textContent="[
        'For Ceres, a total of 64 mutants were selected. Among them, 30 proteins were successfully constructed, expressed and purified. Using DSF method, we obtain their Tm values. In addition, the enzyme activity of the protein was qualitatively identified by weighing method. For Demetra, we only conducted the test (pre-expression).',
        'The specific steps of the experiment are as follows.'
      ]"></TextWithImage>
    </div>
  </div>
</template>

<script setup>
import TextWithImage from "@/components/text-with-image.vue"
import SideBar from "@/components/side-bar.vue"

</script>

<style scoped>
.main{
  width:100vw;
  position: relative;
}
.main-content{
  position: absolute;
  width:85.2vw;
  left:14.8vw;
}
</style>