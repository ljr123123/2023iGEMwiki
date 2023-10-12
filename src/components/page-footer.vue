<template>
  <div class="bottom">
    <div class="left-side">
      <p class="contact-us">Contact Us</p>
      <div class="line-box">
        <img
          src="https://static.igem.wiki/teams/4627/wiki/location.png"
          class="small-icon"
        />
        <p class="simple-text-2">
          <strong>Address </strong>China No.92 Weijin Road, Nankai District,
          Tianjin
        </p>
      </div>
      <div class="line-box">
        <img
          src="https://static.igem.wiki/teams/4627/wiki/contact-us.png"
          class="small-icon"
        />
        <p class="simple-text-2"><strong>Email </strong>tjusls_china@163.com</p>
      </div>
      <div class="line-box">
        <img
          src="https://static.igem.wiki/teams/4627/wiki/wechat.png"
          class="small-icon"
        />
        <img
          src="https://static.igem.wiki/teams/4627/wiki/dou-yin.png"
          class="small-icon"
        />
      </div>
    </div>
    <div class="right-side">
      <div class="school-logo-box">
        <img
          src="https://static.igem.wiki/teams/4627/wiki/college-2.png"
          class="school-logo"
        />
        <img
          src="https://static.igem.wiki/teams/4627/wiki/school-2.jpg"
          class="school-logo"
        />
      </div>
      <div class="other-logo-box">
        <img
          src="https://static.igem.wiki/teams/4627/wiki/genstar.png"
          class="other-logo"
        />
        <img
          src="https://static.igem.wiki/teams/4627/wiki/idt.png"
          class="other-logo"
        />
        <img
          src="https://static.igem.wiki/teams/4627/wiki/jin-wei-zhi-2.png"
          class="other-logo"
        />
        <img
          src="https://static.igem.wiki/teams/4627/wiki/kang-run.png"
          class="other-logo"
        />
      </div>
    </div>
  </div>
  <p class="copyrights">
    ©2023-Content on this site is licensed under a Creative Commons Attributions
    4.0 International license.
  </p>
  <p class="copyrights">
    The repository used to created this website is available at
    <a href="http://gitlab.igem.org/2023/tjusls-china" target="_blank"
      >http://gitlab.igem.org/2023/tjusls-china</a
    >
  </p>
</template>

<script>
export default {};
</script>

<style scoped>
.copyrights {
  text-align: center;
  padding: 1vh;
  background: #00000080;
  color: #ffffff;
}
.bottom {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 4vh 2vh;
}
.left-side,
.right-side {
  display: flex;
  flex-direction: column;
  width: 40vw;
}
.other-logo {
  height: 5vh;
  margin: 0 10px;
}
.small-icon {
  height: 5vh;
}
.school-logo {
  height: 10vh;
  margin: 10px 30px;
}
.line-box {
  display: flex;
  align-items: center;
}
.school-logo-box {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.contact-us {
  padding-bottom: 2vh;
  font-size: 20px;
  font-weight: bold;
}
</style>