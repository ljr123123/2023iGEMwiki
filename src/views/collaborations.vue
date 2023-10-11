<!--Jerry开始做了-->
<template>
  <div class="main">
    <img src="@/assets/other-background.png" class="other-background"/>
    <SideBar heading="experiments" :child_heading="['experiments']"></SideBar>
    <div class="main-content">
      <TextWithImage 
      mainTitle="OVERVIEW"
      :textContent="[
        'Cooperation is an essential part of each project. In this bidirectional communication and mutual assistance, we can have a better understanding of the frontier progress of our respective fields,  seeing the shortcomings of the current projects from each other\'s perspective and viewing problems from a critical perspective. At the same time, different solutions to the same problem by different teams are also worth learning. Previous mistakes will become lessons, and previous achievements will become the template.',
        'In the cooperation, we achieve mutual benefit and progress together. While having valuable exchanges, we harvest the happiness of friendship. We constantly accept and think about the opinions and suggestions of others, deeply understand and optimize our own projects, and finally reached the current ideal effect.'
      ]"></TextWithImage>
      <TextWithImage
      mainTitle="Collaboration with BJEA_China"
      :textContent="[
        'In April 2023, BJEA-China team visited Tianjin University. The main members of the two teams introduced each other, met each other, briefly introduced the research direction and future prospects of the two teams, and reached cooperation intention in various aspects.',
        'From July 23rd to August 2nd , the BJEA-China team visited the School of Life Sciences of Tianjin University, hoping to communicate with us about the details of the experimental operation. During the visit, we learned that the BJEA-China team was still unskilled in laboratory operation. We are very willing to pass on the knowledge we learned in college and the experience we gained from working in the laboratory. They also carefully learned the relevant laboratory skills and regulations requirements,gradually adapting to the laboratory environment. The team members make progress together in teaching and learning.'
      ]"
      :imageUrls="[
        'https://static.igem.wiki/teams/4627/wiki/coll-1.png',
        'https://static.igem.wiki/teams/4627/wiki/coll-2.jpg'
      ]"></TextWithImage>
      <TextWithImage
      mainTitle="Begonia Day in Tianjin University with Beiyang Medical Students Union"
      :textContent="[
        'In April 2023, TJUSLS-China participated in the annual Begonia Festival hosted by Tianjin University, which was the first large-scale on-campus event held after the outbreak. TJUSLS-China and Beiyang Medical Students Union(BYMS) jointly set up the main booth and sub-booth, which showed the advantages of enzymatic plastic lysis compared with physical and chemical methods to the public through the experimental effect, and made the public experience the fun of scientific research through the lottery drawing, model building and manual making. According to rough statistics, the two stalls audience of about 20,000 people.',
        'Before the event, we introduced our project to BYMS, and we also learned from them that many medical devices were made from PE. We are more deeply aware of the extensive use of PE plastic in life. TJUSLS-China and BYMS both introduced their ideas, goals and effectiveness of their activities through the wechat official account.',
        'In the early process of introducing the basic information and exchanging ideas, BYM\'s students also showed great interest in the enzymatic hydrolysis of polyethylene. Therefore, the proposal of co-holding activities and joint publicity was proposed. Through this collaboration, we are more convinced that the charm of PEase biodegradation is infinite.'
      ]"
      :imageUrls="[
        'https://static.igem.wiki/teams/4627/wiki/coll-3.jpg',
        'https://static.igem.wiki/teams/4627/wiki/coll-4.jpg',
        'https://static.igem.wiki/teams/4627/wiki/coll-5.png',
        'https://static.igem.wiki/teams/4627/wiki/coll-6.jpg',
      ]"></TextWithImage>
      <TextWithImage
      mainTitle="Collaboration with CCiC"
      :textContent="[
        'In 2022, the responsible HP group students of the team joined the CCiC Executive Committee and participated in the organization of online sharing meetings and other activities. In early July 2023, the CCiC Conference was held in Hainan in a combination of online and offline ways. The TJUSLS-China team attended the conference in the online form, showing the team style in front of hundreds of participating teams and individuals. We carefully studied the projects of other participating teams, and gained a lot in background research, modeling, wet experiments, human practice and other aspects. Surprisingly, the members of the art team got creative inspiration in this meeting, and finally determined the style that our team will show for this year.'
      ]"
      :imageUrls="[
        'https://static.igem.wiki/teams/4627/wiki/coll-7.jpg'
      ]"></TextWithImage>
      <TextWithImage
      mainTitle="Round Table Meeting Held by ZJUT-China"
      :textContent="[
        'In the summer of 2023, ZJUT-China organized a roundtable discussion with Bioremediation-focused teams as participants, and 12 iGEM teams from Tianjin University, Shenzhen University, Zhejiang University, Beijing Institute of Technology and other schools participated,',
        'Each team gave a detailed description on the current project design and work, and talked about the project concept and the current goals. The iGEMers from different teams also had a heated discussion on the future cooperation direction and the current problems of the project. After the meeting, the TJUSLS-China team also received criticism and correction from the participating team.',
        'We were excited about this meeting because it brought together 12 teams in bioremediation. The communication and conversation in the same field made us feel very intimate and learned more things.'
      ]"
      :imageUrls="[
        'https://static.igem.wiki/teams/4627/wiki/coll-8.png'
      ]"></TextWithImage>
      <TextWithImage
      mainTitle="Summary"
      :textContent="[
        'In the preparation process of iGEM this year, we deeply realized the importance of cooperation, and felt the spark of the collision of ideas and the impetus of inspiration to the project. This communication also encourages us to develop our cooperation in depth, open our hearts and achieve a win-win situation.'
      ]"></TextWithImage>
    </div>
  </div>
</template>

<script setup>
import TextWithImage from "@/components/text-with-image.vue"
import SideBar from "@/components/side-bar.vue"

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