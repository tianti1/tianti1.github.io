<template>
    <div style="background-color:#c3b4ac70 ;height:100%">
    <el-row :gutter="20">
      <el-col :span="12">
    <h1 style="font-family:yg2 ;text-align:left; margin: 10px; color:#33333382; font-size: 60px;">绝美舞台</h1>
    <h2 style="font-family:yg2 ;text-align:left; margin: 10px 10px 10px 10px; font-size: 20px; padding-left:160px">- 范泽言登场</h2>
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
      <!-- <el-col :span="1">
      
        <h2 style="font-family:'yg2'; text-align:left; margin: 10px 10px 10px 10px; font-size: 20px; padding-left:160px">待播作品</h2>
      </el-col>
      <el-col :span="2">

        <h2 style="font-family:'yg2'; text-align:left; margin: 10px 10px 10px 10px; font-size: 20px; padding-left:160px">敬请期待</h2>
      </el-col> -->
    </el-row>
    <el-row :gutter="20">
  
      <el-col :span="1">
        <div style="font-family:yg2 ; text-align:left; margin:50px 10px 10px 20px; color:#c09077; font-size: 40px;">图文视频
          <el-icon class="el-icon-ali-caret-right"></el-icon>
        </div>
        <!-- <div style="font-family:yg2 ; text-align:left; margin:90px 0px 0px 0px; color:#c09077; font-size: 25px;">战<br>报<br>
          <el-icon class="el-icon-ali-caret-right"></el-icon>
        </div> -->
      </el-col>
      <el-col :span="5">
      
        <el-image style=" margin:30px 10px 0px 50px; width: 100%; height: auto;border-radius: 20px;border-style: dashed;border-width: 3px; border-color: #d69e82;text-align: left" src="https://wx2.sinaimg.cn/mw690/005Q6c0Fly1gskcg8xua5j31zm2zfhdw.jpg" :fit="fit"/>
        <el-image style=" margin:30px 10px 0px 50px; width: 100%; height: auto;border-radius: 20px;border-style: dashed;border-width: 3px; border-color: #d69e82;text-align: left" src="  https://wx4.sinaimg.cn/mw1024/0082USZggy1h7m0y9sxoqj312l1wmwua.jpg" :fit="fit"/> 
    </el-col>
    <el-col :span="16">
        <el-descriptions  style=" margin:30px 10px 0px 50px; "  v-for="(item,index) in wutaidata" :key="index" :title="item.nickname"  :column="2" border>
    <el-descriptions-item
      label="舞台"
      label-align="center"
      align="center"
      label-class-name="my-label"
      class-name="my-content"
      width="180px"
      >
      <el-link v-for="i in item.wt" :key="i" :href="i.link">{{i.name}}
        <el-tag size="small" style="margin-left:10px">{{i.ds}}</el-tag>
    </el-link>
    </el-descriptions-item>
    <el-descriptions-item label="饭拍" label-align="right" align="center"
      >
      <el-link v-for="i in item.fp" :key="i" :href="i.link">{{i.name}}
        <el-tag size="small" style="margin-left:10px">{{i.ds}}</el-tag>
    </el-link>
      
      </el-descriptions-item
    >
  </el-descriptions>

</el-col>
    </el-row>
