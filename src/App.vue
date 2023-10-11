<template>
  <transition name="fade">
    <loading-view v-if="loading" />
  </transition>
  <header-nav />
  <router-view />
  <div class="bottom">
    <div class="left-side">
      <p class="contact-us">Contact Us</p>
      <div class="line-box">
        <img src="https://static.igem.wiki/teams/4627/wiki/location.png" class="small-icon"/>
        <p class="simple-text"><strong>Address  </strong>China No.92 Weijin Road, Nankai District, Tianjin</p>
      </div>
      <div class="line-box">
        <img src="https://static.igem.wiki/teams/4627/wiki/contact-us.png" class="small-icon"/>
        <p class="simple-text"><strong>Email  </strong>tjusls_china@163.com</p>
      </div>
      <div class="line-box">
        <img src="https://static.igem.wiki/teams/4627/wiki/wechat.png" class="small-icon"/>
        <img src="https://static.igem.wiki/teams/4627/wiki/dou-yin.png" class="small-icon"/>
      </div>
    </div>
    <div class="right-side">
      <div class="school-logo-box">
        <img src="https://static.igem.wiki/teams/4627/wiki/college-logo.png" class="school-logo"/>
        <img src="https://static.igem.wiki/teams/4627/wiki/school-logo.png" class="school-logo"/>
      </div>
      <div class="other-logo-box">
        <img src="https://static.igem.wiki/teams/4627/wiki/genstar.png" class="other-logo"/>
        <img src="https://static.igem.wiki/teams/4627/wiki/idt.png" class="other-logo"/>
        <img src="https://static.igem.wiki/teams/4627/wiki/jin-wei-zhi.png" class="other-logo"/>
        <img src="https://static.igem.wiki/teams/4627/wiki/kang-run.png" class="other-logo"/>
      </div>
    </div>
  </div>
  <p class="copyrights">©2023-Content on this site is licensed under a Creative Commons Attributions 4.0 International license.</p>
  <p class="copyrights"> The repository used to created this website is available at gitlab.igem.org/2023/tjusls-china</p>
  
</template>

<script>
import headerNav from "@/components/header-nav.vue";
import loadingView from "@/components/loading-view.vue";

export default {
  components: {
    headerNav,
    loadingView,
  },
  data() {
    return {
      loading: false,
    };
  },
  watch: {
    loading(v) {
      document.body.style.overflow = v ? "hidden" : "";
    },
  },
  mounted() {
    if (this.$route.path === "/") {
      this.loading = true;
    }
    window.onload = () => {
      this.hideLoading();
    };
  },
  beforeUnmount() {
    window.onload = null;
  },
  methods: {
    hideLoading() {
      this.loading = false;
    },
  },
};
</script>

<style>
.copyrights{
  padding:1vh;
  background: #00000080;
  color:#FFFFFF;
}
#app{
  display: flex;
  flex-direction: column;
}
.contact-us{
  padding-bottom:2vh;
  font-size:20px;
  font-weight: bold;
}
.bottom{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding:2vh;
}
.left-side, .right-side{
  display: flex;
  flex-direction: column;
  width:45vw;
}
.other-logo{
  height:5vh;
}
.small-icon{
  height: 5vh;
}
.school-logo{
  height:10vh;
}
.line-box{
  display: flex;
  align-items: center;
}
* {
  box-sizing: border-box;
}
body {
  margin: 0;
  padding: 0;
}
#app {
  position: relative;
  width: 100%;
}
img {
  -webkit-user-drag: none;
  user-select: none;
}
p {
  margin: 0;
  padding: 0;
  font-family: Arial, Helvetica;
}
::-webkit-scrollbar-track {
  background: #fcfcfc;
  border-radius: 5px;
}

::-webkit-scrollbar {
  -webkit-appearance: none;
  width: 6px;
  height: 6px;
}

::-webkit-scrollbar-thumb {
  cursor: pointer;
  border-radius: 5px;
  background: #8b8b8b;
  transition: color 0.2s ease;
}
::-webkit-scrollbar-thumb:hover {
  background: #636363;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.75s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>