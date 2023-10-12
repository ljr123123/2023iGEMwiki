<!--tang-->
<template>
        <div class="main">
          <img
            src="https://static.igem.wiki/teams/4627/wiki/other-background.png"
            class="other-background"
          />
          <div class="page-title">Notebook</div>
          
          <content-decorate style="margin-top: -20vh" :navigation="navigation">
            <text-with-image
              main-title="Overview"
              aid="overview"
              :textContent="[
              'For the wet lab team, notebook is essential. By faithfully recording daily experimental process, the subsequent summary, reflection and optimization can be effectively carried out. Each member of our experimental group has his own notebook. For details, please click on each member\'s name to view their notebook.',
        ]"
            ></text-with-image>
            <p class="person-name" v-for="item in persons" :key="item">{{ item }}</p>
          </content-decorate>
        </div>
      </template>
      
      <script setup>
      import TextWithImage from "@/components/text-with-image.vue";
      import ContentDecorate from "@/components/content-decorate.vue";
      const navigation = [
        "overview",
      ];
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
        display: flex;
        align-items: center;
        flex-direction: column;
        background-color: #cbe8fe;
      }
      .other-background {
        width: 100%;
        height: 100vh;
      }
      .main-content {
        position: relative;
        width: 80%;
        padding: 20px 40px;
        overflow: visible;
      }
      .content {
        width: 80%;
        display: flex;
        margin-bottom: 40px;
      }
      .side-bar {
        width: 20%;
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
      .picture {
        width: 40px;
      }
      </style>
