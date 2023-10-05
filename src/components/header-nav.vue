<template>
  <div class="head-nav">
    <img src="@/assets/team-logo.png" class="team-logo" />
    <div class="navbar" ref="navbar" @mouseleave="hideMenu">
      <div
        class="router-box"
        v-for="(item, i) in router_box"
        :key="i"
        @mouseenter="(e) => moveMenu(e, i)"
      >
        <p class="router-name">{{ item.name }}</p>
      </div>
    </div>
    <div
      :class="'nav-menu' + (aniMenu ? ' ani' : '')"
      ref="menu"
      :style="{
        left: `${menuPosition}px`,
        opacity: `${menuOpacity}`,
      }"
      @mouseenter="moveEnterMenu"
      @mouseleave="hideMenu"
    >
      <a
        class="menu-item"
        v-for="(item, i) in menuItem"
        :key="i"
        :href="item.path"
      >
        {{ item.name }}
      </a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showMenu: false,
      menuPosition: 0,
      aniMenu: false,
      menuOpacity: 0,
      menuHeight: 0,
      menuWidth: 0,
      menuItem: [],
      timer: null,
      router_box: [
        {
          name: "Home",
          path: "/",
        },
        {
          name: "Project",
          sub_router: [
            { name: "Description", path: "/description" },
            { name: "Design", path: "/design" },
            { name: "Engineering", path: "/engineering" },
            { name: "Experiments", path: "/experiments" },
            { name: "Results", path: "/results" },
            { name: "Implementation", path: "/implementation" },
            { name: "Contribution", path: "/contribution" },
            { name: "Safety", path: "/safety" },
            { name: "Notebook", path: "/notebook" },
          ],
          is_show: false,
        },
        {
          name: "Parts",
          sub_router: [],
          is_show: false,
        },
        {
          name: "Model",
          sub_router: [
            { name: "Model", path: "/model" },
            { name: "Software", path: "/software" },
            { name: "Hardware", path: "/hardware" },
          ],
          is_show: false,
        },
        {
          name: "HP",
          sub_router: [
            { name: "Overview", path: "/human-overview" },
            { name: "Integrated Human Practices", path: "/human-practice" },
            { name: "Science Communication", path: "/communication" },
            { name: "Game", path: "/game" },
          ],
          is_show: false,
        },
        {
          name: "Team",
          sub_router: [
            { name: "Team Members", path: "/team" },
            { name: "Attributions", path: "/attributions" },
            { name: "Collaborations", path: "/collaborations" },
          ],
          is_show: false,
        },
        {
          name: "Judgement",
          sub_router: [
            { name: "Gold", path: "/gold" },
            { name: "Silver", path: "/silver" },
            { name: "Bronze", path: "/bronze" },
            { name: "Awards", path: "/awards" },
          ],
          is_show: false,
        },
      ],
    };
  },
  methods: {
    moveMenu(event, i) {
      if (this.showMenu === false) {
        this.aniMenu = false;
        setTimeout(() => {
          this.aniMenu = true;
        }, 500);
      } else {
        this.aniMenu = true;
      }
      this.showMenu = true;
      this.menuItem = this.router_box[i].sub_router || [];
      this.$forceUpdate();
      this.$nextTick(() => {
        const rect = event.target.getBoundingClientRect();
        const menuRect = this.$refs.menu.getBoundingClientRect();
        this.menuOpacity = 1;
        this.menuPosition = rect.left + rect.width / 2 - menuRect.width / 2;
      });
    },
    moveEnterMenu() {
      setTimeout(() => {
        this.menuOpacity = 1;
        clearTimeout(this.timer);
        this.showMenu = true;
      }, 0);
    },
    hideMenu() {
      this.aniMenu = true;
      this.menuOpacity = 0;
      this.timer = setTimeout(() => {
        this.showMenu = false;
        this.aniMenu = false;
      }, 500);
    },
  },
};
</script>

<style scoped>
.head-nav {
  height: 70px;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  background: rgba(46, 78, 126);
  position: fixed;
  top: 0;
    z-index:100;
  z-index: 998;
}
.team-logo {
  width: 240px;
  margin-left: 50px;
  margin-right: 60px;
}
.navbar {
  display: flex;
  align-items: center;
  height: 100%;
}
.router-box {
  color: #ffffff;
  position: relative;
  display: flex;
  height: 100%;
  padding: 0 20px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
.router-name {
  font-size: 18px;
}
.nav-menu {
  position: fixed;
  top: 70px;
  left: 0;
  background-color: #304e7c;
  opacity: 0;
  border-radius: 0 0 5px 5px;
  display: flex;
  flex-direction: column;
}
.menu-item {
  padding: 10px 15px;
  color: white;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
}
.menu-item:hover {
  background-color: rgba(0, 0, 0, 0.2);
}
.ani {
  transition: all 0.5s;
}
.router-box:hover {
  background-color: rgba(0, 0, 0, 0.2);
}
</style>