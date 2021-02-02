<template>
  <el-card class="box-card">
    <div slot="header" class="title">
      <span><i class="el-icon-phone-outline"></i>  StandardGIS Lab & Team Contact Approaches</span>
    </div>
    <div>
      <el-row>
        <el-col :span="12">
          <div class="content-title"><i class="el-icon-s-home"></i>Email for public connection：</div>
          <el-divider></el-divider>
          <div class="content">hinczhang@gmail.com (HincZhang)</div>
          <div class="content-title"><i class="el-icon-message-solid"></i>Email for Research connection：</div>
          <el-divider></el-divider>
          <div class="content">hinczhang@whu.edu.cn (HincZhang)</div>
          <div class="content-title"><i class="el-icon-s-custom"></i>Github Code and Project ID：</div>
          <el-divider></el-divider>
          <div class="content">https://github.com/hinczhang</div>
        </el-col>
        <el-col :span="12">
          <div class="content-title"><i class="el-icon-s-comment"></i>LinkIn Community：</div>
          <el-divider></el-divider>
          <div class="content">https://www.linkedin.com/in/jiongyan-zhang-616797183/</div>
          <div class="content-title"><i class="el-icon-s-ticket"></i>Skype ID：</div>
          <el-divider></el-divider>
          <div class="content">Skype Personal ID  hinczhang@whu.edu.cn (HincZhang)</div>
          <div class="content-title"><i class="el-icon-s-shop"></i>ZhiHu Community：</div>
          <el-divider></el-divider>
          <div class="content">https://www.zhihu.com/people/pu-tong-xing-de-ce-hui-yuan</div>
        </el-col>
      </el-row>
    </div>
  </el-card>
</template>

<script>
export default {
    
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

</style>