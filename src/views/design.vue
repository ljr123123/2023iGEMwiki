<template>
  <div class="main">
    <img src="https://static.igem.wiki/teams/4627/wiki/other-background.png" class="other-background"/>
    <SideBar heading="experiments" :child_heading="['experiments']"></SideBar>
    <div class="main-content">
      <TextWithImage
      mainTitle="Overview"
      :textContent="[
        'Our project aims to improve the thermostability of PEase. For this purpose, we visited companies and interviewed relevant professionals. Their advice is of great help to us. What’s more, we learned some methods from literature materials. Our design mainly from the following aspects: disulfide bonds, flexible site, salt bridges and hydrophobic core.',
        'However, theoretical design alone is less convincing. We used software such as AlphaFold2 and PyMOL to predict and analyze the 3D structure of PEase after mutation, and then FoldX was used to predict its stability. Mutants with low ΔΔG were selected for multiple rounds of iteration. Finally, the theoretical results are verified by experiments.',
        'In addition, we took a long time to find the right plasmic for Demetra. So we only The carried out rational design of Ceres.'
      ]"
      :imageUrls="[
        'https://static.igem.wiki/teams/4627/wiki/overview.png'
      ]"></TextWithImage>
      <TextWithImage
      mainTitle="Issues"
      :textContent="[
        'At the beginning of our project, we experimentally measured the Tm value of Ceres to be only about 46℃. If we can improve the thermostability of Ceres so that it can play a catalytic role at higher temperatures, this will be of great significance for improving its catalytic efficiency.'
      ]"></TextWithImage>
      <TextWithImage
      mainTitle="Solution"
      subTitle="Disulfide Bonds:"
      :textContent="[
        'From literature materials, we have learned that in most proteins, disulfide bonds have a significant impact on protein stability. Therefore, we first considered using the method of increasing disulfide bonds in proteins to improve the thermostability of Ceres.',
        'According to the literature, one of the criteria for disulfide bond screening is: the distance between C_β- C_βatoms of two amino acids that is not more than 5Å apart (for glycine: from C_α). Therefore, PyMOL was used to search for suitable mutation sites.',
        'In addition, we also used software Discovery Studio to assist our design. It assesses the reliability of mutations from the following perspectives: energy, bad contacts, thermal mobility, sequence separation, residue depth, volume change, environment, and so on.',
        'To verify the reliability of the design, we used AlphaFold2 to predict structure after mutation to facilitate subsequent screening.',
        'Here we present an example. (Figure 2)'
      ]"
      :imageUrls="[
        'https://static.igem.wiki/teams/4627/wiki/disulfide-bond.png'
      ]"></TextWithImage>
      <TextWithImage
      subTitle="Flexible Site:"
      :textContent="[
        'The stability of enzyme molecules mainly depends on the rigidity of the conformation, and the flexible site will be the first to start unfolding when large thermal changes occur. Therefore, a strategy for rigidifying the flexible site is proposed.',
        'The first step of the strategy is to identify the flexible site. We use molecular dynamics simulations to characterize the flexibility of each site with B-factors (RMSF, figure 3).'
      ]"
      :image-urls="[
        'https://static.igem.wiki/teams/4627/wiki/flexible.png'
      ]"></TextWithImage>
      <TextWithImage
      :text-content="[
        'After this, we rigidified the flexible sites in two ways: β-turn and single point saturation mutation. In the flexible site, we designed the β-turn according to the statistical law(mainly added proline), and use the saturation mutation method as a supplement(Use PositionScan in foldX).'
      ]"></TextWithImage>
      <TextWithImage
      sub-title="Salt Bridges:"
      :text-content="[
        'Salt bridge formation is inferred for a pair of oppositely charged residues (Asp or Glu with Arg, Lys or His) if they meet the following criteria:(1)The centroids of the side-chain charged groups in oppositely charged residues lie within 4.0 Å of each other; and(2) at least one pair of Asp or Glu side-chain carboxyl oxygen atoms and side-chain nitrogen atoms of Arg, Lys or His are within a 4.0 Å distance.( Sandeep Kumar, Ruth Nussinov, Salt bridge stability in monomeric proteins)',
        'Similar to our design of disulfide bonds, we searched for suitable mutation sites using PyMOL software according to this principle.',
        'Here we present an example. (Figure 4)'
      ]"
      :image-urls="[
        'https://static.igem.wiki/teams/4627/wiki/disulfide-bond.png'
      ]"></TextWithImage>
      <TextWithImage
      sub-title="Hydrophobic core:"
      :text-content="[
        'Well-packed hydrophobic cores are a hallmark of protein structure. ',
        'To this end, we used RosettaDesign, part of the Rosetta software suite, which is freely available to academic users, to design our enzyme. It can identify and improve poorly packed protein cores by selecting a series of stabilizing point mutations.',
        'After the above different designs, mutants with low ΔΔG were selected for multiple rounds of iteration.'
      ]"></TextWithImage>
      <TextWithImage
      mainTitle="Stability Prediction"
      :text-content="[
        'We designed many mutants, but we could not bring all of them into the wet lab, so we chose to use software to calculate the ΔG of the protein for preliminary screening. (Figure 5)',
        'We use the FoldX plugin in YASARA to calculate the energy. After minimizing the energy of the structure with RepairPDB, use Stability to obtain ΔG(MT)；ΔΔG= ΔG(MT) - ΔG(WT). ΔΔG > 0 means the mutation is unstable, ΔΔG < 0 means the mutation is stable.'
      ]"
      :image-urls="[
        'https://static.igem.wiki/teams/4627/wiki/model-2.png'
      ]"></TextWithImage>
      <TextWithImage
      :text-content="[
        'We finally selected 64 mutants for subsequent experimental validation. (Table 1)'
      ]"></TextWithImage>
      <TextWithImage
      :image-urls="[
        'https://static.igem.wiki/teams/4627/wiki/table.png'
      ]"></TextWithImage>
      <TextWithImage
      main-title="Experimental Verification"
      :text-content="[
        'Although we made a lot of calculations in dry lab, the accuracy of theoretical calculation is limited, so we carried out experimental verification. (Figure 6)',
        'First, we designed primers through the website provided by GENEWIZ, and constructed our mutant genes with seamless cloning. After verifying the correctness of the plasmid, the protein was expressed by E. coli BL21.'
      ]"
      :image-urls="[
        'https://static.igem.wiki/teams/4627/wiki/molecular-cloning.png'
      ]"></TextWithImage>
      <TextWithImage
      :text-content="[
        'We obtained pure protein by affinity chromatography. The Tm of protein was detected by DSC. Fluorescent dye will bind to the hydrophobic core exposed by the structural change of protein after heating, resulting in a change in fluorescence intensity. By derivation and other calculations, we can obtain the temperature when the fluorescence changes. This is just the Tm value that identifies thermostability of the protein.',
        'Comparing the Tm of wild-type Ceres and the mutant, it can be found that we obtained a total of 5 proteins with Tm changes above 4℃ (higher than 12% compared with wild-type Ceres) in the whole experiment of more than half a year. (Table 2)'
      ]"></TextWithImage>
      
      <p align="center">Table 2. Mutants gained from stability prediction</p>
      <text-with-image
      :image-urls="[
        'https://static.igem.wiki/teams/4627/wiki/table-2.png'
      ]"></text-with-image>
      <text-with-image
      main-title="Reference"
      :textContent="text"></text-with-image>
    </div>
  </div>
</template>

<script setup>
import TextWithImage from "@/components/text-with-image.vue"
import SideBar from "@/components/side-bar.vue"
const text = [
  "[1] \" Automated selection of stabilizing mutations in designed and natural proteins \" , Proc. Natl. Acad. Sci. USA, v.109(5) pp.1494-99."
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