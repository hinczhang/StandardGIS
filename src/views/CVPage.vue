<template>
    <div class="hidden">
        <navigation-bar style="position:fixed;width:100%;z-index:100" v-bind:tempIndex="'6'"></navigation-bar>
        <iframe src="/static/CV_Zhang/index.html" 
        style="width:99.5%;height:100%;position:relative;top:100px"
        scrolling="auto"></iframe>
    </div>
</template>

<script>

import NavigationBar from '../components/NavigationBar'
export default {
    components:{
        NavigationBar
    },
    mounted(){
        document.documentElement.style.overflowY="hidden"
    }
}
</script>

<style scoped>
.hidden{
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    width: 100%;
    min-height: 100%;
    height: auto;
    background: #000000;
}

</style>
<style>

</style>
