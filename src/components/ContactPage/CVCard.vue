<template>
  <el-card class="box-card">
    <div slot="header" class="title">
      <span><i class="el-icon-goods"></i>  StandardGIS Leader Resume</span>
    </div>
    <div>
      <el-row>
        <el-col :span="8">
          <img :src="src" class="img">
        </el-col>
        <el-col :span="16">
            <div class="content-title"><i class="el-icon-user-solid"></i>  Basic Information</div>
          <el-divider></el-divider>
          <div class="content">Name: 张炅焱 (Zhang Jiongyi(Jiongyan)) &#8195;&#8195;&#8195;&#8195;&#8195;&#8195; Gender: Male
               &#8195;&#8195;&#8195;&#8195;&#8195;&#8195; Nationality: Chinese
          </div>
          <div class="content">Work Address: Faculty of Information Science, Wuhan University, Luoyu Road, Hongshan District, 430070, Wuhan, China</div>
          <div class="content-title"><i class="el-icon-video-camera-solid"></i>  Self Description</div>
          <el-divider></el-divider>
          <div class="content">Fundamental Researcher with a demonstrated history of working in the GIS Analysis and Data Science. 
              Skilled in Arcgis Products, Photogrammetry, Data Analysis, Computer Science, and Remote Sensing. Strong research 
              professional with a Bachelor of Engineering - BE focused in Geographic Information Science from Wuhan University. </div>
          <div class="content-title"><i class="el-icon-s-management"></i>  Education and training</div>
          <el-divider></el-divider>
          <div class="content">B.E. of Remote Sensing Science and Technology: Wuhan University (2017.09~2021.06)</div>
          <div class="content">High School Diploma: Qingyang Middle School of Anhui Province (2014.09~2017.05)</div>
          <div class="content-title"><i class="el-icon-s-order"></i>  Click to view the full resume.</div>
          <el-divider></el-divider>
          <div class="content"><el-button @click="handleCV" round>Click to Resume</el-button></div>

        </el-col>
      </el-row>
    </div>
  </el-card>
</template>

<script>
export default {
  data () {
    return {
      src: ''
    }
  },
  created () {
    this.src = '/static/Contact_CV/leader.jpg'
  },
  methods:{
      handleCV(){
          this.$router.push('/jiongyanzhang')
      }
  }
}
</script>

<style scoped>
.box-card{
  width: 100vw;
}
.title{
  font-family: "times new roman", times, serif;
  color: #03080D;
  font-size: 1.5vw;
  text-align: left;
}

.content-title{
  font-family: "palatino linotype", palatino, serif;
  font-size: 1.2vw;
  font-weight: bold;
  font-style: italic;
  text-align: left;
}

.content{
  font-family: arial, sans-serif;
  color: #0C7869;
  font-size: 0.9vw;
  line-height: 1.5;
  text-align: left;
  margin-bottom: 20px;
}
.el-divider--horizontal{
  margin-top: 0.8vh;
  margin-bottom: 0.8vh;
}

.img{
  border-radius: 1vw 1vw 1vw 1vw;
  -moz-border-radius: 1vw 1vw 1vw 1vw;
  -webkit-border-radius: 1vw 1vw 1vw 1vw;
  border: 0.3vw solid #082e6b;
  width: 25vw;
  float:left
}
</style>