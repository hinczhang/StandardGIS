<template>
    <div>
        <navigation-bar style="position:fixed;width:100%;z-index:100" v-bind:tempIndex="'1'"></navigation-bar>
        <el-carousel style="width:100%" height="90vh">
            <el-carousel-item v-for="item in path" :key="item.p">
                <div style="position:relative">
                    <img class="broimg" :src="item.p">
                    <div class="discription1">{{item.d1}}</div>
                    <div class="discription2">{{item.d2}}</div>
                </div>
            </el-carousel-item>
        </el-carousel>

        <el-divider></el-divider>
        <el-footer height="12vh">
        <el-row class="el-footword">
          <el-col :span="9">
            <i class="el-icon-s-promotion"></i> Copyright Served by StandardGIS Team&Lab，Copyright<el-link type="success" herf="http://www.northgis.cn">®StandardGIS</el-link>
            <br>
            <i class="el-icon-s-home"></i> Address Line 1: School of Remote Sensing and Information Engineering<br>
            <i class="el-icon-school"></i> Address Line 2: Wuhan University, Wuhan, Hubei, People's Republic of China<br>
            <i class="el-icon-printer"></i> Mail Box: hinczhang@gmail.com & hinczhang@whu.edu.cn
          </el-col>
          <el-col :span="1">
            <el-divider direction="vertical"></el-divider>
            <el-divider direction="vertical"></el-divider>
            <el-divider direction="vertical"></el-divider>
            <el-divider direction="vertical"></el-divider>
            <el-divider direction="vertical"></el-divider>
            <el-divider direction="vertical"></el-divider>
            <el-divider direction="vertical"></el-divider>
            <el-divider direction="vertical"></el-divider>
            <el-divider direction="vertical"></el-divider>
            <el-divider direction="vertical"></el-divider>
            <el-divider direction="vertical"></el-divider>
            <el-divider direction="vertical"></el-divider>
          </el-col>
          <el-col :span="9" style="text-align: justify;">
            This site mainly provides the release of GIS-related technical issues or scientific and technological consultation, 
            while accepting some lightweight projects and employment advertisements. Welcome to email to exchange opinions or suggestions. 
            Meanwhile, we hope you can kindly correct our mistakes.
          </el-col>
          <el-col :span="5">
            <img src="/static/logo-2.png" class="logo-img2">
          </el-col>
        </el-row>
      </el-footer>
    </div>
</template>

<script>
import NavigationBar from '../components/NavigationBar'
export default {
    components:{NavigationBar},
    data(){
        return{
            path:[{p:"/static/MainPage/1.gif",d1:"GIS & RS",d2:"Advanced Image and Big Data Processing Tech."},
            {p:"/static/MainPage/2.gif",d1:"SMART CITIES",d2:"New ideas bring new lives."},
            {p:"/static/MainPage/3.gif",d1:"AI & High-Perform",d2:"Computer Science and GIS Science."}]
        }
    }
}
</script>

<style scoped>
.broimg{
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    -webkit-filter: blur(0px);
    -moz-filter:blur(0px);
    -o-filter:blur(0px);
    -ms-filter: blur(0px);
    filter:blur(0px);
    width: 100%;
}
.discription1{
    width: 100%;
    position:absolute;
    z-index:50;
    left:0;
    top: 20%;
    font-family: "times new roman", times, serif;
    color: #FFFFFF;
    font-size: 4vw;

}
.discription2{
    width: 100%;
    position:absolute;
    z-index:50;
    left:0;
    top: 30%;
    font-family: "times new roman", times, serif;
    color: #FFFFFF;
    font-size: 2vw;

}
.logo-img2{
  width: 17.5vw;
  float: right;
  
}
.el-footer {
  background-color: rgb(4, 21, 44);
  padding: 0.5vw;
}
.el-footword{
  font-family: "times new roman", times, serif;
  color: #FFFFFF;
  font-size: 0.9vw;
  margin-top: 0;
  text-align: left;
  letter-spacing: 0.05vw;
  
  
}
.el-divider--vertical{
    display: inline-block;
    width: 0.08vw;
    height: 2.0vh;
    margin: 0 0.4vw;
    vertical-align: middle;
    position: relative;
}
.el-divider--horizontal {
    display: block;
    height: 0.5vh;
    width: 100%;
    margin: 1vh 0;
}
</style>