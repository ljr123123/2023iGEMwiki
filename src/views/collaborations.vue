<!--Jerry开始做了-->
<template>
  <div class="main">
      <img src="@/assets/other-background.png" class="other-background"/>
    <div class="main-content">
      <TextWithImage
      mainTitle="OVERVIEW"
      :textContent="textContent1">
      </TextWithImage>
      <TextWithImage
      mainTitle="Collaboration with BJEA_China"
      :textContent="textContent2">
      </TextWithImage>
      <img src="https://static.igem.wiki/teams/4627/wiki/team-collaboration-1-1.jpg" class="picture2"/>
      <img src="https://static.igem.wiki/teams/4627/wiki/team-collaboration-1-2.jpg" class="picture2"/>

      <TextWithImage
      subTitle="Begonia Day in Tianjin University with Beiyang Medical Students Union"
      :textContent="textContent3">
      </TextWithImage>
      <img src="https://static.igem.wiki/teams/4627/wiki/team-collaboration-1-3.jpg" class="picture2"/>
      <img src="https://static.igem.wiki/teams/4627/wiki/team-collaboration-1-4.jpg" class="picture2"/>
      <img src="https://static.igem.wiki/teams/4627/wiki/team-collaboration-1-5.jpg" class="picture2"/>
      <img src="https://static.igem.wiki/teams/4627/wiki/team-collaboration-1-6.jpg" class="picture2"/>

      <TextWithImage
      subTitle="Collaboration with CCiC"
      :textContent="textContent4">
      </TextWithImage>
    </div>
  </div>
</template>

<script setup>
import TextWithImage from "@/components/text-with-image.vue"
const textContent1 = [
  "Cooperation is an essential part of each project. In this bidirectional communication and mutual assistance, we can have a better understanding of the frontier progress of our respective fields,  seeing the shortcomings of the current projects from each other's perspective and viewing problems from a critical perspective. At the same time, different solutions to the same problem by different teams are also worth learning. Previous mistakes will become lessons, and previous achievements will become the template.","In the cooperation, we achieve mutual benefit and progress together. While having valuable exchanges, we harvest the happiness of friendship. We constantly accept and think about the opinions and suggestions of others, deeply understand and optimize our own projects, and finally reached the current ideal effect."
]
const textContent2 = [
  "In April 2023, BJEA-China team visited Tianjin University. The main members of the two teams introduced each other, met each other, briefly introduced the research direction and future prospects of the two teams, and reached cooperation intention in various aspects.",
  "From July 23rd to August 2nd , the BJEA-China team visited the School of Life Sciences of Tianjin University, hoping to communicate with us about the details of the experimental operation. During the visit, we learned that the BJEA-China team was still unskilled in laboratory operation. We are very willing to pass on the knowledge we learned in college and the experience we gained from working in the laboratory. They also carefully learned the relevant laboratory skills and regulations requirements,gradually adapting to the laboratory environment. The team members make progress together in teaching and learning."
]
const textContent3 = [
  "In April 2023, TJUSLS-China participated in the annual Begonia Festival hosted by Tianjin University, which was the first large-scale on-campus event held after the outbreak. TJUSLS-China and Beiyang Medical Students Union(BYMS) jointly set up the main booth and sub-booth, which showed the advantages of enzymatic plastic lysis compared with physical and chemical methods to the public through the experimental effect, and made the public experience the fun of scientific research through the lottery drawing, model building and manual making. According to rough statistics, the two stalls audience of about 20,000 people.",
  "Before the event, we introduced our project to BYMS, and we also learned from them that many medical devices were made from PE. We are more deeply aware of the extensive use of PE plastic in life. TJUSLS-China and BYMS both introduced their ideas, goals and effectiveness of their activities through the wechat official account.",
  "In the early process of introducing the basic information and exchanging ideas, BYMS's students also showed great interest in the enzymatic hydrolysis of polyethylene. Therefore, the proposal of co-holding activities and joint publicity was proposed. Through this collaboration, we are more convinced that the charm of PEase biodegradation is infinite. "
]
const textContent4 = [
  "In 2022, the responsible HP group students of the team joined the CCiC Executive Committee and participated in the organization of online sharing meetings and other activities. In early July 2023, the CCiC Conference was held in Hainan in a combination of online and offline ways. The TJUSLS-China team attended the conference in the online form, showing the team style in front of hundreds of participating teams and individuals. We carefully studied the projects of other participating teams, and gained a lot in background research, modeling, wet experiments, human practice and other aspects. Surprisingly, the members of the art team got creative inspiration in this meeting, and finally determined the style that our team will show for this year."
]
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