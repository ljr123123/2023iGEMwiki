<template>
  <div class="main">
    <img
      src="https://static.igem.wiki/teams/4627/wiki/other-background.png"
      class="other-background"
    />
    <SideBar heading="experiments" :child_heading="['experiments']"></SideBar>
    <div class="main-content">
      <TextWithImage
        mainTitle="General Introduction"
        :textContent="[
          'PEase is a newly discovered enzyme that can efficiently decompose polyethylene, with the ability to oxidize the C-C chains of PE at room temperature and break them into small molecules. However, the wild-type PEase has low thermal stability, and the activity of enzyme is difficult to reach the ideal state. Moreover, PE itself has the property of looser structure and easier to oxidative degradation at high temperatures. Therefore, we designed to improve the PEase thermal stability at higher temperatures and thus improve the degradation efficiency of the enzyme. In the future, we hope to obtain PEase mutants with both high thermal stability and high enzyme activity, so that PE biodegradation can be taken out of the laboratory, more widely used in life and production, and create conditions for the co-degradation of a variety of plastics.',
        ]"
      ></TextWithImage>
      <TextWithImage
        mainTitle="Demand and market"
        :textContent="[
          'Around the world, efficient degradation of plastics is critical. At present, physical methods are usually used for degrading plastics in industry. However, high temperature heating will greatly consume energy and waste resources (see description for more information). The emergence of demand leads us to think, and the biological method provides us with a good idea.',
          'We are excited that PETase, the enzyme which biogrades PET plastics, has been successfully industrialized in recent years. The French company Carbios successfully optimized LCC PETase, which produced a large amount of economic benefits. In addition, its technology also meets the government and national requirements for environmental protection and recycling.',
          'Learning from the implementation experience of Carbios, our PEase also has the need to implement it in the market. With the development of the times, more and more people begin to agree with the concept of environmental friendliness. It is crucial for our PEase marketization. If we are more able to achieve more efficient pre-PEase (exists in plastic products such as plastic bags in advance, and with the increase of time, plastic products begin to automatically degrade) in the future, then we will have a larger target customer base and a broader market.',
          'In conclusion, the market demand for PEase comes from',
          'Policy support from the government',
          'Industrial optimization needs',
          'People\'s yearning for environmental protection',
          'However, our results do not meet market standards. This vision would be more achievable if we could obtain better mutants and lower their market price.',
        ]"
      ></TextWithImage>
      <TextWithImage
        mainTitle="Usage of our project"
        :textContent="[
          'PEase is a phenoloxidase capable of degrading PE plastics. Therefore, PEase is first able to be applied to plastic waste recycling and treatment plants to degrade PE products by biological methods.',
          'In addition, because most plastic products are made from a variety of plastic, such as the bottle cap of the plastic bottle is often PP or PE material, and the bottle is PET material. The simultaneous degradation of multiple plastics is one direction of future development. We hope that this will reduce the workload of garbage sorting.',
          'Further, PE plastics are heavily polluted due to their refractory degradation and low recycling rate. If it can be achieved to encapsulate enzymes in PE, releasing and degrading PE after a certain time, it will not only attract more individual customers, but also protect the environment to a greater extent.',
          'After the degradation of PE with PEase, carbon chains with a length of 10-22 C are generated. Carbon chains of different lengths can produce different oils after fractionation, which is similar to oil fractionation.',
          'For researchers working on related topics or future iGEMers, we are pleased to be able to provide our own experimental parts and experiments (see parts and experiments pages for details). We look forward to satisfactory research results and to promote the development of the industry with science.',
          'More uses of the PEase remain to be explored. ',
        ]"
      ></TextWithImage>
      <TextWithImage
        mainTitle="Realization in real world"
        :textContent="[
          'Experimental optimization: Large-scale production, immobilized enzyme',
          'Public guidance',
          'Cooperate with the government and enterprises to improve the industrial chain',
          'iGEM terrace',
          'First of all, large-scale production is an important part of the realization of industrialization. We need to design large-scale bioreactors and explore suitable parameters to ensure optimal conditions for bacterial growth and protein production. Repeated and continuous reactions can be achieved by means of the immobilized enzyme.',
          'In order to guide residents to actively recycle plastic, we publicize the harm of plastic pollution through wechat public account, TikTok and other platforms, and organize team members to carry out online or offline educational activities.',
          'In addition, we plan to cooperate with waste recycling stations to separate polyethylene plastics from other waste, cooperate with plastic treatment plants to change the original physical and chemical methods for efficient enzymatic degradation, and cooperate with the government to normalize and benefit all commercial activities.',
          'Finally, we have uploaded and introduced our projects and products in Wiki. In the future, we may offer our superior PEase to users who want to experience it and sell their patents.',
        ]"
      ></TextWithImage>
      <TextWithImage
        mainTitle="Future"
        :textContent="[
          'In the near future, we will continue to use and expand the methods pioneered in this year\'s project to get mutants with significantly higher thermal stability and enzyme activity and then  achieve industrial mass production. Under the premise of ensuring biological safety, using the PEase designed by our team can greatly reduce its application cost and greatly improve its use efficiency, which will be more widely used worldwide.',
        ]"
      ></TextWithImage>
      <TextWithImage
        mainTitle="Safety"
        :imageUrls="['https://static.igem.wiki/teams/4627/wiki/im-1.png']"
      ></TextWithImage>
      <TextWithImage
        :textContent="[
          'In order to ensure the safety of the project, we interviewed Zhang Jianchao, professor of geological environment of Tianjin University.',
          'Before applying bacteria or enzymes to the market, their safety must be guaranteed. Safety here includes both safety to humans (not causing human disease) and safety to the environment (not causing environmental pollution or damage to the natural biological chain). Therefore, the preliminary laboratory verification work is essential.(The wiki looks like this.)',
          'In the course of our project, we strictly followed the biosafety regulations and used safe E. coli for protein expression. In the future, if our proposal is implemented, we will conduct detailed biological safety experiments to ensure its safety.',
          'In addition, Tianjin University is one of the first batch of demonstration sites for domestic waste classification in public institutions in China. Our team has always taken the lead in reducing the use of plastic products, and the reasonable recycling and placing of the appliances used without causing substantial harm to the environment, people and all other organisms. At the same time, China also promulgated a new biosafety law [1] in 2021, which established a biosafety risk prevention and control system, including risk monitoring and early warning, risk investigation and assessment and information sharing. It also provides for prevention and response to specific biosafety risks, including major emerging infectious diseases, epidemics and outbreaks, as well as research, development and application of biotechnology. In order to keep our activities legal, an application for permits and approval is necessary if we execute our proposed implementation.',
        ]"
      ></TextWithImage>
      <TextWithImage
        mainTitle="Reference"
        :textContent="[
          '[1] The Science and Technology Commission of the People\'s Republic of China. Biosafety Law of the People\'s Republic of China [Z]. 2020-10-17',
        ]"
      ></TextWithImage>
    </div>
  </div>
</template>

<script setup>
import TextWithImage from "@/components/text-with-image.vue";
import SideBar from "@/components/side-bar.vue";
</script>

<style scoped>
.main {
  width: 100%;
  position: relative;
}
.main-content {
  position: absolute;
  width: 85.2vw;
  top: 80vh;
  left: 14.8vw;
  padding: 5vh;
}
.other-background {
  width: 100%;
  height: 80vh;
  position: absolute;
  left: 0;
  top: 0;
}
</style>