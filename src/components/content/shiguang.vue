<template>
    <div style="background-color:#c3b4ac70 ;height:100%">
    <el-row :gutter="20">
      <el-col :span="12">
    <h1 style="font-family:yg2 ;text-align:left; margin: 10px; color:#33333382; font-size: 80px;">被遗忘的时光</h1>
    <h2 style="font-family:yg2 ;text-align:left; margin: 10px 10px 10px 10px; font-size: 20px; padding-left:160px">-我要换她活</h2>
    </el-col>
    <!-- <el-col :span="1">
      <div style="font-family:yg2 ; text-align:left; margin:10px 0px 0px 0px; color:#c09077; font-size: 25px;">主<br>题<br>曲<br>
          <el-icon class="el-icon-ali-caret-right"></el-icon>
        </div>
        </el-col>
        <el-col :span="2">
      <div style="font-family:yg2 ; text-align:left; margin:10px 10px 10px 10px; color:#713f26; font-size: 40px;">醉<br>墨<br>
        </div>
        </el-col> -->
           
        <!-- <el-col :span="3">
          <a href="https://m.weibo.cn/1653255165/4591421648803251">
          <el-image style=" margin:10px;text-align:left;width: 120%; height: 80% ;border-radius: 20px;border-style:double;border-width: 3px; border-color: #713f26;" src="https://img0.baidu.com/it/u=3264322534,1594229971&fm=253&fmt=auto&app=138&f=JPEG?w=640&h=343" ></el-image>   
        </a>
        </el-col> -->
        <el-col :span="5">
       
      </el-col>
      <el-col :span="4">
        <el-image style="width: 60%; height: auto ;margin:10px" :src="require('@/assets/img/mangguo.png')"></el-image>  
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="8">
      <h3 style="font-family:yg2 ;text-align:center; margin: 20px; color:#c09077; font-size: 25px;">精彩剪辑
      <el-icon class="el-icon-ali-xiangxia1"></el-icon>
      </h3>
      <el-image style="width: 50%; height: auto;border-radius: 20px;border-style: dashed;border-width: 3px; border-color: #d69e82;" src="https://wx1.sinaimg.cn/mw1024/006sZEXCly1h7t0m4hmrbg30qo0k0kjy.gif" :fit="fit"/>
     <div>
      <p style="font-family:hk ;color:#c09077; font-size: 20px; margin: 0px;">B站：</p>
      <el-link  style="font-family:yg ;color:#c09077; font-size: 20px; margin: 0px;"
      href="https://www.bilibili.com/video/BV1NG411h7PC/?spm_id_from=333.337.search-card.all.click&vd_source=d7f1a48b6802756d7cf97f0e9e3fe536" target="_blank">卧槽！范丞丞好会亲啊！ @Joeyhee1215</el-link><br>
      <el-link  style="font-family:yg ;color:#c09077; font-size: 20px; margin: 0px;"
      href="https://www.bilibili.com/video/BV1mU4y1C7UM/?spm_id_from=333.788.recommend_more_video.1&vd_source=d7f1a48b6802756d7cf97f0e9e3fe536" target="_blank">卧槽！这是范丞丞？？？怎么演的这么好！！！ @大花儿儿儿儿_</el-link><br>
      <el-link  style="font-family:yg ;color:#c09077; font-size: 20px; margin: 0px;"
      href="https://www.bilibili.com/video/BV1NS4y1b7k5/?spm_id_from=333.788.recommend_more_video.1&vd_source=d7f1a48b6802756d7cf97f0e9e3fe536" target="_blank">上天啊，难道你看不出我很爱她 @成为RAPSTAR咦</el-link>
      <p style="font-family:hk ;color:#c09077; font-size: 20px; margin: 0px;">微博：</p>
      <el-link  style="font-family:yg ;color:#c09077; font-size: 20px; margin: 0px;"
      href="https://m.weibo.cn/status/4844137050276174" target="_blank">哭戏合集 @企鹅Adam</el-link>
      <br>
      <el-link  style="font-family:yg ;color:#c09077; font-size: 20px; margin: 0px;"
      href="https://m.weibo.cn/status/4836735882889853" target="_blank">【范丞丞 | 影视 | 隐忍克制的爱】@FCC卫视</el-link>
      <br>

     </div>


      </el-col>
      <el-col :span="8">
        <h3 style="font-family:yg2 ;text-align:center; margin: 20px; color:#c09077; font-size: 25px;">绝美动图
      <el-icon class="el-icon-ali-xiangxia1"></el-icon>
      </h3>

      <el-image style="width: 50%; height: auto;border-radius: 20px;border-style: dashed;border-width: 3px; border-color: #d69e82;" src="https://wx3.sinaimg.cn/mw1024/006sZEXCly1h7t0lg79s4g30qo0k0he4.gif" :fit="fit"/>

      <p style="font-family:hk ;color:#c09077; font-size: 20px; margin: 0px;">动图：</p>
      <el-link  style="font-family:yg ;color:#c09077; font-size: 20px; margin: 0px;"
      href="https://m.weibo.cn/6124869582/4803838245078121" target="_blank">路小凡动图1 </el-link>
      <br><el-link  style="font-family:yg ;color:#c09077; font-size: 20px; margin: 0px;"
      href="https://m.weibo.cn/5669773529/4796711270876546" target="_blank">路小凡动图2 </el-link>
      <br><el-link  style="font-family:yg ;color:#c09077; font-size: 20px; margin: 0px;"
      href="https://m.weibo.cn/5669773529/4797733158000445" target="_blank">路小凡动图3 </el-link>
      <!-- <br><el-link  style="font-family:yg ;color:#c09077; font-size: 20px; margin: 0px;"
      href="https://weibo.com/6108106603/JCyZBiNJx?refer_flag=1001030103_" target="_blank">秦烈动图 @·池枣枣·</el-link>
      <p style="font-family:hk ;color:#c09077; font-size: 20px; margin: 0px;">照片：</p>
      <el-link  style="font-family:yg ;color:#c09077; font-size: 20px; margin: 0px;"
      href="https://weibo.com/3874549965/JFzLF7Ky4?refer_flag=1001030103_" target="_blank">截修 @一只小猪沛琪</el-link> -->

      
      </el-col>
      <el-col :span="1">
        <div style="font-family:yg2 ; text-align:left; margin:50px 0px 0px 0px; color:#c09077; font-size: 25px;">花<br>絮<br>
          <el-icon class="el-icon-ali-caret-right"></el-icon>
        </div>
        <div style="font-family:yg2 ; text-align:left; margin:90px 0px 0px 0px; color:#c09077; font-size: 25px;">战<br>报<br>
          <el-icon class="el-icon-ali-caret-right"></el-icon>
        </div>
      </el-col>
      <el-col :span="5">
        
        <el-image style="width: 50%; height: auto;border-radius: 20px;border-style: dashed;border-width: 3px; border-color: #d69e82;text-align: left" src="https://wx1.sinaimg.cn/mw1024/006sZEXCly1h7t0bfv4xcj31jk2qqhdt.jpg" :fit="fit"/>
        <br><el-link  style="font-family:yg ;color:#c09077; font-size: 20px; margin: 0px; text-align:left;"
      href="https://m.weibo.cn/7474260590/4796534626981485" target="_blank">花絮1 &nbsp;</el-link>
      <el-link  style="font-family:yg ;color:#c09077; font-size: 20px; margin: 0px;"
      href="https://m.weibo.cn/5034414855/4797273038389395" target="_blank">花絮2&nbsp;</el-link>
      <el-link  style="font-family:yg ;color:#c09077; font-size: 20px; margin: 0px;"
      href="https://m.weibo.cn/7502359889/4806352528738717" target="_blank">花絮3&nbsp;</el-link>
      <el-link  style="font-family:yg ;color:#c09077; font-size: 20px; margin: 0px;"
      href="https://m.weibo.cn/1663088660/4803766727216889" target="_blank">花絮4&nbsp;</el-link>
      <el-link  style="font-family:yg ;color:#c09077; font-size: 20px; margin: 0px;"
      href="https://m.weibo.cn/7502359889/4803060835029656" target="_blank">花絮5&nbsp;</el-link>
      <el-link  style="font-family:yg ;color:#c09077; font-size: 20px; margin: 0px;"
      href="https://m.weibo.cn/1809436135/4801410585071627" target="blank">花絮6&nbsp;</el-link>
      <el-link  style="font-family:yg ;color:#c09077; font-size: 20px; margin: 0px;"
      href="https://m.weibo.cn/7502359889/4800586362388569" target="_blank">花絮7&nbsp;</el-link>


      <el-image style="margin-top:30px;width: 80%; height: auto;border-radius: 20px;border-style: dashed;border-width: 3px; border-color: #d69e82;text-align: left" src="https://wx4.sinaimg.cn/mw1024/64d8fb79ly1h8zsd9n1p0j20j60eemy6.jpg" :fit="fit"/>
        <br>
        
        <el-link  style="font-family:yg ;color:#c09077; font-size: 20px; margin: 0px; text-align:left;"
      href="https://weibo.com/7502359889/M2N75fiuy?refer_flag=1001030103" target="_blank">官方战报&nbsp;</el-link>
      <br><el-link  style="font-family:yg ;color:#c09077; font-size: 20px; margin: 0px;"
      href="https://weibo.com/6872502526/M2PRcisEi?refer_flag=1001030103" target="_blank">路小凡战报&nbsp;</el-link>
      <br> <el-link  style="font-family:yg ;color:#c09077; font-size: 20px; margin: 0px;"
      href="https://m.weibo.cn/5263502958/4805322328250771" target="_blank">路人评价&nbsp;</el-link>



    

        <!-- <h3 style="font-family:yg2 ;text-align:left; margin: 20px; color:#c09077; font-size: 25px;">精彩剪辑
      <el-icon class="el-icon-ali-caret-right"></el-icon>
      </h3> -->
    </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="8">
         <!-- <el-image style="width: 50%; height: 60%;border-radius: 20px;border-style: dashed;border-width: 3px; border-color: #d69e82;" src="https://wx4.sinaimg.cn/orj360/007CYAYnly1h74p6r9fnyj30qo12mq5t.jpg" :fit="fit"/> -->
      </el-col>
      <el-col :span="10"><div class="grid-content ep-bg-purple" /></el-col>
      <el-col :span="4"><div class="grid-content ep-bg-purple" /></el-col>
    </el-row>
</div>
  </template>
  
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
  <style>
  .el-row {
    margin-bottom: 20px;
  }
  .el-row:last-child {
    margin-bottom: 0;
  }
  .el-col {
    border-radius: 4px;
  }
  
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }

  </style>
  