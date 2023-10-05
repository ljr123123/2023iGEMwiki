<template>
  <div class="home-view">
    <video
      src="../assets/gif.webm"
      autoplay
      muted
      loop
      playsinline
      class="home-top-image"
    />
    <div class="main-box box-1">
      <div class="text-box-1">
        <p class="title-text">What is <strong>PE?</strong></p>
        <p class="simple-text wide-text">
          Polyethylene plastic (PE) can be seen everywhere in our lives, and is
          widely used in food plastic bags, agricultural greenhouses, pipes,
          wires, etc. Polyethylene polymer molecules are connected by very long
          C–C chains organized in a crystalline, dense structure. Therefore,
          polyethylene is too stable to degrade under normal circumstances.
        </p>
        <p class="simple-text wide-text">
          The crucial first step of PE biodegradation is the oxidation of PE
          polymer. This causes the formation of carbonyl groups. Then, long
          hydrocarbon chains are scissored with the production of smaller
          molecules, which can then be metabolized by microorganisms.
        </p>
      </div>
      <div class="text-box-2">
        <strong
          >Worldwide Plastic Waste <strong class="red">200,000,000t</strong> per
          year.</strong
        >
        <strong>Rate of recycle &lt; 10% </strong>
      </div>
    </div>
    <div class="main-box box-2"></div>
    <div class="main-box box-3"></div>
    <div class="main-box box-4"></div>
  </div>
</template>

<script setup>
</script>

<style scoped>
.home-view {
  width: 100%;
  display: flex;
  flex-direction: column;
}
.home-top-image {
  width: 100%;
}
.main-box {
  width: 100%;
  height: 200vh;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  position: relative;
}
.box-1 {
  background-image: url("../assets/background-2.PNG");
}
.box-2 {
  background-image: url("../assets/background-1.png");
}
.box-3 {
  background-image: url("../assets/background-3.png");
}
.box-4 {
  background-image: url("../assets/background-4.png");
}
.wide-text {
  max-width: 45vw;
}
.title-text {
  font-size: 40px;
}
.text-box-1 {
  color: #ffffff;
  height: 50vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  position: absolute;
  right: 10%;
  top: 20vh;
}
.text-box-2 {
  color: #ffffff;
  font-size: 32px;
  display: flex;
  height: 20vh;
  flex-direction: column;
  word-spacing: 20px;
  position: absolute;
  bottom: 120vh;
}
.red {
  color: red;
}
</style>
