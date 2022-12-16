<template>
    <el-row> 
     <el-row> 
      <el-col :span="24" >
        <div class="zongyi">

          <span>青春环游记</span>
          <span>嗨放派2</span>
          <span>偶像练习生</span>
          <span>青春的花路</span>
          <span>我要这样生活</span>
          <span>潮流合伙人</span>
          <span>做家务的男人2</span>
          <span>少年可期</span>
          <span>女儿们的男朋友</span>
          <span>令人心动的offer2</span>
       
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
            <!-- <div style="font-size:0.2em">饰演：{{item.juese}}</div> -->
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
      .zongyi{
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
  .zongyi span {
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
  </style>
  
  <script>
  export default {
   data() {
      return {
      //图片数据
        movie:[
         {name:"青春环游记",
          imgurl:'https://wx4.sinaimg.cn/mw1024/008dJqI8ly1h8fiuggynig30qo0k0u13.gif',
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
      
      };
    },
     
    }
    </script>