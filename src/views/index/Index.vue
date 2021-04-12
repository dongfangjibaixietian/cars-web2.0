<template>

    <div class="wrap">
        <div id="router-wrap" :class="{open: show}">
            <router-view />
        </div>
        <!-- <Cars /> -->
        <NavBar />
        <Amap />
    </div>
</template>

<script>

import Amap from "../amap/index";
import Cars from "../cars/index";
import NavBar from "../../components/navbar/index"

export default {
    name : "Index",
    components: { Amap, Cars, NavBar},
    data(){
        return {
            // open:false
        }
    },
    mounted() {
        document.addEventListener('mouseup',(e)=> {
            var userdiv = document.getElementById('router-wrap');
            // 打印后会发现。e.target显示的是当前点击的具体div块的内容
            console.log(e.target);
            if(userdiv && !userdiv.contains(e.target))
            {
                this.$router.push({
                    name: "Index",
                })
            }
        })
    },
    computed: {
        show(){
            const rotuer = this.$route;
            return rotuer.name === "Index" ? false : true;
        }
    },
    // watch: {
    //     $route : {
    //         handler(newValue) {
    //             this.open = newValue.name == "User" ? true : false;
    //         }
    //     }
    // }
}
</script>

<style lang="scss">
#router-wrap {
    position: fixed;
    top: 0;
    bottom: 0;
    right: -600px;
    z-index: 10;
    width: 410px;
    background-color: #34393f;
    box-shadow: -5px 0 38px 0 rgba(0, 0, 0, .4);
    -webkit-transition: all .3s  ease 0s;
    -moz-transition: all .3s  ease 0s;
    -ms-transition: all .3s  ease 0s;
    -o-transition: all .3s  ease 0s;
    transition: all .3s ease 0s;
    &.open {
        right: 0;
    }

}
</style>