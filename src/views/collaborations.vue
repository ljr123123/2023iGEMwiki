<!--Jerry开始做了-->
<template>
  <div class="main">
<<<<<<< HEAD
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
=======
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
>>>>>>> ce563d8b86ea2570b495c25e3f48f6085695dca8
    </div>
  </div>
</template>

<script setup>
import TextWithImage from "@/components/text-with-image.vue"
<<<<<<< HEAD
const textContent1 = [
  "在每个项目中，合作都是必不可少的一部分。在这双向的沟通、互助中，我们更能了解各自领域的前沿进展，并且从彼此的视角中看到目前项目存在的不足，从批判的角度看问题。与此同时，不同团队对于相同问题的不同解决办法也非常值得我们学习，此前犯过的错误会成为现在的教训，此前达成的成就会成为现在的模板。","在合作中，我们互惠互利、合作共进，在进行宝贵交流的同时，收获了友谊的快乐。我们不断接受、思考他人的意见与建议，对自己的项目进行深入理解和优化，终于到了目前的理想效果。",
  "Cooperation is an essential part of each project. In this bidirectional communication and mutual assistance, we can have a better understanding of the frontier progress of our respective fields,  seeing the shortcomings of the current projects from each other's perspective and viewing problems from a critical perspective. At the same time, different solutions to the same problem by different teams are also worth learning. Previous mistakes will become lessons, and previous achievements will become the template.","In the cooperation, we achieve mutual benefit and progress together. While having valuable exchanges, we harvest the happiness of friendship. We constantly accept and think about the opinions and suggestions of others, deeply understand and optimize our own projects, and finally reached the current ideal effect."
]
const textContent2 = [
  "2023年4月，在TJUSLS-China团队开展海棠节相关活动期间，BJEA-China团队到访天津大学卫津路校区。双方团队的主要成员互相介绍、初识对方，并简要介绍了两团队的研究方向、未来展望，在多方面达成合作意向。",
  "7月23日至8月2日，BJEA-China团队访问天津大学生命科学学院，希望就具体实验操作细节与我们展开学习交流。访问交流期间，我们了解到BJEA-China团队对于实验室操作还很不熟练。我们非常愿意将我们在大学学到的知识以及在实验室工作获得的经验传递给他们。他们也认真学习了相关实验室技能与规章要求，逐渐适应了实验室环境。队员们在教学相长中共同进步。 ",
  "In April 2023, BJEA-China team visited Tianjin University. The main members of the two teams introduced each other, met each other, briefly introduced the research direction and future prospects of the two teams, and reached cooperation intention in various aspects.",
  "From July 23rd to August 2nd , the BJEA-China team visited the School of Life Sciences of Tianjin University, hoping to communicate with us about the details of the experimental operation. During the visit, we learned that the BJEA-China team was still unskilled in laboratory operation. We are very willing to pass on the knowledge we learned in college and the experience we gained from working in the laboratory. They also carefully learned the relevant laboratory skills and regulations requirements,gradually adapting to the laboratory environment. The team members make progress together in teaching and learning."
]
const textContent3 = [
  "2023年4月，TJUSLS-China参加了天津大学主办的一年一度的海棠节，这是疫情后举办的第一场校内大型活动。TJUSLS-China和Beiyang Medical Students Union联合搭建了主摊位与分摊位，通过实验效果向公众展示了酶解塑料相较于物理法和化学法的优势，并通过答题抽奖、模型搭建、手工制作等活动让公众实际体验了科研乐趣。据粗略统计，两个摊位受众约20000人。",
  "活动前，我们向Beiyang Medical Students Union介绍了我们的项目，也通过他们了解到有很多医疗器械是由PE制成。我们更加深刻地认识到PE塑料在生活中使用的广泛度。TJUSLS-China和Beiyang Medical Students Union双方都通过微信公众号介绍了各自的理念、目的与活动成效。",
  "在前期的项目基本情况介绍和理念交流过程中，Beiyang Medical Students Union的同学也对聚乙烯的酶解表现出极大的兴趣。因此提出了共同举办活动，联合宣传的提议。通过这次合作，我们更加坚信了PEase生物降解的魅力是无穷的。",
  "In April 2023, TJUSLS-China participated in the annual Begonia Festival hosted by Tianjin University, which was the first large-scale on-campus event held after the outbreak. TJUSLS-China and Beiyang Medical Students Union(BYMS) jointly set up the main booth and sub-booth, which showed the advantages of enzymatic plastic lysis compared with physical and chemical methods to the public through the experimental effect, and made the public experience the fun of scientific research through the lottery drawing, model building and manual making. According to rough statistics, the two stalls audience of about 20,000 people.",
  "Before the event, we introduced our project to BYMS, and we also learned from them that many medical devices were made from PE. We are more deeply aware of the extensive use of PE plastic in life. TJUSLS-China and BYMS both introduced their ideas, goals and effectiveness of their activities through the wechat official account.",
  "In the early process of introducing the basic information and exchanging ideas, BYMS's students also showed great interest in the enzymatic hydrolysis of polyethylene. Therefore, the proposal of co-holding activities and joint publicity was proposed. Through this collaboration, we are more convinced that the charm of PEase biodegradation is infinite. "
]
const textContent4 = [
  "2022年，团队HP组的负责同学加入了CCiC执行委员会，参与了线上分享会等活动的组织。2023年7月初，CCiC大会在海南以线上线下相结合的方式进行，TJUSLS-China团队以线上形式参会，在数以百计的参会队伍和个人前展现了队伍风采。我们认真学习了其他与会团队的项目，在背景调研、建模、湿实验、人类实践等方面都有很大的收获。令人惊喜的是，团队美工组成员在这次会议中获得了创作灵感，最终确定了今年我们团队展示的风格。",
  "In 2022, the responsible HP group students of the team joined the CCiC Executive Committee and participated in the organization of online sharing meetings and other activities. In early July 2023, the CCiC Conference was held in Hainan in a combination of online and offline ways. The TJUSLS-China team attended the conference in the online form, showing the team style in front of hundreds of participating teams and individuals. We carefully studied the projects of other participating teams, and gained a lot in background research, modeling, wet experiments, human practice and other aspects. Surprisingly, the members of the art team got creative inspiration in this meeting, and finally determined the style that our team will show for this year."
]
=======
import SideBar from "@/components/side-bar.vue"

>>>>>>> ce563d8b86ea2570b495c25e3f48f6085695dca8
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
<<<<<<< HEAD
.person-name{
  color:blue;
  cursor:pointer;
}
=======
>>>>>>> ce563d8b86ea2570b495c25e3f48f6085695dca8
.other-background{
  width:100vw;
  height:80vh;
  position:absolute;
  left:0;
  top:0;
}
<<<<<<< HEAD
.picture1{
  width:60vw;
}
.picture2{
  width:35vw;
  height:45vh;
  padding:1vw
}
=======
>>>>>>> ce563d8b86ea2570b495c25e3f48f6085695dca8
</style>