<template>
    <div style="background-color:#c3b4ac70 ;height:100%">
    <el-row :gutter="20">
      <el-col :span="9">
    <h1 style="font-family:yg2 ;text-align:left; margin: 10px; color:#33333382">灵域</h1>
    <h2 style="font-family:yg2 ;text-align:left; margin: 10px 10px 10px 10px; font-size: 20px; padding-left:60px">-心事只能月亮知</h2>
    </el-col>
    <el-col :span="1">
      <div style="font-family:yg2 ; text-align:left; margin:10px 0px 0px 0px; color:#c09077; font-size: 25px;">主<br>题<br>曲<br>
          <el-icon class="el-icon-ali-caret-right"></el-icon>
          <!-- <el-image style="width: 30px; height: auto" :src="require('@/assets/img/yinfu.png')" ></el-image>    -->
        </div>
        </el-col>
<!--    
        <el-col :span="3">
          <el-image style=" margin:10px;text-align:left;width: 80%; height: auto" :src="require('@/assets/img/yinfu.png')" ></el-image>   
        </el-col> -->
        <el-col :span="2">
      <div style="font-family:yg2 ; text-align:left; margin:10px 10px 10px 10px; color:#713f26; font-size: 40px;">醉<br>墨<br>
        </div>
        </el-col>
           
        <el-col :span="3">
          <a href="https://m.weibo.cn/1653255165/4591421648803251">
          <el-image style=" margin:10px;text-align:left;width: 120%; height: 80% ;border-radius: 20px;border-style:double;border-width: 3px; border-color: #713f26;" src="https://img0.baidu.com/it/u=3264322534,1594229971&fm=253&fmt=auto&app=138&f=JPEG?w=640&h=343" ></el-image>   
        </a>
        </el-col>
        <el-col :span="5">
       
      </el-col>
      <el-col :span="4">
        <el-image style="width: 60%; height: auto ;margin:10px" :src="require('@/assets/img/aiqiyi.png')"></el-image>  
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="8">
      <h3 style="font-family:yg2 ;text-align:center; margin: 20px; color:#c09077; font-size: 25px;">精彩剪辑
      <el-icon class="el-icon-ali-xiangxia1"></el-icon>
      </h3>
      <el-image style="width: 50%; height: auto;border-radius: 20px;border-style: dashed;border-width: 3px; border-color: #d69e82;" src="https://wx4.sinaimg.cn/large/006g9EuAly1gmz50a0p9fg30fv0fvu1d.gif" :fit="fit"/>
     <div>
      <p style="font-family:hk ;color:#c09077; font-size: 20px; margin: 0px;">B站：</p>
      <el-link  style="font-family:yg ;color:#c09077; font-size: 20px; margin: 0px;"
      href="https://www.bilibili.com/video/BV1rU4y1x7eg/?spm_id_from=333.337.search-card.all.click&vd_source=d7f1a48b6802756d7cf97f0e9e3fe536" target="_blank">杀破狼 @糖六鸭</el-link><br>
      <el-link  style="font-family:yg ;color:#c09077; font-size: 20px; margin: 0px;"
      href="https://www.bilibili.com/video/BV1V54y1s7Am/?spm_id_from=333.337.search-card.all.click&vd_source=d7f1a48b6802756d7cf97f0e9e3fe536" target="_blank">绝美落泪丨不是风动 是我心动 @OhAda_</el-link><br>
      <el-link  style="font-family:yg ;color:#c09077; font-size: 20px; margin: 0px;"
      href="https://www.bilibili.com/video/BV1DU4y1A7qF/?spm_id_from=333.337.search-card.all.click&vd_source=d7f1a48b6802756d7cf97f0e9e3fe536" target="_blank">     范丞丞秦烈–不负人间不负你 @frejaaa_616</el-link>
      <p style="font-family:hk ;color:#c09077; font-size: 20px; margin: 0px;">微博：</p>
      <el-link  style="font-family:yg ;color:#c09077; font-size: 20px; margin: 0px;"
      href="https://f.video.weibocdn.com/0FpHqNWelx07Jq3f2n5S01041200gVNc0E010.mp4?label=mp4_ld&template=640x360.25.0&trans_finger=6006a648d0db83b7d9951b3cee381a9c&ori=0&ps=1A0wTbzsOwlrc4&Expires=1670763220&ssig=6E85pPTe9X&KID=unistore,video" target="_blank">云与海 @大叶鸽子</el-link>
      <br>
      <el-link  style="font-family:yg ;color:#c09077; font-size: 20px; margin: 0px;"
      href="https://video.weibo.com/show?fid=1034:4734236410970200" target="_blank">千年之恋 @池安丞_</el-link>
      <br>

     </div>


      </el-col>
      <el-col :span="8">
        <h3 style="font-family:yg2 ;text-align:center; margin: 20px; color:#c09077; font-size: 25px;">绝美动图
      <el-icon class="el-icon-ali-xiangxia1"></el-icon>
      </h3>

      <el-image style="width: 50%; height: auto;border-radius: 20px;border-style: dashed;border-width: 3px; border-color: #d69e82;" src="https://wx3.sinaimg.cn/large/006g9EuAly1gmz4ta35seg30jt0jtqvr.gif" :fit="fit"/>

      <p style="font-family:hk ;color:#c09077; font-size: 20px; margin: 0px;">动图：</p>
      <el-link  style="font-family:yg ;color:#c09077; font-size: 20px; margin: 0px;"
      href="https://m.weibo.cn/status/4597016603398105" target="_blank">秦烈动图(1) @AD奶盖儿</el-link>
      <br><el-link  style="font-family:yg ;color:#c09077; font-size: 20px; margin: 0px;"
      href="https://m.weibo.cn/status/4591883051601398" target="_blank">秦烈动图(2) @AD奶盖儿</el-link>
      <br><el-link  style="font-family:yg ;color:#c09077; font-size: 20px; margin: 0px;"
      href="https://m.weibo.cn/status/4593695808817782" target="_blank">秦烈动图 @郭语老师傅 </el-link>
      <br><el-link  style="font-family:yg ;color:#c09077; font-size: 20px; margin: 0px;"
      href="https://weibo.com/6108106603/JCyZBiNJx?refer_flag=1001030103" target="_blank">秦烈动图 @·池枣枣·</el-link>
      <p style="font-family:hk ;color:#c09077; font-size: 20px; margin: 0px;">照片：</p>
      <el-link  style="font-family:yg ;color:#c09077; font-size: 20px; margin: 0px;"
      href="https://weibo.com/3874549965/JFzLF7Ky4?refer_flag=1001030103" target="_blank">截修 @一只小猪沛琪</el-link>

      
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
        
        <el-image style="width: 50%; height: auto;border-radius: 20px;border-style: dashed;border-width: 3px; border-color: #d69e82;text-align: left" src="https://wx4.sinaimg.cn/orj360/007CYAYnly1h74p6r9fnyj30qo12mq5t.jpg" :fit="fit"/>
        <br><el-link  style="font-family:yg ;color:#c09077; font-size: 20px; margin: 0px; text-align:left;"
      href="https://m.weibo.cn/1832974324/4505259651121171" target="_blank">花絮1 &nbsp;</el-link>
      <el-link  style="font-family:yg ;color:#c09077; font-size: 20px; margin: 0px;"
      href="https://m.weibo.cn/1832974324/4570382168227851" target="_blank">花絮2&nbsp;</el-link>
      <el-link  style="font-family:yg ;color:#c09077; font-size: 20px; margin: 0px;"
      href="https://m.weibo.cn/1832974324/4588522553489510" target="_blank">花絮3&nbsp;</el-link>
      <el-link  style="font-family:yg ;color:#c09077; font-size: 20px; margin: 0px;"
      href="https://m.weibo.cn/1832974324/4589590306362877" target="_blank">花絮4&nbsp;</el-link>
      <el-link  style="font-family:yg ;color:#c09077; font-size: 20px; margin: 0px;"
      href="https://m.weibo.cn/1832974324/4591794987730996" target="_blank">花絮5&nbsp;</el-link>
      <el-link  style="font-family:yg ;color:#c09077; font-size: 20px; margin: 0px;"
      href="https://m.weibo.cn/1832974324/4594011602685904" target="_blank">花絮6&nbsp;</el-link>
      <el-link  style="font-family:yg ;color:#c09077; font-size: 20px; margin: 0px;"
      href="https://m.weibo.cn/1832974324/4595112989164051" target="_blank">花絮7&nbsp;</el-link>


      <el-image style="margin-top:30px;width: 80%; height: auto;border-radius: 20px;border-style: dashed;border-width: 3px; border-color: #d69e82;text-align: left" src=" https://img1.baidu.com/it/u=1680845661,1016257012&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=375" :fit="fit"/>
        <br>
        
        <el-link  style="font-family:yg ;color:#c09077; font-size: 20px; margin: 0px; text-align:left;"
      href="https://m.weibo.cn/6872502526/4600976760385414" target="_blank">官方战报&nbsp;</el-link>
      <br><el-link  style="font-family:yg ;color:#c09077; font-size: 20px; margin: 0px;"
      href="https://m.weibo.cn/5867797477/4600258539034160" target="_blank">数据图&nbsp;</el-link>
      <br> <el-link  style="font-family:yg ;color:#c09077; font-size: 20px; margin: 0px;"
      href="https://m.weibo.cn/5867797477/4591493610474982" target="_blank">路人评价&nbsp;</el-link>



    

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
  