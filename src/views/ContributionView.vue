<template>
    <div class="main">
        <img src="@/assets/other-background.png" class="other-background"/>
      <SideBar heading="Overview" :child_heading="['Overview']"></SideBar>
      <div class="main-content">
        <TextWithImage
        mainTitle="OVERVIEW"
        :textContent="textContent1">
        </TextWithImage>
        <TextWithImage
        mainTitle="PARTS"
        :textContent="textContent2">
        </TextWithImage>
        <TextWithImage
        mainTitle="DRY LAB"
        :textContent="textContent3">
        </TextWithImage>
        <TextWithImage
        subTitle="1. Hydrophobic interaction[1]:"
        :textContent="textContent4">
        </TextWithImage>
        <TextWithImage
        subTitle="2. Hydrogen bond:"
        :textContent="textContent5">
        </TextWithImage>
        <TextWithImage
        subTitle="3. Lonic bond (salt bridge)[2] :"
        :textContent="textContent6">
        </TextWithImage>
        <TextWithImage
        subTitle="4. π-π interaction:"
        :textContent="textContent7">
        </TextWithImage>
        <TextWithImage
        subTitle="5. Disulfide bond:"
        :textContent="textContent8">
        </TextWithImage>
      </div>
    </div>
  </template>
  
  <script setup>
  import TextWithImage from "@/components/text-with-image.vue"
  import SideBar from "@/components/side-bar.vue"
  const textContent1 = [
    "As a continuous and inherited competition, each team will actively provide modeling skills, experimental specifications, parts, etc. that may be useful in the future. We hope to share the experience and achievements we have gained during the past year with all of the teams, so as to provide convenience for iGEMers in the future and make the iGEM community more colorful.Our contribution section will be divided into Parts, Dry lab, Wet lab and HP four parts as following."
  ]
  const textContent2 = [
    "PEase is the only enzyme found that can degrade PE. We noted that the PE enzyme has not been studied in previous projects. Our basic parts is PEase's first appearance on the iGEM stage. For the first time, we have rationally designed PEase to improve its thermostability. We used molecular cloning to construct mutant plasmid and obtained 64 composite parts. Among them, the thermostability of many mutants was improved. There are 5 proteins with Tm changes above 4℃(higher than 12% compared with wild-type Ceres).",
    "We hope that this work will trigger more thinking and design of iGEMRers for PE biodegradation in the future and facilitate their experiments."
  ]
  const textContent3 = [
    "In the process of project design, we read a lot of literature. Combined with the existing foundation of the laboratory, we summarized several methods to improve enzyme thermostability, which could be helpful if other team or researchers want to optimize enzyme thermostability. "
  ]
  const textContent4 = [
    "Hydrophobic interaction mainly affects the conformational entropy of protein. And it is the most important factor in the formation and stability of protein tertiary structure."
  ]
  const textContent5 = [
    "Hydrogen bond is a kind of non-covalent bond, which formed when the distance between the hydrogen donor and the hydrogen acceptor does not exceed 3Å and the Angle between the hydrogen donor and the hydrogen acceptor is less than 90°."
  ]
  const textContent6 = [
    "A salt bridge is inferred to form if a pair of opposite-charged residues (Asp or Glu versus Arg, Lys, or His) meet the following criteria: ",
    "(i) the centroids of the side chain charged groups in the opposite-charged residues are 4.0Å apart from each other;",
    "(ii) At least one pair of Asp or Glu side chain antelope oxygen atoms and Arg, Lys or His side chain nitrogen atoms within a 4.0Å distance."
  ]
  const textContent7 = [
    "The interaction between aromatic rings refers to the interaction between two aromatic amino acids (Trp, Tyr, and Phe) benzene ring 234 when the distance between the center of aromatic rings does not exceed 7Å. Usually these aromatic amino acids are embedded or partially embedded in the hydrophobic core of the protein, which has an important effect on the thermostability of the protein."
  ]
  const textContent8 = [
    "The protein structure can be stabilized by reducing the entropy of protein unfolding state. It canbe formed when the distance between C_β- C_β  atoms of two amino acids that is not more than 5Å apart (for glycine: from C_α).",
    "In addition to the design directly from the above principles, there are the following methods: "
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
  </style>