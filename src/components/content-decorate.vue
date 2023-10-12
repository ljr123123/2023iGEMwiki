<template>
  <div class="content">
    <div class="side-bar">
      <img
        v-for="(item, i) in props.navigation"
        :key="i"
        :src="
          'https://static.igem.wiki/teams/4627/wiki/navigator/' +
          item +
          '-' +
          (activeItem === item ? 1 : 0) +
          '.png'
        "
        @click="toNav(item)"
      />
    </div>
    <div class="main-content" ref="myDiv">
      <canvas
        id="myCanvas"
        ref="myCanvas"
        style="position: absolute; top: 0; left: 0; z-index: 1"
      ></canvas>
      <div class="slot">
        <slot></slot>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import bus from "@/libs/bus.js";
const myDiv = ref(null);
const myCanvas = ref(null);
const props = defineProps(["navigation"]);
const activeItem = ref(props.navigation[0]);
onMounted(() => {
  bus.on("imageLoaded", handleImageLoad);
  window.addEventListener("scroll", handleScroll);
});
onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
const handleScroll = () => {
  for (const item of props.navigation) {
    const anchor = document.getElementById(item);
    if (anchor) {
      const rect = anchor.getBoundingClientRect();
      if (rect.top > 0) {
        activeItem.value = item;
        break;
      }
    }
  }
};
const toNav = (item) => {
  activeItem.value = item;
  let anchor = document.getElementById(item);
  console.log(anchor);
  if (anchor == null) return;
  anchor.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
};
const handleImageLoad = () => {
  if (myCanvas.value == null) return;
  const canvas = myCanvas.value;
  const context = canvas.getContext("2d");

  // Set the canvas size to match the div size
  let ox = 30,
    oy = 30;
  canvas.width = myDiv.value.offsetWidth;
  canvas.height = myDiv.value.offsetHeight;

  // Fill entire canvas with the outer color
  context.fillStyle = "#cbe8fe";
  context.fillRect(ox, oy, canvas.width, canvas.height);

  // Draw the border
  context.lineWidth = 10;
  context.strokeStyle = "#2e4e7e";

  const randomness = 24; // Adjust this for more or less randomness
  const segments = 12; // Number of segments per side

  // Function to draw a wavy line from (x1, y1) to (x2, y2)
  const drawWavyLine = (x1, y1, x2, y2) => {
    for (let i = 0; i <= segments; i++) {
      const x = x1 + (x2 - x1) * (i / segments);
      const y = y1 + (y2 - y1) * (i / segments);
      const dx = x2 - x1;
      const dy = y2 - y1;
      const offset = (Math.random() - 0.5) * randomness;
      if (Math.abs(dx) > Math.abs(dy)) {
        context.lineTo(x, y + offset);
      } else {
        context.lineTo(x + offset, y);
      }
    }
  };

  // Draw the four sides of the rectangle
  context.beginPath();
  drawWavyLine(ox, oy, canvas.width - 2 * ox, oy);
  drawWavyLine(
    canvas.width - 2 * ox,
    oy,
    canvas.width - 2 * ox,
    canvas.height - 2 * oy
  );
  drawWavyLine(
    canvas.width - 2 * ox,
    canvas.height - 2 * oy,
    ox,
    canvas.height - 2 * oy
  );
  drawWavyLine(ox, canvas.height - 2 * oy, ox, oy);
  // Close the path
  //context.closePath();

  // Fill the inside of the rectangle with the inner color
  context.fillStyle = "#e6edf3";
  context.fill();
  context.stroke();
};
</script>

<style scoped>
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
  position: sticky;
  top: 200px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: calc(100vh - 400px);
}
.side-bar img {
  width: 200px;
  cursor: pointer;
}
.slot {
  position: relative;
  z-index: 20;
  padding: 20px 40px;
  margin-bottom: 60px;
}
</style>