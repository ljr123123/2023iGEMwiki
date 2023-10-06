<template>
    <div class="attributions">
        <div class="title">
            ATTRIBUTIONS
        </div>
        <hr>
        <div class="SmallTitle">Introduction</div>
        <div class="introduction">
            Our team was established at Jan 10th, consisting of 18 Tianjin University students from different majors, leaded by two PIs and two instructors. With our joint efforts, although we encountered many difficulties during the project, all of the problems were able to solve in a timely manner and the team can get back on track.
            Besides, we have some sponsors and supporters. Thanks to all the schools, enterprises, and relevant professionals who have provided us with assistance.
            Here is our attribution form.
        </div>

        <div>
            
        </div>
        
    </div>
</template>

<style>
    div{
        float: left;
        padding: 1px;
    }

    .introduction{
        float: left;
        width: 60vw;
        margin: 0 20vw 0 20vw;
        font-size: 3vh;
        background-color: grey;
        border-radius: 20px;
        padding: 5vh;
    }


    .title{
        margin-top: 10vh;
        height: 20vh;
        width: 100%;
        padding: 5vh;
        font-size: 15vh;
        text-align: center;
        color: #0b4490;
    }

    hr{
        width: 100%;
        float: left;
    }

    .SmallTitle{
        width: 22vw;
        margin: 10vh 40vw 0vh 20vw;
        font-size: 8vh;
        border-radius: 20px;
    } 

</style>

