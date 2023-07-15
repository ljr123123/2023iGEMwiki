<template>
  <div class="title-bar" @click="allDisappear()">
    <div v-for="item in main_routers" :key="item.name" class="main-router">
        <p class="main-name" @click.stop="change(item)">
          {{ item.name }}
          <img src="https://static.igem.wiki/teams/4627/wiki/down-rect.svg" class="down"/>
        </p>
          <div class="sub-routers" v-show="item.is_show">
            <p v-for="child in item.sub_routers" :key="child.name" class="sub-router" @click="alertNew()">
              {{ child.name }}
            </p>
          </div>
    </div>
    <img class="team-icon" src="https://static.igem.wiki/teams/4627/wiki/love-heart.png"/>
  </div>
</template>

<script setup>
import { reactive } from "vue"
function alertNew(){
  alert('Stay tuned.');
}
function change(theItem){
  main_routers.forEach((item) => {
    item.is_show = false;
  })
  theItem.is_show = true;
}
function allDisappear(){
  main_routers.forEach((item) => {
    item.is_show = false;
  })
}
const main_routers = reactive([
  {
  name:"Project",
  is_show:false,
    sub_routers:[
    {router:"", name:"Description"},
    {router:"",name:"Contribution"},
    {router:"",name:"Enginnering Success"}
  ]},
  {
  name:"Wet Lab",
  is_show:false,
  sub_routers:[
    {router:"", name:"Experiments"},
    {router:"",name:"NoteBooks"},
    {router:"",name:"Results"}
  ]},
  {
  name:"Dry Lab",
  is_show:false,
  sub_routers:[
    {router:"", name:"Experiments"},
    {router:"",name:"NoteBooks"},
    {router:"",name:"Results"}
  ]},
  {
  name:"Human Practice",
  is_show:false,
  sub_routers:[
    {router:"", name:"Experiments"},
    {router:"",name:"NoteBooks"},
    {router:"",name:"Results"}
  ]},
  {
  name:"Team",
  is_show:false,
  sub_routers:[
    {router:"", name:"Experiments"},
    {router:"",name:"NoteBooks"},
    {router:"",name:"Results"}
  ]},
])
</script>

<style scoped>
.title-bar{
  height:10vh;
  width:95%;
  padding-right:5%;
  position: absolute;
  left:0;
  top:0;
  display: flex;
  flex-direction: row-reverse;
  background: #Ffc0cb50;
  align-items: center;
}
.main-router{
  margin:3vh;
  position: relative;
  display:flex;
  flex-direction: column;
  align-items: center;
  cursor:pointer;
}
.main-name{
  color:#db99a4;
  display: flex;
  flex-direction: row;
  align-items: center;
}
.sub-routers{
  position: absolute;
  text-align: center;
  margin-top:4vh;
  box-shadow: 0 0 1px black;
  border-radius: 1vh;
  background: #Ffc0cb;
}
.sub-router{
  padding:1vh;
  cursor:pointer;
}
.sub-routers-enter-active{
  animation: main-router .5s;
}
.sub-routers-leave-active{
  animation: main-router .5s reverse;
}
.down{
  height:3vh;
}
.team-icon{
  height:8vh;
  margin-right: 43vw;
}
</style>