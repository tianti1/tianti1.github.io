<template>
    <div style="background-color:#c3b4ac70 ;height:100%">
    <el-row :gutter="20">
      <el-col :span="12">
    <h1 style="font-family:yg2 ;text-align:left; margin: 10px; color:#33333382; font-size: 60px;">综艺汇总</h1>
    <h2 style="font-family:yg2 ;text-align:left; margin: 10px 10px 10px 10px; font-size: 20px; padding-left:160px">可可爱爱福西西</h2>
    </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="1">
        </el-col>
        <el-col :span="11">
            <div >
        <el-table :data="tableData" style="margin-left:0px">
        <el-table-column v-for="(item,index) in columnList" :key="index" :prop="item.prop" :label="item.prop">
        </el-table-column>
        </el-table>
             </div> 
        
        </el-col>
        <el-col :span="11">
            <div class="hello">
        <el-table :data="tableData2"  style="margin:0px ;background-color: antiquewhite;">
        <el-table-column v-for="(item,index) in columnList" :key="index" :prop="item.prop" :label="item.prop">
        </el-table-column>
        </el-table>
             </div> 
        
        </el-col>
    
    </el-row>
  <!-- <div class="hello">
    <el-table :data="tableData">
      <el-table-column v-for="(item,index) in columnList" :key="index" :prop="item.prop" :label="item.prop">
      </el-table-column>
    </el-table>
  </div> -->
  </div>
</template>
 
<script>
export default {
  节目: 'HelloWorld',
  mounted(){
    for(let key in this.tableData[0]){
      this.columnList.push({prop:key})
    }
    console.log('columnList =' + JSON.stringify( this.columnList))
  },
  data () {
    return {
      columnList:[],//[{"prop":"dat时间"},{"prop":"节目"},{"prop":"简介"}]
      tableData: [
        {
          时间: "2018",
          节目: "偶像练习生",
          简介: "一起走花路吧，丞丞"
        },
        // {
        //   时间: "2018&2019",
        //   节目: "快乐大本营",
        //   简介: "180203/602/708期 191019期"
        // },
        {
          时间: "2018",
          节目: "奔跑吧",
          简介: "180525期 180622期"
        },
        {
          时间: "2018",
          节目: "这就是灌篮",
          简介: "181117期"
        },
        {
          时间: "2018",
          节目: "由你音乐榜样",
          简介: "181224期 190119期"
        },
        {
          时间: "2019",
          节目: "即刻电音",
          简介: "190119期"
        },
        {
          时间: "2019",
          节目: "女儿们的男朋友",
          简介: "常驻嘉宾 直男丞"
        },
        {
          时间: "2019",
          节目: "青春的花路",
          简介: "旅行丞丞的明信片"
        },
        {
          时间: "2019",
          节目: "少年可期",
          简介: "成长小丞 next团综"
        },
        {
          时间: "2019",
          节目: "遇见天坛",
          简介: "190926期"
        },
       

      ],
      tableData2: [
       {
          时间: "2019-2021",
          节目: "青春环游记1/2/3",
          简介: "素颜小丞 cos丞"
        },
        {
          时间: "2019",
          节目: "合唱吧！300",
          简介: "夜有繁星，你有丞星"
        },
        {
          时间: "2020",
          节目: "令人心动的offer2",
          简介: "职场新人"
        },
        {
          时间: "2019",
          节目: "蒙面唱将猜猜猜",
          简介: "哥宝宝 191013期"
        },
        {
          时间: "2020",
          节目: "我要这样生活",
          简介: "虫虫出没"
        },
        {
          时间: "2020",
          节目: "做家务的男人第二季 ",
          简介: "与做饭斗争的福西西"
        },
        {
          时间: "2020",
          节目: "720潮流主理人",
          简介: "魅力小丞"
        },
        {
          时间: "2021",
          节目: "潮流合伙人2",
          简介: "开车合伙人"
        },
        {
          时间: "2022",
          节目: "嗨放派2",
          简介: "夏日猪猪丞 我很ok"
        },

      ],
      

 
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
.el-table .warning-row {
  --el-table-tr-bg-color:rgb(245, 242, 242);
}
.el-table .success-row {
  --el-table-tr-bg-color: var(--el-color-success-light-9);
}

  /* .el-table--mini .el-table__cell{
    padding: 4px 0
  } */
 

  .el-table{
    background-color: rgba(203, 148, 148, 0.75);
    border-radius: 9px;
    
  }
 

  .el-table tr{
    background-color: transparent;
    color: rgb(159, 40, 40);
    /* font-family: ; */
  }
 
  .el-table th{
    background-color:#beafad !important;
  }

  .el-table th > .cell{
    color: white;
    /* font-family: hk; */
  }
 
 
  .el-table--border{
    border:none;
  }
  

  .el-table td.el-table__cell{
    border: 0px;
  }
 

  .el-table__header-wrapper, .el-table__footer-wrapper{
    border-bottom: 1px solid rgba(176, 37, 37, 0.3);
  }
 

  .el-table--enable-row-hover .el-table__body tr:hover>td{
    background-color: rgba(226, 151, 151, 0.75) !important;
    color:white !important;
  }


  </style>
  