<template>
    <div>
        <el-menu :default-active="activeIndex" @select="handleSelect" class="navi"> 
            <el-col :span="6">
                <img src="/static/logo-2.png" style="height:10vh;width:18vw">
            </el-col>
            <el-col :span="18">
                <el-menu-item index="1">HOME</el-menu-item>
                <el-menu-item index="2">RESOURSES</el-menu-item>
                <el-menu-item index="3">PROJECTS</el-menu-item>
                <el-menu-item index="4">EMPLOYMENT</el-menu-item>
                <el-menu-item index="5">CONTACT</el-menu-item>
            </el-col>
        </el-menu>    
    </div>
</template>

<script>
export default {
    data(){
        return{
            activeIndex:'1'
        }
    },
    mounted(){
        //console.log(this.activeIndex)
    },
    methods:{
        handleSelect(key,keyPath){
            if(this.activeIndex=='6'){
                document.documentElement.style.overflowY="scroll"
            }
            if(key==="1"){
                this.$router.push('/');
            }else if(key=="2"){

            }else if(key=="3"){

            }else if(key=="4"){

            }else if(key=="5"){
                this.$router.push('/contact');
            }
        }
    },
    props:{
        tempIndex:{
            type: String,
            required:true
        }
    },
    created(){
        this.activeIndex=this.tempIndex;
    }
}
</script>

<style scoped>
.el-menu-item{
    font-family: "times new roman", times, serif;
    font-size: 2vw!important;
    float: left;
    height: 10vh;
    line-height: 10vh;
    /*margin-right: 1vw;*/
    color: #accae6;
    padding: 0 1vw 0 1vw!important;
}
.navi{
    height: 10vh;
    /*float: right;*/
    background-color: rgba(28, 27, 104, 0.5);
}

</style>