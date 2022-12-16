<template>
 
  <div id="div-main-wrap" style="background:#290e05; color:#FFF">
    <!-- header -->
 <Header></Header>
    <div class="h-title">
      
      <div class="div-title">
        <a  href="#" >


          <h1>范丞丞 
            
            <!-- <span class="iconfont icon-shouye"></span> -->
          </h1>
          <h2 >
              —丞蒙遇见，以尔为范  <span class="el-icon-ali-shouye"></span>
          </h2>
          <h2>
            —人见人爱范丞丞，花见花开福西西
          </h2>
          <h3>
           网站： @帅气tianti
          </h3>
          
          
     
        </a>
  
        <!-- <div class="music-control" @click="musicCtrol">
          <img v-if="!musicState" src="~@/assets/img/musicoff.png" alt="" />
          <img v-else src="~@/assets/img/musicon.png" alt="" />
        </div> -->
        <!-- <audio ref="audio" controls autoplay="autoplay" hidden>
          <source src="../../public/music/unstoppable.mp3" type="audio/mpeg" />
        </audio> -->
        
      </div>
      
  
    </div>
   
    <el-row :gutter="20">
    <el-col :span="14"> <FccProfile></FccProfile></el-col>
    <el-col :span="10">
      <div>
    <slide></slide>
		</div>

    <Symbol></Symbol></el-col>
  </el-row>







    <!-- 主体 -->
    <!-- <div class="main-area"> -->
      <!-- 简介 -->
      <!-- <profile></profile> -->
      <!-- 荣誉 -->
      <!-- <honor></honor> -->
      <!-- 视频 -->
      <!-- <my-video></my-video> -->
      <!-- 长引用 -->
      <!-- <div class="quote-wrap">
        <blockquote>
          <p>I can do all things.</p>
        </blockquote>
      </div> -->
      <!-- 照片墙 -->
      <!-- <picture-wall></picture-wall> -->
      <!-- 计时器 -->
      <!-- <section class="timer" id="time">
        <div class="timer-wrap">
          <div class="time-header">
            <h2>当前时间</h2>
            <hr class="line" />
            <span class="intro">Current&nbsp;Time</span>
          </div>
          <div class="time-area">
            <div>{{ hour }}</div>
            <div>{{ minute }}</div>
            <div>{{ second }}</div>
          </div>
        </div>
      </section> -->
      <footer><div class="fotter">Copyright©2022&nbsp;帅气tianti</div></footer>
    </div>
  <!-- </div> -->
</template>

<script>
import { ref, onMounted } from "vue";
import SlideShow from "@/components/content/SlideShow.vue";
import Profile from "@/components/content/Profile.vue";
import Honor from "@/components/content/Honor.vue";
import MyVideo from "@/components/content/MyVideo.vue";
import PictureWall from "@/components/content/PictureWall.vue";
import Symbol from "@/components/content/Symbol.vue";
import FccProfile from "@/components/content/FccProfile.vue";
import Header from "@/components/content/header.vue";
import slide from "@/components/content/slide.vue";
// import directProfile from "@/components/content/directProfile.vue";
// import Card from "@/components/content/Card.vue";
// import CardSlide from "@/components/content/CardSlide.vue";

export default {
  setup() {
    const audio = ref(null);
    const musicState = ref(false);
    // const clickA = () => {
    //   audio.value.play();
    // };
    const musicCtrol = () => {
      if (!musicState.value) {
        audio.value.play();
        musicState.value = true;
      } else {
        audio.value.pause();
        musicState.value = false;
      }
    };
    // onMounted(() => {
    //   // 监听全局点击事件
    //   window.addEventListener("click", clickA);
    //   // audio.value.play();
    //   console.log(audio.value);
    // });
    // 时间
    const hour = ref(0);
    const minute = ref(0);
    const second = ref(0);
    onMounted(() => {
      setInterval(() => {
        let date = new Date();
        hour.value = date.getHours();
        minute.value = date.getMinutes();
        second.value = date.getSeconds();
      }, 1000);
    });
    return {
      audio,
      musicState,
      hour,
      minute,
      second,


      musicCtrol,
    };
  },
  components: {
    SlideShow,
    Profile,
    Honor,
    MyVideo,
    PictureWall,
    Symbol,
    FccProfile,
    Header,
    slide,
    // directProfile,
    // Card,
    // CardSlide,
  },
};
</script>

<style >
/* 去掉了scoped 其样式可以被其子组件使用 */

