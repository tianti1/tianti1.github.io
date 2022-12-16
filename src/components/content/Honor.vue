<template>
  <section class="honor-section" id="honor">
    <div class="honor-wrap">
      <div class="honor-header">
        <h2>库里<span>的</span>故事</h2>
        <hr class="line" />
        <span class="intro">stephen's story</span>
      </div>
      <ul class="timeline">
        <li>
          <div class="timeline-image">
            <i class="fa fa-heart-o"></i>
          </div>
          <div class="timeline-panel">
            <h2>早年经历</h2>
            <p>
              斯蒂芬·库里高中毕业后，曾参加杜克大学篮球训练营，希望加入这所篮球名校，但是当时杜克大学的老K教练和他的教练团队认为库里太过瘦弱矮小，不会适应NCAA的强度，因而放弃将其招致麾下。
              大学时期大学时期 斯蒂芬·库里最终选择进入戴维森学院。
            </p>
          </div>
        </li>
        <li>
          <div class="timeline-image">
            <i class="fa fa-heart-o"></i>
          </div>
          <div class="timeline-panel-right">
            <h2>NBA生涯</h2>
            <p>
              2009年NBA选秀，斯蒂芬·库里在首轮第7顺位被金州勇士队选中。
              2009年10月29日，在勇士与火箭的比赛中，斯蒂芬·库里首发出场36分钟，12投7中拿到14分2篮板7次助攻和4次抢断，完成NBA首秀。
              2010年1月28日，NBA公布全明星新秀挑战赛18人大名单，斯蒂芬·库里入选一年级队。
            </p>
          </div>
        </li>
        <li>
          <div class="timeline-image">
            <i class="fa fa-heart-o"></i>
          </div>
          <div class="timeline-panel">
            <h2>2010-11赛季</h2>
            <p>
              2011年2月2日，NBA官方公布2011年全明星新秀挑战赛大名单，斯蒂芬·库里入选二年级队。
              2011年2月20日，在全明星周末技巧挑战赛中，斯蒂芬·库里用时28.2秒，战胜拉塞尔·威斯布鲁克等对手，最终夺冠。
            </p>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style >
/* honor */
/* 去掉了scoped 这里的样式能被后面的组件使用 */

.honor-section {
  background-color: white;
  padding-top: 40px;
}
.honor-wrap {
  width: 1170px;
  padding: 0px 15px;
  margin: 0px auto;
  position: relative;
}
.timeline::before {
  content: "";
  position: absolute;
  top: 150px;
  bottom: 0;
  /* 注意 bottom是必须的 */
  left: 50%;
  width: 2px;
  margin-left: -1.5px;
  background-color: #555;
}
.timeline li {
  position: relative;
  /* display: block; */
  padding-bottom: 70px;
  min-height: 200px;
}
.timeline-image {
  width: 60px;
  height: 60px;
  position: absolute;
  left: 50%;
  margin-left: -30px;
  background-color: rgb(128,160,175);
  text-align: center;
  border-radius: 50%;
  color: white;
  padding-top: 15px;
  box-sizing: border-box;
}
.timeline-image i {
  font-size: 33px;
}
.timeline-panel {
  position: absolute;
  left: 0px;
  padding: 0px 10px 20px 100px;
  width: 35%;
}
.timeline-panel-right {
  position: absolute;
  width: 35%;
  right: 0px;
  padding: 0px 100px 20px 10px;
}
.timeline-panel h2 {
  text-align: right;
  font-size: 28px;
  letter-spacing: 1px;
  font-family: "Ek Mukta";
  color: rgb(211,137,66);
}
.timeline-panel-right h2 {
  text-align: left;
  font-size: 28px;
  letter-spacing: 1px;
  font-family: "Ek Mukta";
  color: rgb(211,137,66);
}
.timeline-panel p {
  color: #c17886;
  /* font-weight: bold; */
  line-height: 1.5;
  text-align: right;
}
.timeline-panel-right p {
  color: #c17886;
  line-height: 1.5;
  /* font-weight: bold; */
  text-align: left;
}
.honor-header h2 span {
  color: rgb(140, 140, 140);
  margin: 0px 8px;
}
.line {
  border: none;
  border-top: 5px solid #bbb;
  max-width: 90px;
  margin: 15px auto 15px;
}
.intro {
  color: rgb(111, 111, 111);
  font-size: 18px;
  /* font-family: Georgia, 'Times New Roman', Times, serif; */
}
</style>
