<template>
    <div class="head-nav">
        <img src="@/assets/team-logo.png" class="team-logo"/>

        <div class="router-box" v-for="(item) in router_box" :key="item">

            <p @click="displaySubRouter(item)" class="router-name">{{ item.name }}</p>

            <div class="sub-router-box" v-if="item.sub_router && item.is_show">
                <p v-for="child in item.sub_router" :key="child" 
                @click="router.push(child.path)" class="sub-router">{{ child.name }}</p>
            </div>
        </div>
    </div>
</template>

<script setup>
function displaySubRouter(item){
    if(!item.sub_router) router.push(item.path);
    else {
        item.is_show = !item.is_show;
    }
}


import { reactive } from "vue";
import { useRouter } from "vue-router"

const router = useRouter();

const router_box =  reactive([
    {
        name:"Home",
        path:"/"
    },
    {
        name:"Project",
        sub_router:[
            {name:"description", path:"/description"},
            {name:"desgin", path:"/design"},
            {name:"contribution", path:"contribution"},
            {name:"attributions", path:"/attributions"}
        ],
        is_show:false
    },
    {
        name:"Project",
        sub_router:[
            {name:"description", path:"/description"},
            {name:"desgin", path:"/design"},
            {name:"contribution", path:"contribution"},
            {name:"attributions", path:"/attributions"}
        ],
        is_show:false
    },
    {
        name:"Project",
        sub_router:[
            {name:"description", path:"/description"},
            {name:"desgin", path:"/design"},
            {name:"contribution", path:"contribution"},
            {name:"attributions", path:"/attributions"}
        ],
        is_show:false
    }
])
</script>

<style scoped>
.head-nav{
    height:10vh;
    width:100vw;
    display: flex;
    flex-direction: row;
    align-items: center;
    background:rgba(46, 78, 126);
    position: fixed;
    top:0;
}
.team-logo{
    height:20vh;
    margin-top:7%;
    margin-right:5%;
}
.router-box{
    margin:1vw;
    color: #FFFFFF;
    position: relative;
    display: flex;
    justify-content: center;
}
.router-name{
    cursor: pointer;
}
.sub-router-box{
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    top:100%;
    background:#FFFFFF;
    color:#000000;
    z-index: 10;
    box-shadow: 0 0 1vh rgba(0, 0, 0, 0.5);
    border-radius: 1vh;
}
.sub-router{
    margin: .7vh;
    cursor: pointer;
}
</style>