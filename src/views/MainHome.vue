<template>
    <div class="main">
        <SideBar
        heading="HomePage"
        :child_heading="masks"
        />
        <div class="main-home">
            <img src="https://static.igem.wiki/teams/4627/wiki/home-title.png" class="home-title-img"/>
            <div class="img-and-text slight">
                <div class="png-text">
                    <p class="png-text-title" id="Previous Projects">Previous Projects</p>
                    <p>TJUSLS_China has been dedicated to researching improvement and optimization of PETase for many years. For the past two years, we improved thermostability of PETase for the aim of improving its activity in 2021. What's more, project of TJUSLS_China in 2020 was to modify PETase through a series of rational protein engineering strategies, which enhanced its thermostability and thus improving its degradation efficiency. </p>
                    <p>In addition, there are also some other teams using PETase as their research objects, such as optimizing the enzyme or improving its application range. For example, in 2022, Edinburgh-UHAS_Ghana team in environmental circuit involved the degradation of water pollution through PETase in Sakai algae.</p>
                </div>
            </div>
            <div class="img-and-text deeper">
                <div class="png-text">
                    <p class="png-text-title" id="Relevant Literature">Relevant Literature</p>
                    <p>[1]	A. Sanluis Verdes, P. Colomer Vidal, F. Rodriguez Ventura1, etc. Wax worm saliva and the enzymes therein are the key to polyethylene degradation by Galleria mellonella, 2022, 13:5568</p>
                    <p>[2]	Sunil Ghatge1, Youri Yang1, Jae Hyung Ahn and Hor Gil Hur1 Biodegradation of polyethylene: a brief review ,2020, 63:27</p>
                    <p>[3]Yan Zhang, Jacob Nedergaard Pedersen, Bekir Engin Eser, Zheng Guo  Biodegradation of polyethylene and polystyrene: From microbial deterioration to enzyme discovery, Biotechnology Advances 60 (2022) 107991</p>
                    <p>[4]Baotong Zhu, Dong Wang, and Na Wei Enzyme discovery and engineering for sustainable plastic recycling Trends in Biotechnology, January 2022, Vol. 40, No. 1</p>
                    <p>[5]Sara Gharavi, Ezat Asgarani, Mahboobeh Zarrabi, etc. Rapid Assay of Plastic Biodegradation Using Simply Fabricated Polyethylene Nanoparticles January 18th, 2022, DOI: https://doi.org/10.21203/rs.3.rs-1228619/v1</p>
                </div>
            </div>
            <div class="img-and-text slight" :style="{flexDirection:'column'}">
                    <div class="png-text-title" id="Other Background">Other Background</div>
                    <div class="png-text-spe">
                        <p>According to the survey, global plastic production has increased 20-fold from 2.2 million tons in 1950 to 42.7 million tons in 2022. By 2050, global primary plastic production will reach 34 billion tons. However, only 9% of plastic produced is recycled. Random discarding leaves a large number of plastic into the environment, causing serious harm to animals and even humans ourselves. A U.S.-based study published in the journal Environmental Science & Technology in 2019 showed that people inhale or eat an average of more than 70,000 microplastic particles per year. Recent years,  microplastic was found in human blood and even feces. Although their harm to the human body is not yet known, it cannot be ignored. Therefore, it is urgent to find effective ways to degrade plastics.</p>
                        <img src="https://static.igem.wiki/teams/4627/wiki/1.png" class="text-png-small"/>
                    </div>
                    <div class="png-text-spe">
                        <p>At present, there are two kinds of plastic degradation methods: physical method and chemical method. Physical method is to break down plastic into smaller molecules by physical means, including high temperature, high pressure, radiation, etc. The advantage of physical degradation method is fast speed and high efficiency, but it will cause high energy consumption. Chemical methods use chemical agents, such as acids and bases, to break down plastics into smaller molecules. The disadvantage of chemical degradation is that it will produce harmful substances and pollute the environment. The enzyme discovered recently solves the problems above by using biological method to degrade PE, and is a promising plastic degradation method.</p>
                        <img src="https://static.igem.wiki/teams/4627/wiki/2.png" class="text-png-small"/>
                        <img src="https://static.igem.wiki/teams/4627/wiki/3.png" class="text-png-small"/>
                    </div>
                    <div class="png-text-spe">
                        <p>Researches on PETase have been more and more mature gradually, while degrading enzyme for other kinds of plastics is still to be developed. We learned that polyethylene(PE) is a very widely used plastic, which usually used in food plastic bags, agricultural greenhouses and so on. However, high production and low recovery rate make PE a worldwide environmental pollution problem. Conventional degradation methods such as physical or chemical methods are not able to completely degrade PE. Their products are likely to be new pollutants that are difficult to degrade or toxic. In this case, biodegradation makes a more advantageous method. In 2016, scientists found that a class of PE degrading enzymes, PEase, in the larvae of wax borer, has the ability to oxidize PE at room temperature, successfully solving the recognized bottleneck step in PE degradation(i.e., oxidation). However, catalytic efficiency of PEase at room temperature is far from industrial demand. Therefore, we hope to optimize it by synthetic biology methords, thus improving catalytic efficiency of PEase. What's more, we learned that when the glass transition temperature (Tg) is about 78℃, internal molecular arrangement of PE will change, thus causing it easier to be degraded. Therefore, with change of structure, biodegradation is a better choice. However, thermostability of PEase currently is not ideal. So we hope to improve thermostability of PEase,  making it more efficient in degrading PE by the advantage of its denaturation.</p>
                        <img src="https://static.igem.wiki/teams/4627/wiki/4.png" class="text-png-small"/>
                        <img src="https://static.igem.wiki/teams/4627/wiki/5.png" class="text-png-small"/>
                    </div>
                    <div class="png-text-spe">
                        <p>After discussion, we take PEase as research object. We use a series of rational design methods to target mutant PEase, finally improving its thermal stability.</p>
                    </div>
            </div>
            <div class="img-and-text deeper">
                <img src="https://static.igem.wiki/teams/4627/wiki/6.png" class="text-png"/>
                <div class="png-text">
                    <p class="png-text-title" id="Importance">Importance</p>
                    <p>Glass transition temperature(Tg) of PE is generally 78℃. Molecular arrangement of PE changes as the tempurate approaches Tg. Just like the thaw of frozen ice, PEis more likely to be degraded this moment. However, PEase can only react at room tempurate currently. Under this condition, degradation effect of PE is poor due to its tight molecular arrangement. Therefore, this year, TJUSLS-China aims to mutate PEase directedly through a serious of rational methords, thus obtaining mutants with high thermostability. Under the effect of high tempurate and function of PEase, degradation efficiency of PE is expected to be greatly improved. We use methods of synthetic biology to improve PEase's thermostability, which provides a new idea for treatments of PE.</p>
                </div>
            </div>
            <div class="img-and-text slight">
                <img src="https://static.igem.wiki/teams/4627/wiki/7.png" class="text-png"/>
                <div class="png-text">
                    <p class="png-text-title" id="Project">Project</p>
                    <p>We are committed to using methods of synthetic biology to directionally mutate PEase. Thermostability of PEase is expected to be improved while ensuring enzyme activity with two different schemes. Firstly, we use various software, such as FoldX, Alphafold, to screen, iterate and validate mutation points, thus obtaining potential mutants. Luckily, we have screened out 48 mutants currently. With the progress of modeling, we hope to select 60 mutants having the smallest ΔΔG for wet experiments. After construction, expression and purification, we will test their thermostability and enzyme activity. Our aim is to obtain PEase that can play a catalytic role at Tg, thus preliminarily achieving industrial application of PEase.</p>    
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import SideBar from "@/components/SideBar.vue"
const masks = {
            4:'Previous Projects',
            3:'Relevant Literature',
            2:'Other Background',
            1:'Importance',
            0:'Project',
            }
</script>

<style scoped>
.main{
    display: flex;
    flex-direction: row;
}
.main-home{
    margin-left:14.8vw;
}
.home-title-img{
    margin-top:10vh;
    width:84vw;
    height: 50vh;
}
.img-and-text{
    padding:3vw;
    width:68vw;
    padding-left:8vw;
    padding-right:8vw;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
}
.png-text>p{
    margin:10px;
}
.text-png{
    height: 40vh;;
    border-radius: 2vh;
}
.text-png-small{
    height: 20vh;;
    border-radius: 2vh;
    margin-top: 3vh;
}
.png-text{
    width:40vw;
}
.png-text-spe{
    width:auto;
    display: flex;
    flex-direction: row;
    width:70vw;
    flex-wrap: nowrap;
    align-items: center;
    margin: 3vh;
}
.png-text-spe>p{
    width:50vw;
}
.png-text-title{
    max-width:none;
    font-size:20px;
    font-weight: bold;
}
.slight{
    background:#ffc0cb40;
    flex-direction: row-reverse;
}
.deeper{
    background:#ffc0cb80;
}
</style>