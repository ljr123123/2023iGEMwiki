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
        <p class="simple-text wide-text">Polyethylene plastic (PE) can be seen everywhere in our lives, and is widely used in food plastic bags, agricultural greenhouses, pipes, wires, etc. Polyethylene polymer molecules are connected by very long C–C chains organized in a crystalline, dense structure. Therefore, polyethylene is too stable to degrade under normal circumstances.</p>
        <p class="simple-text wide-text">The crucial first step of PE biodegradation is the oxidation of PE polymer. This causes the formation of carbonyl groups. Then, long hydrocarbon chains are scissored with the production of smaller molecules,  which can then be metabolized by microorganisms.</p>
      </div>
      <img src="@/assets/icon-1.png" class="icon-1"/>
      <div class="text-box-2">
        <strong
          >Worldwide Plastic Waste <strong class="red">200,000,000t</strong> per
          year.</strong
        >
        <strong>Rate of recycle<strong class="red"> &lt; 10%</strong></strong>
      </div>
      <div class="echarts-box">
        <v-chart class="chart" :option="option" />
      </div>
      <img src="@/assets/muchAnimals.png" class="much-animals"/>
      <p class="simple-text short-text text-1">High production, low recycling rates and recalcitrance have made PE plastic pollution a global environmental problem.</p>
    </div>
    <div class="main-box box-2">
      <div class="big-text-1">
        <p>How to</p>
        <p>deal with</p>
        <p>PE pollution?</p>
      </div>
      <div class="liucheng-box">
        <img src="@/assets/liucheng.png" class="liucheng"/>
        <p class="desc-text text-3">Plastic recycling</p>
        <p class="desc-text text-4">Plastic classification</p>
        <p class="desc-text text-5">Physical degradation of PE</p>
        <p class="desc-text text-6">Chemical degradation of PE</p>
      </div>
      <p class="simple-text text-7 short-text">Biodegradation of PE produce no harmful substances and has low energy consumption. And its secondary products are clean, safe, and more environmentally friendly.</p>
      <div class="text-8">
        <p>Thus</p>
        <div>
          Here comes
        </div>
      </div>
    </div>
    <div class="main-box box-3">
      <p class="simple-text text-8 wide-text">
        Although many microorganisms have been found,  PEase is the only enzyme that can degrade PE. PEase has the ability to oxidize PE at room temperature, successfully solving the recognized bottleneck step in PE degradation(i.e., oxidation).
      </p>
      <p class="simple-text text-9 wide-text">
        When temperature rises, macromolecular chains inside PE are fully stretched, making it easier for O2 and PEase to entry and oxidize PE.                                                     However, at present, thermostability and catalytic efficiency of wild type PEase is low.
      </p>
      <img src="@/assets/carbon-struct.png" class="carbon-struct"/>
    </div>
    <div class="main-box box-4">
      <p>However, at present, thermostability and catalytic efficiency of wild type PEase is low.</p>
      <p>Therefore, we hope to improve the thermostability of PEase by directed evolution to increase its possibility to work at higher temperstures. This project may lay the foundation for achieving joint action of various plastic degrading enzymes in the future.</p>
      <div class="video-box">
        <p>See our promtion video</p>
        <video></video>
      </div>
      <div class="more-info-box">
        <div class="left-box">
          <p>Contact us</p>
          <div>
            <img src=""/>
            <p></p>
          </div>
          <div>
            <img src=""/>
            <p></p>
          </div>
          <div>
            <img src=""/>
            <img src=""/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { use } from "echarts/core"
import { CanvasRenderer } from "echarts/renderers"
import { PieChart } from "echarts/charts";
import {
  TitleComponent,
  TooltipComponent,
  LegendComponent
} from "echarts/components";
import VChart from "vue-echarts";

use([
  CanvasRenderer,
  PieChart,
  TitleComponent,
  TooltipComponent,
  LegendComponent
]);

const option = {
  title: {
    text: 'plastic waste',
    left: 'center',
    textStyle:{
      color:"#FFFFFF",
      fontSize:30
    }
  },
  series: [
    {
      name: 'Access From',
      type: 'pie',
      radius: '50%',
      data: [
        { value: 0.36, name: 'Others' },
        { value: 0.64, name: 'PE' },
      ],
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      },
      label: {
                show: true,
                formatter: '{b}: {c} ({d}%)'
      }
    }
  ]
};
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
  background-image: url("../assets/background-1.png");
}
.box-2 {
  background-image: url("../assets/background-2.png");
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
.short-text{
  max-width:22.5vw;
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
  justify-content: space-around;
  word-spacing: 20px;
  position: absolute;
  top:105vh;
  width:80vw;
  left:10vw;
  bottom: 120vh;
}
.echarts-box{
  width:40vw;
  position: absolute;
  top:120vh;
  right:5vw;
}
.much-animals{
  height:180vh;
  position: absolute;
  left:0vw;
  top:70vh;
}
.simple-text{
  color:#FFFFFF;
}
.text-1{
  position:absolute;
  bottom:15vh;
  right:12vw;
}
.text-2{
  position:absolute;
  top:85vh;
  right:12vw;
}
.icon-1{
  position: absolute;
  left:10vw;
  top:0vh;
  height:130vh;
}
.big-text{
  font-size:50px;
  font-weight: bold;
  color:#FFFFFF;
  word-spacing: 30px;
  height:60vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  position: absolute;
  left:5vw;
  top:10vh;
}
.echarts-box{
  height:60vh;
  width:40vw;
  position: absolute;
  top:120vh;
  right:5vw;
}
.much-animals{
  height:180vh;
  position: absolute;
  left:0vw;
  top:70vh;
}
.simple-text{
  color:#FFFFFF;
  font-size:18px;
}
.desc-text{
  font-size:16px;
  color:#000000;
}
.text-1{
  position:absolute;
  bottom:15vh;
  right:12vw;
}
.text-2{
  position:absolute;
  top:85vh;
  right:12vw;
}
.icon-1{
  position: absolute;
  left:10vw;
  top:0vh;
  height:130vh;
}
.big-text-1{
  font-size:50px;
  font-weight: bold;
  color:#FFFFFF;
  word-spacing: 30px;
  height:60vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  position: absolute;
  left:5vw;
  top:10vh;
}
.liucheng-box{
  height:55vh;
  width:40vw;
  background:#FFFFFF;
  display:flex;
  justify-content: center;
  align-items: center;
  border-radius: 1vh;
  position: absolute;
  right:5vw;
  top:10vh;
  box-shadow: 0 0 1vh #00000050;
}
.liucheng{
  height:60vh;
  margin-top:20vh;
}
.text-3{
  position: absolute;
  top:16vh;
}
.text-4{
  position: absolute;
  top:35vh;
}
.text-5{
  position: absolute;
  top:48vh;
  left:1vw;
}
.text-6{
  position: absolute;
  top:48vh;
  right:1vw;
}
.text-7{
  position:absolute;
  right:12.5vw;
  top:70vh;
}
.text-8{
  position:absolute;
  right:10vw;
  top:5vh;
}
.text-9{
  position: absolute;
  right: 10vw;
  top:30vh;
}
.carbon-struct{
  width:40vw;
  position: absolute;
  right:12.5vw;
  top:50vh;
}
</style>