h2 {
  font-weight: 600;
  color: #333;
  letter-spacing: 1px;
  font-family: "Ek Mukta";
  font-size: 36px;
  margin: 0;
}
a {
  text-decoration: none;
}
ul {
  /* 去除默认样式 */
  padding: 0;
  /*去除项目符号 (小点)*/
  list-style: none;
}
#div-main-wrap {
  width: 100%;
  /* background-color:"#251004" */

}
.h-title {
  /* position: sticky; */
  top: 0px;
  z-index: 9999;
  background-image: url("~@/assets/img/fcc5.jpg");
  background-position: 1% 28%;
    background-repeat: no-repeat, repeat;
    /* background-position: center center; */
    /* padding: 1px; */
  /* background-color: rgb(127, 155, 214); */
  border-bottom: 1px #777 solid;
  box-shadow: 0 0px 0px rgb(0 0 0 / 10%);
}
.music-control {
  position: absolute;
  top: 30px;
  right: 40px;
}
.music-control img {
  height: 30px;
  width: 30px;
  opacity: 0.8;
}
.div-title h1 {
  /* color: #777; */
  color: rgba(155, 162, 167, 0.284);
  text-align: left;;
  margin: 0px 0px 0px 100px;
  padding-top: 15px;


}
.vision{
    width:70%;
    margin: auto;
    background-color:#663933;
    border-radius:30px;
    padding-left:0px;
    padding-top:15px;
    padding-bottom:15px;
    margin: 30px 10px 20px 70px
    }

  .tips{
float:left;
margin-left:30%;
margin-top:0px;
background-color:#FFFFFF;
border-radius:10000px;
height: 80%;
width: auto;
font-size:15px}

.science{
  float:left;
margin-left:25%;
margin-top:-65px;
background-color:#FFFFFF;
border-radius:100px;
padding-left:10px;
padding-right:5px;
font-size:17px}

.div-title h2 
{
  /* color: #777; */
  font-size: 25px;
  color: rgba(215, 218, 221, 0.284);
  text-align:start;
  /* text-align: left; */
 margin: 0px 150px; /* 文字距离上下有100px外边距 距离左右有200外边距 */
  /* padding-top: 15px; */
  font-family: 'yg';
  padding-left: 1px;

}

.div-title h3 
{
  /* color: #777; */
  font-size: 10px;
  color: rgba(215, 218, 221, 0.284);
  text-align:right;
  /* text-align: left; */
 margin: 0px 30px; /* 文字距离上下有100px外边距 距离左右有200外边距 */
  /* padding-top: 15px; */
  font-family: 'yg';

}
.div-title span {
  /* color: #777; */
  color: rgba(155, 162, 167, 0.284);
  text-align: left;;
  /* margin: 5px 0px 1500px 100px; */
  padding: 10 0px;

}
.navv {
  margin: 5px 500px 10px 8px;
  display: flex;
  justify-content: center;
  width: auto;
  padding: 5px 0px;
  /* border-top: 1px #ddd solid; */
}
.navv a {
  font-size: 18px;
  padding: 0px 20px;
  font-weight: bold;
  color: #777;
}
.main-area {
  width: 100vw;
  background-color: rgb(247, 247, 247);
}
/* 长引用 */
.quote-wrap {
  padding: 10px 150px;
  background-color: #585a57;
  height: 300px;
  background-image: url("~@/assets/img/curry6.jpg");
  background-repeat: no-repeat;
  background-attachment: fixed; /*让图片固定住而不是随网页和div移动*/
  background-size: 100%; /*这个属性是让图片大小填充div的关键*/
}
.quote-wrap p {
  font-size: 38px;
  /* line-height: 100%; */
  margin-top: 105px;
  color: white;
}
.quote-wrap blockquote {
  position: relative;
  padding: 10px 60px 10px;
}
.quote-wrap blockquote::before,
.quote-wrap blockquote::after {
  position: absolute;
  font-size: 90px;
  color: white;
}
.quote-wrap blockquote::before {
  /* line-height: 1; */
  content: "\201C";
  top: 0;
  left: 0;
}
.quote-wrap blockquote::after {
  top: 0;
  right: 0;
  content: "\201D";
}
/* time */
.time-area {
  padding: 10px 200px;
  width: 610px;
  display: flex;
  justify-content: space-between;
  margin: 0px auto;
}
.time-area div {
  height: 100px;
  width: 200px;
  background-color: rgb(51, 51, 51);
  color: white;
  font-size: 33px;
  line-height: 100px;
}
/* fotter */
.fotter {
  height: 60px;
  background-color: rgb(48, 48, 48);
  text-align: center;
  font-size: 16px;
  color: #666;
  line-height: 60px;
  font-family: "Ek Mukta", sans-serif;
}
</style>
