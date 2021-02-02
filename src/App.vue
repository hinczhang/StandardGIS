<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return{

    }
  },
  mounted(){
    this.resize_window();
    window.addEventListener('resize',()=>{
      this.resize_window();
    })
  },
  methods:{
    resize_window(){
      let w_height=Number(document.documentElement.clientHeight/1080);
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
  /*margin-top: 60px;*/
}
body{
  margin:0;
  padding:0;
  height: 100%;
}

</style>
