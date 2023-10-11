<!--tang-->
<template>
  <div class="main">
      <img src="@/assets/other-background.png" class="other-background"/>
    <div class="main-content">
      <img src="https://static.igem.wiki/teams/4627/wiki/hp.png" class="picture1"/>
      <TextWithImage
      :textContent="textContent1">
      </TextWithImage>
      <TextWithImage
      :textContent="textContent2">
      </TextWithImage>
      <TextWithImage
      :textContent="textContent3">
      </TextWithImage>
      <TextWithImage
      :textContent="textContent4">
      </TextWithImage>
      <TextWithImage
      :textContent="textContent5">
      </TextWithImage>
      <TextWithImage
      :textContent="textContent6">
      </TextWithImage>
      <TextWithImage
      :textContent="textContent7">
      </TextWithImage>
      <TextWithImage
      :textContent="textContent8">
      </TextWithImage>
      <TextWithImage
      :textContent="textContent9">
      </TextWithImage>
      <TextWithImage
      :textContent="textContent10">
      </TextWithImage>
    </div>
  </div>
</template>

<script setup>
import TextWithImage from "@/components/text-with-image.vue"
const textContent1 = [
  "According to the statistics, over 200 million tons of plastic waste are produced globally every year, with PE plastic pollution accounting for 69% of white pollution. PE is widely used in every aspects of life. However, the mismatch between high production and low recovery rates has led to the accumulation of pollutants. Therefore, it is urgent to find a method to treat PE plastics."
]
const textContent2 = [
  "PEase is the only enzyme newly discovered in recent years that can oxidize polyethylene. So it has great potential value. However, thermostability of wild-type PEase is low, making it difficult to achieve efficient degradation. So this year, we draw on the experience of previous years and read extensive previous work and papers. We focus on improving thermostability of PEase through directed evolution. We believe that PEase will brought incalculable benefits in environmental, economic, and management fields in the future."
]
const textContent3 = [
  "During the overall implementation of our project, we gained a comprehensive understanding of the entire life cycle of PE from various aspects such as companies, governments, and residents. We visited relevant enterprises and individuals in plastic production, recycling and treatment, and investigated the use of PE plastics in the market. In addition, we contacted and interviewed experts and scholars related to biology or environment to discuss principles of plastic decomposition, mutant and experimental design, environmental protection, etc. We integrated their opinions and suggestions into our project, hoping to guide the implementation of our project. We had the honor to communicate with government personnel of the Ecological Environment Bureau and learn more about current national policies on plastic pollution control. This has important guiding significance for us in the future."
]
const textContent4 = [
  "At the same time, we maintained cooperation and exchange with regional organizations and multiple universities, such as roundtable discussions, visits, online exchanges, and many other means. In order to promote synthetic biology to a larger audience, we conducted large-scale offline promotional activities, produced games, children's picture book and introduction videos, and distributed questionnaires for surveys. We hoped to shared what we have learned in an easy to understand way, so that layman can also participate. In addition, we used Tiktok short video, WeChat public platform, friends circle and other popular ways to publicize and record the progress of our project, hoping that people can understand the cutting-edge progress of synthetic biology more intuitively. Interestingly, debate team in our school took note of our project. We were very glad to start a debate on synthenic biology with them. "
]
const textContent5 = [
  "Finally, we summarized the information obtained from various activities, which proved the significance and value of HP guiding the whole project. In the process of our activities, we have received participation and guidance from people at all levels of government, school, college and society. We are able to ensure the safety of participants' personal health, private information, etc."
]
const textContent6 = [
  "数据统计,全球每年生产的塑料废物超过2亿吨,其中PE塑料污染占全球白色污染的69%。PE广泛应用于生活的方方面面。然而高产量和低回收率之间的不对等导致了污染物的堆积。因此,亟待找到一种方法处理PE塑料。"
]
const textContent7 = [
  "PEase是近年来新发现的唯一一种可以氧化聚乙烯的酶,具有很大的潜在价值。但是野生型PEase热稳定性低,难以实现高效降解。所以今年我们借鉴往年的经验，通过大量阅读前人的工作与论文,将目光放在定向进化实现PEase热稳定性提升上。我们相信PEase在未来带来的环境、经济和管理效益是不可估计的。"
]
const textContent8 = [
  "在项目整体实施期间,我们从公司、政府、居民等多方面了解目前聚乙烯的全生命周期。我们实地走访了塑料生产、回收、处理上的相关企业和个体,并调研了PE塑料在市场上的使用情况。此外,我们还联系并采访了生物和环境相关的专家及学者,讨论了塑料分解原理、突变体设计、经验沿袭、实验设计与环境保护等问题,并将他们的意见和建议融汇于我们的项目中。我们有幸能够与生态环境局的政府人员交流,详细了解了目前国家关于塑料污染治理的相关政策。这对我们以后思考如何实现PEase的应用有重要指导意义。"
]
const textContent9 = [
  "同时，我们与区域组织、多所高校保持着合作与交流，通过圆桌座谈、参观访学、线上交流等方式学习更多信息。为了将合成生物学的知识推广到更大的人群，我们采用通俗易懂的方式分享知识。我们在线下开展了大规模推介体验活动，制作了小游戏，介绍视频和儿童绘本，并且发放纸质版和电子版问卷进行活动质量调查。此外，我们利用抖音短视频、微信公众平台、朋友圈等居民喜闻乐见的方式进行宣传，记录我们项目的进展，让人们更加直观地了解合成生物学的前沿进展。有趣的是，天津大学辩论队对我们的项目感兴趣，并与我们合作展开了一场关于合成生物学的辩论。"
]
const textContent10 = [
  "最后，我们对开展的各项活动总结汇总，证明了HP对于整个项目的指导意义和价值。在我们的活动开展过程中，我们受到了来自政府、学校、学院、社会等各级人员的参与与指导。我们能够确保参与者的人身健康、隐私信息等的安全。"
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
.person-name{
  color:blue;
  cursor:pointer;
}
.other-background{
  width:100vw;
  height:80vh;
  position:absolute;
  left:0;
  top:0;
}
.picture1{
  width:80vw;
  position:abs
}
</style>