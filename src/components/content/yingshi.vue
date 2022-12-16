<template>
  <el-row> 
   <el-row> 
    <el-col :span="24" >
      <div class="yingshi">
        <span>门锁</span>
        <span>致命愿望</span>
        <span>灵域</span>
        <span>被遗忘的时光</span>
        <span>曾少年</span>
        <span>左肩有你</span>
        <span>扫黑·拨云见日</span>
        <span>了不起的夜晚</span>
        <span>半镜</span>
        <span>我要我们在一起</span>
      </div>
    </el-col>
  </el-row>

  <el-col :span="24" style="padding-top:10px">
    <el-row>
    <el-col
      v-for="(item, index) in movie"
      :key="item"
      :span="7"
      :offset="index > 0 ? 1 : 0"
    >
      <el-card :body-style="{ padding: '0px'}" style="background-color:#46281e ;border='none' ;color:white">
        <img class="image" :src=item.imgurl />
        <div style="padding: 10px">
          <div style="font-size:0.6em">{{item.name}}</div>
          <div style="font-size:0.2em">饰演：{{item.juese}}</div>
          <div class="bottom">
            <el-button text class="button" style="font-size:0.1em;color:'grey'">点击查看更多</el-button>
          </div>
        </div>
      </el-card>
    </el-col>
  </el-row>
    </el-col>
</el-row>
    </template>

<style>
    .yingshi{
   /* position: sticky; */
   top: 10px;
  /* z-index: 9999; */
  background-image:url("~@/assets/img/fccgif3.gif");
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
.yingshi span {
  /* color: #777; */
  color: rgba(4, 21, 33, 0.284);
  /* text-align: right; */
  margin: 20px 20px 20px 250px;
  padding-top: 100px;
    font-family: 'yg2';
}
.image {
      width: auto;
      height: 100px;
      size: 5%;
    }
</style>

<script>
export default {
 data() {
    return {
    //图片数据
      movie:[
       {name:"被遗忘的时光",
        imgurl:'https://img1.baidu.com/it/u=145850447,480745261&fm=253&fmt=auto&app=120&f=JPEG?w=640&h=444',
        juese:'路小凡'
    },
        {
          name:"致命愿望",
        imgurl:'https://img0.baidu.com/it/u=869864440,2679134099&fm=253&fmt=auto&app=138&f=JPEG?w=400&h=238',
        juese:'裘文东'

        },
        {
          name:"灵域",
        imgurl:'https://img0.baidu.com/it/u=237814625,2951299816&fm=253&fmt=auto&app=138&f=PNG?w=602&h=405',
        juese:'秦烈'

        }
      ],
    
    };
  },
   
  }
  </script>