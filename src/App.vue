<template>
  <transition name="fade">
    <loading-view v-if="loading" />
  </transition>
  <header-nav />
  <router-view />
  <div class="bottom">
    <div class="left-side">
      <p>Contact Us</p>
      <div class="line-box">
        <img src="" class="small-icon"/>
        <p class="simple-text"></p>
      </div>
      <div class="line-box">
        <img src="" class="small-icon"/>
        <p class="simple-text"></p>
      </div>
      <div class="line-box">
        <img src="" class="small-icon"/>
        <img src="" class="small-icon"/>
      </div>
    </div>
    <div class="right-side"></div>
  </div>
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