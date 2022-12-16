<template>
    <div class="demo-collapse">
      <el-collapse accordion >
        <el-collapse-item name="1" style=" font-family:'hk' ;font-weight: bold;  ">
          <template #title >
            李荣浩<el-icon class="el-icon-ali-kuangweifenggerenwu1">
              <info-filled />
            </el-icon>
          </template>
          <div >
            不仅外形亮眼、气质出众，且青春洋溢、活力十足，他在《偶像练习生》节目中担任主唱的表现让人感到意外，不仅演唱出色，音乐也有自己的特色。
          </div>
        </el-collapse-item>
        <el-collapse-item name="2"  style="font-family:'hk' ;font-weight: bold">
          <template #title>
          电影网评<el-icon class="el-icon-ali-14">
              <info-filled />
            </el-icon>
          </template>
          <div>
            一向低调内敛、有时又呆萌可爱的范丞丞在《Vogue Me》杂志的一组写真中展现出了冷峻成熟的绅士气质，并透出了迷离眼神
          </div>
        
        </el-collapse-item>
        <el-collapse-item  name="3"  style="font-family:'hk' ;font-weight: bold">
          <template #title>
            新浪娱乐评<el-icon class="el-icon-ali-renwu">
              <info-filled />
            </el-icon>
          </template>

          <div>
            范丞丞阳光清爽，其帅帅的样子吸引了众多粉丝，而在《时尚芭莎》的一组写真中，他则青春灵动、率性自由，在镜头前展现出不一样的自己
          </div>
          
        </el-collapse-item>
        <el-collapse-item  name="4"  style="font-family:'hk' ;font-weight: bold"> 
          <template #title>
            导演评<el-icon class="el-icon-ali-nanxingrenwu">
              <info-filled />
            </el-icon>
          </template>
          <div>
            范丞丞阳光清爽，其帅帅的样子吸引了众多粉丝，而在《时尚芭莎》的一组写真中，他则青春灵动、率性自由，在镜头前展现出不一样的自己
          </div>
         
        </el-collapse-item>
      </el-collapse>
    </div>
  </template>
  

<style scoped>
  ::v-deep .el-collapse-item__header.is-active {
  border-bottom: 1px solid #ebeef5;
  background-color:#3e2d28;
}
::v-deep .el-collapse-item__wrap {
  border: none;
  /* background-color:black; */
  background-image: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg11.51tietu.net%2Fpic%2F2019112115%2Fwyzg4l2rh5swyzg4l2rh5s.jpg&refer=http%3A%2F%2Fimg11.51tietu.net&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1672631546&t=84758bc5f4c7aec2f354e2a1ee8c9581";
}

::v-deep .el-collapse-item__header{
  border: none;
  background-color:#290e05;
  color: #ebeef5;
}
</style>
