<template>
  <el-card class="box-card">
    <div slot="header" class="title">
      <span><i class="el-icon-goods"></i>  StandardGIS Lab & Team Post Address</span>
    </div>
    <div>
      <el-row>
        <el-col :span="12">
          <div class="content-title"><i class="el-icon-info"></i>  Address for details</div>
          <el-divider></el-divider>
          <div class="content">Hongshan District, Wuhan, Hubei, People's Republic of China</div>
          <div class="content">School of Remote Sensing and Information Engineering, Wuhan University</div>
          <div class="content-title"><i class="el-icon-star-on"></i>  Post Code</div>
          <el-divider></el-divider>
          <div class="content">430070</div>
          <div class="content-title"><i class="el-icon-success"></i>  Linkman</div>
          <el-divider></el-divider>
          <div class="content">Jiongyi(yan) Zhang, Department of GIS, School of Remote Sensing and Information Engineering</div>
          <div class="content-title"><i class="el-icon-warning"></i>  Tip for Attention</div>
          <el-divider></el-divider>
          <div class="content">Due to studying abroad, the webmaster is likely to stay overseas for several years. Please send a private email to the webmaster before posting the message. The leader will update his address as soon as possible.</div>
        </el-col>
        <el-col :span="12">
          <img :src="src" class="img">
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
    this.src = '/static/Contact_CV/WHU.png'
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
  width: 36vw;

}
</style>