<script>
     export default {
         data(){
            return{
                productions:[
                    {Name:"Zefang Wang",
                    Role:"PI",
                    GeneralTasks:"Analysis, Conceptualization, Project Administration, Writing, Safety",
                    SpecificTasks:"(1) Analysis - helped us analyse data from different sources; (2) Conceptualization - helped us come up with the initial idea for the project; (3) Project Administration - managed activities, planning, and execution of the whole project; (4) Writing - reviewed our content for Wiki and other documents; (5) Safety - ensured our safety throughout the project."},
                    {Name:"Yunjie Xiao",
                    Role:"PI",
                    GeneralTasks:"Analysis, Project Administration, Fundraising, Writing, Safety",
                    SpecificTasks:"(1) Analysis - helped us analyse data from different sources; (2) Project Administration - managed activities, planning, and execution of the whole project; (3) Fundraising - pull sponsorship to raise funds for the team( Monad Biotech) ; (4) Writing - reviewed our content for Wiki and other documents; (5) Safety - ensured our safety throughout the project."},
                    {Name:"Jin Jiahui",
                    Role:"Instructors",
                    GeneralTasks:"Analysis, Conceptualization, Background Research, Investigation, Data Curation",
                    SpecificTasks:"(1) Analysis - helped us analyse data from different sources; (2) Conceptualization - helped us come up with the plan and details for the implementation of the project; (3) Background Reaserch - helped us collect and organize the literature related to the project and guided us to understand the related concepts; (4) Investigation - helped us sort out the experimental data related to the expression of C protein; (5) Data Curation - organized and saved the data of our project and continue to complete the relevant research."},
                    {Name:"Xinzhao Sun",
                    Role:"Instructors",
                    GeneralTasks:"Analysis, Conceptualization, Investigation, Data Curation",
                    SpecificTasks:"(1) Analysis - helped us analyse data from different sources; (2) Conceptualization - helped us come up with the plan and details for the implementation of the project; (3) Investigation - helped us sort out the experimental data related to the expression of C protein; (4) Data Curation - organized and saved the data of our project and continue to complete the relevant research."},
                    {Name:"Shen Wang",
                    Role:"Instructors",
                    GeneralTasks:"Analysis, Fundraising",
                    SpecificTasks:"(1) Analysis - helped us analyse data from different sources; (2) Conceptualization - helped us come up with the plan and details for the implementation of the project; (3) Investigation - helped us sort out the experimental data related to the expression of C protein; (4) Data Curation - organized and saved the data of our project and continue to complete the relevant research."},
                    {Name:"Yingjie Shen",
                    Role:"Student Leaders",
                    GeneralTasks:"Analysis, Conceptualization, Background Research, Investigation, Data Curation, Notebook/record keeping, Project Administration, Fundraising, Public Engagement, Software, Visualization, Writing, Safety, Other",
                    SpecificTasks:"(1) Analysis - analysed data from different sources; (2) Conceptualization - came up with the plan and details for the implementation of the project; (3) Background Research - read relevant literature on PE and propose improvements to our project; (4) Investigation - participated in all experimental processes; (5) Data Curation - collected and processed data in the project; (6) Notebook/record keeping - arranged experimental tasks every day and collect notebooks from all of the members in experimental group; (7)  Project Administration - managed activities, planning, and execution of the whole project; (8)  Fundraising - pull sponsorship to raise funds for the team; (9) Public Engagement - participated in social activities organized by HP; (10) Software - used alphafold2 and other software to design mutants; (11) Visualization - designed posters, Wiki pages, team logos, team mascots, team uniforms, edited promotion videos, etc.; (12) Writing - participated in writing all parts of Wiki and checked the text that written by GPT-4; (13) Safety - ensured safety throughout the whole experiments; (14) Other - overall planning of the progress of each group in our team. "},
                    {Name:"Weiwei Ji",
                    Role:"Student Leaders",
                    GeneralTasks:"Analysis, Conceptualization, Background Research, Investigation, Data Curation, Notebook/record keeping, Project Administration, Fundraising, Public Engagement, Software, Visualization, Writing, Safety, Other",
                    SpecificTasks:"(1) Analysis - analysed data from different sources; (2) Conceptualization - came up with the plan and details for the implementation of the project; (3) Background Research - read relevant literature on PE and propose improvements to our project; (4) Investigation - participated in all experimental processes; (5) Data Curation - collected and processed data in the project; (6) Notebook/record keeping - arranged experimental tasks every day and collect notebooks from all of the members in experimental group; (7)  Project Administration - managed activities, planning, and execution of the whole project; (8)  Fundraising - pull sponsorship to raise funds for the team; (9) Public Engagement - participated in social activities organized by HP; (10) Software - used alphafold2 and other software to design mutants; (11) Visualization - designed posters, Wiki pages, team logos, team mascots, team uniforms, edited promotion videos, etc.; (12) Writing - participated in writing all parts of Wiki; (13) Safety - ensured safety throughout the whole experiments; (14) Other - assisted the captain to overall plan the progress of each group in our team. "},
                    {Name:"Jiahao Wang",
                    Role:"Student members",
                    GeneralTasks:"Analysis, Conceptualization, Background Research, Investigation, Data Curation, Notebook/record keeping, Public Engagement, Writing, Safety",
                    SpecificTasks:"(1) Analysis - analysed data from different sources in wet lab; (2) Conceptualization - came up with the plan and details for the implementation of the project; (3) Background Research - read relevant literature on PE and propose improvements to our project; (4) Investigation - conducted experiments related to protein purification; (5) Data Curation - collected and processed data related to protein purification, including desalination columns, protein gels, etc; (6) Notebook/record keeping - recorded daily experiments and summarize them into a notebook; (7) Public Engagement - participated in social activities organized by HP; (8) Writing - wrote experimental content in Wiki; (9) Safety - ensured safety throughout the whole experiments. "},
                    {Name:"Yanru Liu",
                    Role:"Student members",
                    GeneralTasks:"Analysis, Conceptualization, Background Research, Investigation, Data Curation, Notebook/record keeping, Public Engagement, Writing, Safety",
                    SpecificTasks:"(1) Analysis - analysed data from different sources in wet lab; (2) Conceptualization - came up with the plan and details for the implementation of the project; (3) Background Research - read relevant literature on PE and propose improvements to our project; (4) Investigation - conducted experiments related to cultivation of Escherichia coli and determination of Tm value of PEase; (5) Data Curation - collected and processed data related to Tm; (6) Notebook/record keeping - recorded daily experiments and summarize them into a notebook; (7) Public Engagement - participated in social activities organized by HP; (8) Writing - wrote experimental content in Wiki; (9) Safety - ensured safety throughout the whole experiments. "},
                    {Name:"Cao Gang",
                    Role:"Student members",
                    GeneralTasks:"Analysis, Conceptualization, Background Research, Investigation, Notebook/record keeping, Fundraising, Public Engagement, Writing, Safety",
                    SpecificTasks:"(1) Analysis - analysed data from different sources in wet lab; (2) Conceptualization - came up with the plan and details for the implementation of the project; (3) Background Research - read relevant literature on the nature of PE itself; (4) Investigation - conducted experiments related to construction of Mutants; (5) Notebook/record keeping - recorded daily experiments and organize all experimental steps; (6) Fundraising - pulled sponsorship to raise funds for the team; (7) Public Engagement - participated in social activities organized by HP; (8) Writing - wrote content about all experimental steps in Wiki; (9) Safety - ensured safety throughout the whole experiments. "},
                    {Name:"Yao Lingfeng",
                    Role:"Student members",
                    GeneralTasks:"Analysis, Conceptualization, Background Research, Investigation, Notebook/record keeping, Public Engagement, Writing, Safety",
                    SpecificTasks:"(1) Analysis - analysed data from different sources in wet lab; (2) Conceptualization - came up with the plan and details for the implementation of the project; (3) Background Research - read relevant literature on GC-MS and HPLC; (4) Investigation - conducted experiments related to cultivation of Escherichia coli; (5) Notebook/record keeping - recorded daily experiments and summarize them into a notebook; (6) Public Engagement - participated in social activities organized by HP; (7) Writing - wrote content about parts in Wiki; (8) Safety - ensured safety throughout the whole experiments. "},
                    {Name:"Zhang Zhiyu",
                    Role:"Student members",
                    GeneralTasks:"Analysis, Background Research, Investigation, Notebook/record keeping, Public Engagement, Writing, Safety",
                    SpecificTasks:"(1) Analysis - analysed data from different sources in wet lab; (2) Background Research - read relevant literature on preparation of NPE; (3) Investigation - conducted experiments related to cultivation of Escherichia coli; (4) Notebook/record keeping - recorded daily experiments and summarize them into a notebook; (5) Public Engagement - participated in social activities organized by HP; (6) Writing - wrote content about safety in Wiki; (7) Safety - ensured safety throughout the whole experiments. "},
                    {Name:"Luan Chenyu",
                    Role:"Student members",
                    GeneralTasks:"Analysis, Background Research, Investigation, Notebook/record keeping, Public Engagement, Writing, Safety",
                    SpecificTasks:"(1) Analysis - analysed data from different sources in wet lab; (2) Background Research - read relevant literature on preparation of NPE; (3) Investigation - conducted experiments related to cultivation of Escherichia coli; (4) Notebook/record keeping - recorded daily experiments and summarize them into a notebook; (5) Public Engagement - participated in social activities organized by HP; (6) Writing - wrote content about safety in Wiki; (7) Safety - ensured safety throughout the whole experiments. "},
                    {Name:"Luan Chenyu",
                    Role:"Student members",
                    GeneralTasks:"Analysis, Conceptualization, Background Research, Investigation, Data Curation, Notebook/record keeping, Fundraising, Public Engagement, Writing, Safety",
                    SpecificTasks:"(1) Analysis - analysed data from different sources in wet lab; (2) Conceptualization - came up with the plan and details for the implementation of the project; (3) Background Research - read relevant literature on determination of enzyme activity of PE; (4) Investigation - conducted experiments related to protein purification; (5) Data Curation - collected and processed data related to AKTA; (6) Notebook/record keeping - recorded daily experiments and summarize them into a notebook; (7) Fundraising - pulled sponsorship to raise funds for the team; (8) Public Engagement - participated in social activities organized by HP; (9) Writing - wrote content about wet lab in Wiki; (10) Safety - ensured safety throughout the whole experiments. "},
                    {Name:"Jia He",
                    Role:"Student members",
                    GeneralTasks:"Analysis, Conceptualization, Background Research, Data Curation, Software, Writing",
                    SpecificTasks:"(1) Analysis - analysed data from different sources in dry lab; (2) Conceptualization - came up with the plan and details for the implementation of the project; (3) Background Research - read relevant literature on PE and propose improvements to our project; (4) Data Curation - collected and used data to design new mutants; (5) Software - used foldx, alphafold2 and several different software to design mutants; (6) Writing - wrote design and modeling content in Wiki."},
                    {Name:"Xinnan Chen",
                    Role:"Student members",
                    GeneralTasks:"Analysis, Background Research, Data Curation, Hardware, Software, Writing",
                    SpecificTasks:"(1) Analysis - analysed data from different sources in dry lab; (2) Background Research - read relevant literature on PE and propose improvements to our project; (3) Data Curation - collected and used data to design new mutants; (4) Hardware - designed and created some useful hardware to help completing expriments better; (5) Software - used foldx, alphafold2 and several different software to design mutants; (6) Writing - wrote modeling content in Wiki."},
                    {Name:"Liu Jinglu",
                    Role:"Student members",
                    GeneralTasks:"Analysis, Background Research, Data Curation, Software, Wiki coding, Writing",
                    SpecificTasks:"(1) Analysis - analysed data from different sources in dry lab; (2)  Background Research - read relevant literature on PE and propose improvements to our project; (4) Data Curation - collected and used data to design new mutants; (5) Software - used foldx, alphafold2 and several different software to design mutants; (6) Wiki coding - Writing wiki code and upload to GitLab; (7) Writing - wrote design and modeling content in Wiki."},
                    {Name:"Jierui Lou",
                    Role:"Student members",
                    GeneralTasks:"Background Research, Public Engagement, Wiki coding, Visualization, Writing",
                    SpecificTasks:"(1) Background Research -  fully understood the project and integrate it into the design; (2) Public Engagement - made a game to let more people know about our project; (3) Wiki coding - Writing wiki code and upload to GitLab; (4) Visualization - Converted Wiki from draft to code; (5) Writing - wrote game part in Wiki."},
                    {Name:"Xinyue Tang",
                    Role:"Student members",
                    GeneralTasks:"Background Research, Wiki coding, Visualization",
                    SpecificTasks:"(1) Background Research -  fully understood the project and integrate it into the design; (2) Wiki coding - Writing wiki code and upload to GitLab; (3) Visualization - Converted Wiki from draft to code. "},
                    {Name:"Hongwei Liu",
                    Role:"Student members",
                    GeneralTasks:"Background Research, Wiki coding, Visualization, Writing",
                    SpecificTasks:"(1) Background Research -  fully understood the project and integrate it into the design; (2) Wiki coding - Writing wiki code and upload to GitLab; (3) Visualization - Converted web pages from draft to code; (4) Writing - wrote team members in Wiki."},
                    {Name:"Xujia Zhao",
                    Role:"Student members",
                    GeneralTasks:"Background Research, Fundraising, Public Engagement, Visualization, Writing",
                    SpecificTasks:"(1) Background Research - read relevant literature on PE and propose improvements to our project; (2) Fundraising - pulled sponsorship to raise funds for the team; (3) Public Engagement - organized social activities to serve our project; (4) Visualization - participated in the design of team uniforms, display videos, etc; (5) Writing - wrote content about HP in Wiki."},
                    {Name:"Xuchen Liu",
                    Role:"Student members",
                    GeneralTasks:"Conceptualization, Background Research, Fundraising, Public Engagement, Writing",
                    SpecificTasks:"(1) Conceptualization - came up with the plan and details for the implementation of the project; (2) Background Research - read relevant literature on PE and propose improvements to our project; (3) Fundraising - pulled sponsorship to raise funds for the team; (4) Public Engagement - organized social activities to serve our project; (5) Writing - wrote content about HP in Wiki."},
                    {Name:"Yihan Fan",
                    Role:"Student members",
                    GeneralTasks:"Background Research, Public Engagement, Visualization",
                    SpecificTasks:"(1) Background Research - fully understood the project and integrate it into the design; (2) Public Engagement - participated in social activities organized by HP; (3) Visualization - designed posters, Wiki pages, team logos, team mascots, team uniforms, edited promotion videos, etc."},
                    {Name:"Zhao Yiding",
                    Role:"Student members",
                    GeneralTasks:"Background Research, Visualization",
                    SpecificTasks:"(1) Background Research - fully understood the project and integrate it into the design; (2) Visualization - designed posters, Wiki pages, team logos, team mascots, team uniforms, edited promotion videos, etc."},
                    {Name:"Hangzhi Liu",
                    Role:"Student members",
                    GeneralTasks:"Other",
                    SpecificTasks:"He was a member of our team before, but withdrew due to physical reasons."},
                    {Name:"Yujia Xu",
                    Role:"Student members",
                    GeneralTasks:"Other",
                    SpecificTasks:"He was a member of our team before, but withdrew due to physical reasons."},
                    {Name:"Xiaoya Wang",
                    Role:"Student members",
                    GeneralTasks:"Other",
                    SpecificTasks:"She was a member of our team before, but withdrew due to physical reasons."},
                    
                ],
                persons:[
                    {
                        Name:"Zhu Cheng",
                        InstitutionType:"Academic",
                        RelationshipToTeam:"External Adviseor",
                        GeneralTasks:"Other",
                        SpecificTasks:"Other - he helped us design 20 mutants related to hydrophobic cores. "
                    },
                    {
                        Name:"Chen Cheng",
                        InstitutionType:"Academic",
                        RelationshipToTeam:"External Advisor",
                        GeneralTasks:"Visualization",
                        SpecificTasks:"Visualization - he helped us with the interview part of the Team Project Promotion Video.  "
                    },
                    {
                        Name:"Sam Mens",
                        InstitutionType:"Other",
                        RelationshipToTeam:"External Advisor",
                        GeneralTasks:"Visualization",
                        SpecificTasks:"Visualization - he is a student in TJU and helped us with the interview part of the Team Project Promotion Video.  "
                    },
                    {
                        Name:"Debate Team of Medical School of Tianjin University",
                        InstitutionType:"Other",
                        RelationshipToTeam:"Other",
                        GeneralTasks:"Public Engagement",
                        SpecificTasks:"Other - they are a club of Medical School of Tianjin University; Public Engagement - they used our project as an example when debating with other team.  "
                    },
                    {
                        Name:"ChatGPT, version GPT-4 (from OpenAI)",
                        InstitutionType:"Industry",
                        RelationshipToTeam:"Contractor",
                        GeneralTasks:"Writing",
                        SpecificTasks:" "
                    },
                    {
                        Name:"Monad Biotech Co., Ltd.",
                        InstitutionType:"Industry",
                        RelationshipToTeam:"Sponsor",
                        GeneralTasks:"Fundraising",
                        SpecificTasks:" Awarded a grant to support our team."
                    },
                    {
                        Name:"BJEA-China",
                        InstitutionType:"Academic",
                        RelationshipToTeam:"Collaborator",
                        GeneralTasks:"Public Engagement",
                        SpecificTasks:" We jointly planned and carried out activities related to the Begonia Festival in Tianjin University."
                    },
                    {
                        Name:"Tianjin Chest Hospital",
                        InstitutionType:"Government",
                        RelationshipToTeam:"External Advisor",
                        GeneralTasks:"Conceptualization",
                        SpecificTasks:"They informed us about the current use and recycling of PE materials in the hospital, and gave suggestions for the practical application of our research. "
                    },
                    {
                        Name:"TEDA International Cardiovascular Hospital (TICH)",
                        InstitutionType:"Government",
                        RelationshipToTeam:"External Advisor",
                        GeneralTasks:"Conceptualization",
                        SpecificTasks:"They informed us about the current use and recycling of PE materials in the hospital, and gave suggestions for the practical application of our research. "
                    },
                    {
                        Name:"Beiyang Medical Students Union of Tianjin University",
                        InstitutionType:"Other",
                        RelationshipToTeam:"Other",
                        GeneralTasks:"Public Engagement",
                        SpecificTasks:" They helped us hold an offline event and share our ideas on their WeChat Official Account."
                    },
                    {
                        Name:"Zhengfei Yan",
                        InstitutionType:"Academic",
                        RelationshipToTeam:"External Advisor",
                        GeneralTasks:"Background Research",
                        SpecificTasks:" He reviewed the literature and introduced us to the current situation of plastic pollution and suggested possible directions for treatment."
                    },
                    {
                        Name:"Xu Han",
                        InstitutionType:"Academic",
                        RelationshipToTeam:"External Advisor",
                        GeneralTasks:"Conceptualization",
                        SpecificTasks:"She developed our ideas for PEase with her completed research of plastic degrading enzyme. "
                    },
                    {
                        Name:"Jiarong Qiu",
                        InstitutionType:"Academic",
                        RelationshipToTeam:"External Advisor",
                        GeneralTasks:"Analysis",
                        SpecificTasks:"She learned about our progress at that time and made suggestions on experimental methods and so on. "
                    },{
                        Name:"Yajun Liu",
                        InstitutionType:"Academic",
                        RelationshipToTeam:"External Advisor",
                        GeneralTasks:"Analysis",
                        SpecificTasks:"She learned about our latest progress and gave specific suggestions. "
                    },
                    {
                        Name:"Conference of China iGEMer Community(CCiC)",
                        InstitutionType:"Nonprofit",
                        RelationshipToTeam:"Collaborator",
                        GeneralTasks:"Public Engagement",
                        SpecificTasks:"They helped us connect other iGEMers and organised round-table conference."
                    },
                    {
                        Name:"ZJUT-China",
                        InstitutionType:"Academic",
                        RelationshipToTeam:"Collaborator",
                        GeneralTasks:"Public Engagement",
                        SpecificTasks:"They held a round-table conference and helped us deliver our iedas and outcome to more people. "
                    },
                    {
                        Name:"Tasly Group",
                        InstitutionType:"Industry",
                        RelationshipToTeam:"External Advisor",
                        GeneralTasks:"Conceptualization",
                        SpecificTasks:"They informed us about the current use and recycling of PE materials in pharmaceutical companies, and gave suggestions for the practical application of our research. "
                    },
                    {
                        Name:"GenStar",
                        InstitutionType:"Industry",
                        RelationshipToTeam:"Contractor",
                        GeneralTasks:"Investigation",
                        SpecificTasks:"Provided plasmid small extraction kit and agarose gel electrophoresis Recovery Kit."
                    },
                    {
                        Name:"Genewiz",
                        InstitutionType:"Industry",
                        RelationshipToTeam:"Contractor",
                        GeneralTasks:"Investigation",
                        SpecificTasks:"Provided sequencing to the team."
                    }
                ]
            }
         }
     }
// import { reactive } from "vue"

// const team_attributions = reactive([
//     {name:"Zefang Wang", role:""}
// ])
</script>