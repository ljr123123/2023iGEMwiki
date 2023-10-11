<template>
  <div class="main">
    <img src="https://static.igem.wiki/teams/4627/wiki/other-background.png" class="other-background"/>
    <SideBar heading="experiments" :child_heading="['experiments']"></SideBar>
    <div class="main-content">
      <text-with-image
      main-title="Overview"
      :text-content="[
        'Engineering is an essential process for the synthetic biology research. Like other engineering fields, engineering a biological system is a complex, challenging, and comprehensive process that can move very slowly at times. It involves an engineering cycle consisting of the four stages below: design, build, test, and learn. In our project, we continuously perform this four-stage cycle. The continuous accumulation of engineering results led us to the final goal of our project.'
      ]"
      :image-urls="[
        'https://static.igem.wiki/teams/4627/wiki/eng-1.png'
      ]"></text-with-image>
      <text-with-image
      :text-content="[
        'Our project aims to improve the thermostability of Ceres. Therefore, according to this goal we proceeded the engineering cycle.'
      ]"></text-with-image>
      <text-with-image
      main-title="Engineering Cycle"
      sub-title="Design"
      :text-content="[
        'Firstly, by reading the literature and other methods, we understood the structure and properties of Ceres and determined our project objectives. Since there are no disulfide bonds in the Ceres structure itself and disulfide bonds play a significant role in the thermal stability of the protein, we gave priority to the design of disulfide bonds. In addition, methods for flexible regions are also proposed.'
      ]"></text-with-image>
      <text-with-image
      sub-title="Build"
      :text-content="[
        'For the above two schemes, we designed them accordingly and used AlphaFold2 to predict the structure of the mutants.'
      ]"></text-with-image>
      <text-with-image
      sub-title="Test"
      :text-content="[
        'The thermostability of mutants was evaluated by modeling. We analyze the structure of mutants (For example, for the disulfide bond design, we observe whether it is successfully bonded). After this, we used foldX plugin in YASARA to calculate the ΔG of each mutant and thus the ΔΔG. ΔΔG > 0 means the mutation is unstable, ΔΔG < 0 means the mutation is stable.'
      ]"></text-with-image>
      <text-with-image
      sub-title="Learn"
      :text-content="[
        'During this round of engineering, we basically mastered the methods of design and verification in dry lab. At the same time, we found that quite a few designs did not meet our expectations, which also made us have new ideas for the next design.'
      ]"></text-with-image>
      <text-with-image
      main-title="Engineering Cycle"
      sub-title="Design"
      :text-content="[
        'To find more suitable mutants, we adopted other approaches to design our proteins: salt bridge and hydrophobic cores.'
      ]"></text-with-image>
      <text-with-image
      sub-title="Build"
      :text-content="[
        'Like what we did in the previous cycle, we used AlphaFold2 and PyMOL to predict and analyze the 3D structure of Iterated mutants.'
      ]"></text-with-image>
      <text-with-image
      sub-title="Test"
      :text-content="[
        'The ΔΔG of the Iterated mutants was calculated by foldX. The best few mutants were selected for validation in wet lab.'
      ]"></text-with-image>
      <text-with-image
      sub-title="Learn"
      :text-content="[
        'We collated all the dry and wet results and presented all mutants that could effectively improve thermal stability.',
        'Besides, we summarized and reflected on all the design ideas and experimental methods we used, so as to facilitate the understanding and reference of others who are interested in our project.'
      ]"></text-with-image>
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
  top:80vh;
  left:14.8vw;
  padding: 5vh;
}
.other-background{
  width:100vw;
  height:80vh;
  position:absolute;
  left:0;
  top:0;
}
</style>