</div>
  </template>
  
 <script>
 export default{
    data(){
        return{
            wutaidata:[
                {
                    nickname:"dip out",
                    wt:[
                    {
                        name:'合唱吧300',
                        link:"https://m.weibo.cn/6602751989/4412017371174154",
                        ds:'丞星约定',
                    },
                    {
                        name:"跨年",
                        link:"https://m.weibo.cn/6602751989/4455698974997706",
                        ds:'白天鹅',
                    },
                    {
                        name:"尖叫之夜",
                        link:"https://m.weibo.cn/6602751989/4446607069820131",
                        ds:'眼罩诱惑',
                    },
                    {
                        name:"尖叫之夜",
                        link:"https://m.weibo.cn/status/4402701645107880",
                        ds:'银发双人舞',
                    },

                    ],
                    fp:[
                    
                        {
                        name:"尖叫之夜focus",
                        link:"https://m.weibo.cn/3477823123/4402407695597315",
                        ds:'银发',
                    },
                    {
                        name:"多机位混剪",
                        link:"https://m.weibo.cn/status/4447680165979113",
                        ds:'饭制',
                    },
                    // { 
                    //     name:"多机位混剪",
                    //     link:"https://m.weibo.cn/status/4447680165979113",
                    //     ds:'饭制',

                    // }
                    ]
                  
                },
                {
                    nickname:"哑剧",
                    wt:[
                    {
                        name:'由你音乐榜样',
                        link:"https://m.weibo.cn/status/4325859936151907",
                        ds:'威亚',
                    },
                    // {
                    //     name:"跨年",
                    //     link:"https://m.weibo.cn/6602751989/4455698974997706",
                    //     ds:'白天鹅',
                    // },
                    {
                        name:"尖叫之夜",
                        link:"https://m.weibo.cn/status/4402702777746604",
                        ds:'银发澄海',
                    },
                    // {
                    //     name:"尖叫之夜",
                    //     link:"https://m.weibo.cn/status/4402701645107880",
                    //     ds:'银发双人舞',
                    // },

                    ],
                    fp:[
                    
                        {
                        name:"乐华演唱会上海场",
                        link:"https://m.weibo.cn/status/4317630204685023",
                        ds:'King',
                    },
                    {
                        name:"尖叫之夜",
                        link:"https://m.weibo.cn/status/4401688770776614",
                        ds:'白发focus',
                    },
                    // { 
                    //     name:"多机位混剪",
                    //     link:"https://m.weibo.cn/status/4447680165979113",
                    //     ds:'饭制',

                    // }
                    ]
                },

                    {
                    nickname:"Missed Texts",
                    wt:[
                    {
                        name:'MV',
                        link:"https://m.weibo.cn/status/4554419930139938",
                        ds:'官方',
                    },
                

                    ],
                    fp:[
                    
                        {
                        name:"三机位直拍",
                        link:"https://m.weibo.cn/status/4660073189606131",
                        ds:'蓝发 717',
                    },
                    {
                        name:"五机位混剪",
                        link:"https://m.weibo.cn/status/4660459808490571",
                        ds:'蓝发 4K',
                    },
                    // { 
                    //     name:"多机位混剪",
                    //     link:"https://m.weibo.cn/status/4447680165979113",
                    //     ds:'饭制',

                    // }
                    ]
                  
                },
                {
                    nickname:"Straight",
                    wt:[
                    {
                        name:'跨年',
                        link:"https://m.weibo.cn/status/4588323689473244",
                        ds:'困兽+Straight',
                    },
                

                    ],
                    fp:[
                    
                        {
                        name:"广州",
                        link:"https://m.weibo.cn/status/4403129183420479",
                        ds:'撩头发湿发 ',
                    },
                    {
                        name:"跨年",
                        link:"https://m.weibo.cn/status/4588373178320576",
                        ds:'focus',
                    },
                    // { 
                    //     name:"多机位混剪",
                    //     link:"https://m.weibo.cn/status/4447680165979113",
                    //     ds:'饭制',

                    // }
                    ]
                  
                },
                {
                    nickname:"Can't Slow Down",
                    wt:[
                    {
                        name:'发布会',
                        link:"https://weibo.com/5034414855/Mcr6Z005X",
                        ds:'太会扭了',
                    },
                

                    ],
                    fp:[
                    
                        {
                        name:"无",
                
                        ds:'没找到 ',
                    },
                  
                    // { 
                    //     name:"多机位混剪",
                    //     link:"https://m.weibo.cn/status/4447680165979113",
                    //     ds:'饭制',

                    // }
                    ]
                  
                },

            ]
        }
    }
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
  <style scoped>
  .my-label {
    background: var(--el-color-success-light-9);
  }
  .my-content {
    background: var(--el-color-danger-light-9);
  }  
  </style>