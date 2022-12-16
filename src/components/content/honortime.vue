<template>
    <div style="background-color:#c3b4ac70 ;height:100%">
    <el-row :gutter="20">
      <el-col :span="12">
    <h1 style="font-family:yg2 ;text-align:left; margin: 10px; color:#33333382; font-size: 60px;">获奖记录</h1>
    <!-- <h2 style="font-family:yg2 ;text-align:left; margin: 10px 10px 10px 10px; font-size: 20px; padding-left:160px">可可爱爱福西西</h2> -->
    </el-col>
    </el-row>
    <el-row :gutter="20">
        <el-col :span="1">
        </el-col>
      <el-col :span="22">
        <div class="line"></div>
     <div class="text">时尚类</div>
         <div class="hello" style="margin: 10px; ">
    <el-table :data="tableData">
      <el-table-column v-for="(item,index) in columnList" :key="index" :prop="item.prop" :label="item.prop">
      </el-table-column>
    </el-table>
  </div> 


  <div class="line"></div>
     <div class="text">音乐类</div>
         <div class="hello" style="margin: 10px; ">
    <el-table :data="tableData2">
      <el-table-column v-for="(item,index) in columnList" :key="index" :prop="item.prop" :label="item.prop">
      </el-table-column>
    </el-table>
  </div> 


  <div class="line"></div>
     <div class="text">影视类</div>
         <div class="hello" style="margin: 10px; ">
    <el-table :data="tableData3">
      <el-table-column v-for="(item,index) in columnList" :key="index" :prop="item.prop" :label="item.prop">
      </el-table-column>
    </el-table>
  </div>
        </el-col>
    
    </el-row>

  </div>
</template>
 
<script>
export default {
  奖项名称: 'HelloWorld',
  mounted(){
    for(let key in this.tableData[0]){
      this.columnList.push({prop:key})
    }
    console.log('columnList =' + JSON.stringify( this.columnList))
  },
  data () {
    return {
      columnList:[],//[{"prop":"dat获奖时间"},{"prop":"奖项名称"},{"prop":"获奖结果"}]
      tableData: [
        {
          获奖时间: "2018-12-20",
          奖项名称: "搜狐时尚盛典年度时尚影响力男明星",
          获奖结果: "获奖"
        },
        {
          获奖时间: "2018-12-20",
          奖项名称: "搜狗IN全景·臻选礼年度最IN影响力偶像",
          获奖结果: "获奖"
        },
        {
          获奖时间: "2018-12-18",
          奖项名称: "第十届新京报“中国时尚权力榜”年度新势力艺人",
          获奖结果: "获奖"
        },
       
      ],
      tableData2: [
       {
          获奖时间: "2018-08-23",
          奖项名称: "全球华人歌曲排行榜年度最受欢迎乐队及组合奖",
          获奖结果: "NINE PERCENT提名"
        },
        {
          获奖时间: "2018-08-19",
          奖项名称: "亚洲新歌榜年度盛典年度最具人气组合奖",
          获奖结果: "乐华七子NEXT获奖"
        },
    ],
        tableData3: [
       {
          获奖时间: "2022-8-14",
          奖项名称: "2022微博电影之夜年度潜力演员",
          获奖结果: "获奖"
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
  