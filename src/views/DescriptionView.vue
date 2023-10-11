<template>
    <div class="main">
        <img src="@/assets/other-background.png" class="other-background"/>
      <SideBar heading="experiments" :child_heading="{0:'experiments'}"></SideBar>
      <div class="main-content">
        <TextWithImage 
        mainTitle="OverView"
        :textContent="textContent1"></TextWithImage>
        <TextWithImage
        mainTitle="BACKGROUND"
        :textContent="textContent2"></TextWithImage>
        <TextWithImage
        :textContent="textContent3"></TextWithImage>
        <TextWithImage
        :textContent="textContent4"></TextWithImage>
        <TextWithImage
        :textContent="textContent5"></TextWithImage>
        <TextWithImage
        mainTitle="INSPIRATION"
        :textContent="textContent6"></TextWithImage>
      </div>
    </div>
  </template>
  
  <script setup>
  import TextWithImage from "@/components/text-with-image.vue"
  import SideBar from "@/components/side-bar.vue"
  
  const textContent1 = [
    "Polyethylene is one of the most widely produced and sturdy polyolefin-derived plastics. However, due to the difficulty in overcoming the bottleneck step in PE biodegradation, namely the initial oxidation step, there are almost no biological mechanisms in nature that can effectively degrade PE. Therefore, PE can exist in the environment for a long time, causing huge environmental pollution. PEase is the only enzyme found to degrade PE, which has the ability to oxidize PE at room temperature and effectively solves the problem of oxidation.",
    "Sadly, low thermostability of PEase limits its catalytic efficiency. What's more, there has been no research on improving it. Therefore, we managed to improve protein thermostability by designing disulfide bonds, flexible sites, salt bridges, and hydrophobic cores of PEase. We first added, deleted, and replaced the amino acid sequence of wild-type PEase through bioinformatics software PyMOL, rationally designed several mutants and predicted the molecular structure of the designed mutants through AlphaFold2. Then we rationally screened out several mutants with satisfactory prediction results. Finally, we utilized E. coli for molecular cloning and expression of mutants. We use differential scanning fluorescence(DSF) to measure their Tm. ",
    "We have successfully screened out 64 mutant proteins, of which 38 have been successfully tested. The highest Tm haved reached 51.7℃, which increased by 12.4% compared to the wild type, and the enzyme activity also increased accordingly."
  ]
  const textContent2 = [
    "Polyethylene (PE) consists simply of linear carbon chains held together by hydrogen bonds. In 2022, world's PE production exceeded 140 million tons, a year-on-year increase of 6.1%[1]. In addition, PE represents up to 69% of the synthetic plastics that are discarded within a short period after use and has an extremely low recovery rate[2]. Such large amount of PE waste has caused serious white pollution, which is urgent to find a good method to achieve the degradation of PE."
  ]
  const textContent3 = [
    "Although many enzymes in nature have been discovered to catalyze the cleavage of C-O bonds , cleavage of C-C bonds is still very difficult due to the lack of hydrolysable groups. The fracture of the C-C bond undergoes two processes, oxidation and deterioration, in which oxidation is the bottleneck step. Nowadays, oxidation is mostly achieved through methods such as heating or chemical catalysis in industry[3]."
  ]
  const textContent4 = [
    "A literature posted in 2016 reported that wax worm saliva can overcome the initial oxidation step in PE biodegradation, which is the bottleneck throughout the process[4].Within the saliva, two enzymes(Ceres and Demetra) that can oxidize PE after a few hours’ application at room temperature (RT) arose scientists' attention. They named them PEases. PEase belongs to the phenol oxidase family and is the first animal enzymes that can achieve biodegradation of C-C bonds, opening the way opotential solutions for plastic waste management through bio-recycling/up-cycling."
  ]
  const textContent5 = [
    "The degradation of PE can be divided into four stages( abiotic treatment/biodeterioration, biofragmentation/depolymerization, assimilation and mineralization)[5]. Firstly, PE polymers form superoxide radicals through UV or high temperature. Then, it will be attacked by extracellular enzymes and a large number of oxygen-containing groups, such as carboxyl, carbonyl, and aldehyde, will be formed in alkane chain, where split into 10-22 carbon carbon chains[6]. The released metabolites are eventually absorbed and utilized by microorganisms. At present, many microorganisms have been found to be able to realize the biodegradation of PE. However, in case of enzymes, only PEase has been proved to be able to depolymerize PE into short chains instead of UV or high temperature.",
    "However, PEase can only achieve catalytic effect at RT, and its effiency is extremely insignificant. In addition, we have learned that with temperatures raise, internal arrangement of PE molecules will become more dispersed, making it easier for enzymes and O2 to enter[7]. Therefore, we hope to increase catalytic efficiency by improving its thermostability. In our project, we first design rational mutations in disulfide bonds, salt bridges, hydrophobic cores[8], and flexible sites, thus making it able to work at higher temperatures. The optimization can also lay the foundation for the co-degradation of various plastics in the future, avoiding the tedious work of plastic classification."
  ]
  const textContent6 = [
    "At the beginning of this year, we organized a volunteer activity to help clean up garbage thrown everywhere in the community. We found the most we collected were plastic bags, most of which were thrown away after use, or used as garbage bags and abandoned after a second use. We wondered about this and learned that most plastic bags were made by polythene. After some learning, we knew that PE is widely used in daily life, and the plastic wrap, shopping bags, water pipes, cables and so on that we usually come into contact with are all PE materials. However, the recycling, degradation and reuse of PE is still a big problem. ",
    "Our lab is currently doing PETase (PET degrading enzyme) optimization related projects, and we have also conducted related research and experiments. At present, the optimization of PETase has become mature and gradually transformed into industrialization, while little research has been done on the biodegradation of other plastics (PP, PE, etc.), especially the enzymatic degradation method. So can we use biodegradation to deal with PE pollution that can be seen everywhere? That's how we started our research."
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
    left:14.8vw;
  }
  </style>