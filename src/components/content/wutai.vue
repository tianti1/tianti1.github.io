<template>
    <el-row :gutter="20">
        <el-col :span="12" >
        <div>
        <el-carousel height="225px" direction="vertical" :autoplay="true">
    <el-carousel-item v-for="i in listimgs" :key="i">
        <img :src=i  width="260" height=""  alt=""/>
    </el-carousel-item>
  </el-carousel>
        </div>
       
      </el-col>
      <el-col :span="12"  >
        <div>
            <div class="demo-image__lazy">
    <el-image v-for="url in urls" :key="url" :src="url" />
       </div>
        </div>
        
      </el-col>
  </el-row>
        
    <el-col :span="24" style="padding-top:10px ;padding-bottom:10px">
      <el-row>
      <span><el-icon class="el-icon-ali-shipin"></el-icon>
        舞台直拍
        <el-icon class="el-icon-ali-arrow_right_fat"></el-icon></span>
    </el-row>
      </el-col>
      <el-row :gutter="20">
    <el-col :span="12">
        <VideoPlay
      videoUrl="https://f.video.weibocdn.com/000fwV5ylx07z9tmsMpO01041202xUEr0E010.mp4?label=mp4_hd&template=852x480.25.0&trans_finger=1621fcd5d40969f1c74e6b06e52fcd54&ori=0&ps=1BThihd3VLAY5R&Expires=1670391098&ssig=J2gZnEIqa7&KID=unistore,video"
      videoCover="http://t13.baidu.com/it/u=699515512,4197188742&fm=224&app=112&f=JPEG?w=500&h=499&s=6571AA64C632B5C65C4CE19A0300E09D"
      :width="200"
      :height="150"
      :autoplay="false"
      :controls="true"
      :loop="false"
      :muted="false"
      preload="auto"
      :playWidth="96"
      zoom="none"/>
    
    </el-col>
    <el-col :span="12">
        <VideoPlay
      videoUrl="https://f.video.weibocdn.com/004aSZEhlx07w2daancA010412092lyw0E040.mp4?label=mp4_1080p&template=1920x1080.23.0&trans_finger=ad902d305a1c78ff61aed2c4f339bdfc&media_id=4402696719929771&tp=8x8A3El:YTkl0eM8&us=0&ori=1&bf=2&ot=h&ps=3lckmu&uid=7Z1BUN&ab=9298-g4,8224-g0,7397-g1&Expires=1670394396&ssig=MFgCGrYFK%2B&KID=unistore,video"
      videoCover="https://img1.baidu.com/it/u=708635022,2994675795&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=686"
      :width="200"
      :height="150"
      :autoplay="false"
      :controls="true"
      :loop="false"
      :muted="false"
      preload="auto"
      :playWidth="96"
      zoom="none"/>
    
    </el-col>
    </el-row>

      </template>
  
  <style>
      .wutai{
     /* position: sticky; */
     top: 10px;
    z-index: 9999;
    background-image:url("~@/assets/img/fccgif4.gif");
    background-size: 100%;
    /* background-position: 1% 28%; */
      background-repeat: no-repeat, repeat;
      /* display: flex; */
        width: 100%;
        height: 100%;
        size: 5%;
      /* background-position: center center; */
      /* padding: 1px; */
    /* background-color: rgb(127, 155, 214); */
    /* border-bottom: 1px #777 solid;
    box-shadow: 0 0px 0px rgb(0 0 0 / 10%); */
  }
  .wutai span {
    /* color: #777; */
    color: #090b0dbd;
    /* text-align: right; */
    margin: 200px 20px 20px 250px;
    padding-top: 100px;
      font-family: 'yg';
  }
  .image {
        width: auto;
        height: 100px;
        size: 5%;
      }
      .demo-image__lazy {
    height: 225px;
    overflow-y: auto;
  }
  .demo-image__lazy .el-image {
    display: flex;
    min-height: 80px;
    margin-bottom: 10px;
  }
  .demo-image__lazy .el-image:last-child {
    margin-bottom: 0;
  }
  </style>
  <style scoped>
  .el-carousel__item h3 {
    color: #475669;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
    text-align: center;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;}
  .el-carousel__item:nth-child(2n + 1) {
    background-color: #d3dce6;
  }
  </style>
  
  <script> 
   import VideoPlay from "@/components/content/VideoPlay.vue";
  export default {
   
components: {
    VideoPlay,
},
   data() {
      return {
      //图片数据
        movie:[
         {name:"青春环游记",
          imgurl:'https://wx3.sinaimg.cn/mw1024/ab207d7aly1h5wy5k9sn9g20u00u01l9.gif',
          juese:'点击观看可爱福西西'
      },
          {
            name:"嗨放派2",
          imgurl:'https://wx4.sinaimg.cn/mw1024/005zb7kZly1h82oiawt9ig30k00k0kjt.gif',
          juese:'裘文东'
  
          },
          {
            name:"偶像练习生",
          imgurl:'https://wx1.sinaimg.cn/mw1024/007blzxMly1h5wy20poc3g30qo0jy4qs.gif',
          juese:'秦烈'
  
          }
        ],
        urls : [
  'https://wx1.sinaimg.cn/mw1024/006ggYr4gy1guv54q7w2oj61e00xce8102.jpg',
  'https://wx1.sinaimg.cn/thumb150/007cV2x2gy1h7tjidt57tj31jk2bcnpe.jpg',
  'https://wx4.sinaimg.cn/thumb150/d1491f1dly1ghuna0aw6lj21wk2jf1l0.jpg',
  'https://wx3.sinaimg.cn/orj360/006e6nosly1h5y1ov7acdj30k00t3gnj.jpg',
  'https://wx2.sinaimg.cn/orj360/006e6nosly1h5y1cpdmqej30xc1dw47l.jpg',
  'https://wx4.sinaimg.cn/thumb150/0076tPlJly1guzl1543u4j62bc1jk4qq02.jpg',
  'https://wx1.sinaimg.cn/thumb150/008gAMKWgy1guxtv0p784j60qo0zkdhg02.jpg',
], 
    listimgs:[
    "https://wx4.sinaimg.cn/mw1024/007axTYfly1gv5k41332hg60k00qob2l02.gif",
    "https://wx3.sinaimg.cn/mw1024/ab207d7aly1h5wy5k9sn9g20u00u01l9.gif",
    "https://wx4.sinaimg.cn/mw1024/007enAuwly1gz9l2502t5g30p40p41l4.gif",
    "https://wx3.sinaimg.cn/mw1024/007enAuwly1gz9l09t3rjg30bw0bwb2e.gif",
    "https://wx3.sinaimg.cn/mw1024/007w9L6ngy1gta922q9grg30m80m8he0.gif",
    "https://wx4.sinaimg.cn/mw1024/006z10jCly1gn3s57hhnrg30ie0hghe3.gif",

    ],
      
      };
    },
     
    }
    </script>