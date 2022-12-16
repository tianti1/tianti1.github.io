<template>
  <section class="video-section" id="video">
    <div class="video--wrap">
      <div class="video-header">
        <h2>精彩视频</h2>
        <hr class="line" />
        <span class="intro">video collection</span>
      </div>
      <div class="video-body">
        <div class="video-row">
          <div class="video-panel-left">
            <h2>高燃混剪</h2>
            <p>
              不是所有人都能像勒布朗一样扣篮”库里的大学队友史蒂夫-罗希特说，“然而大部分人可以整天狂扔三分，假装自己就是库里。人们可以在他身上看到自己的影子。”
            </p>
          </div>
          <div class="video-link-left">
            <!-- <video src="../../public/video/StephenCurry.mp4" controls></video> -->
            <a
              href="https://www.bilibili.com/video/BV1qV411C7u8?share_source=copy_web"
              target="_blank"
              ><img src="~@/assets/img/row1L.jpg" alt=""
            /></a>
          </div>
          <div class="video-link-right">
            <a
              href="https://www.bilibili.com/video/BV19g4y1z7L7?share_source=copy_web"
              target="_blank"
              ><img src="~@/assets/img/row1R.jpg" alt=""
            /></a>
          </div>
          <div class="video-panel-right">
            <h2>精于投篮，不止射手</h2>
            <p>
              三分球大师，精准跑位，未来三分历史第一命中以是板上钉钉之事
              <br />
              面对时代，改变时代。 面对困境，逆天改命！
              <br />在这魔球时代，我小库同学无所畏惧！
            </p>
          </div>
        </div>
        <div class="video-row">
          <div class="video-panel-left">
            <h2>你用什么阻止他得分？</h2>
            <p>
              “十年后，我想让大家都知道我的职业精神”&nbsp;2009年进入联盟的你，在10年后的总决赛上，队友kd佛祖接连伤退，
              你顶着手指的剧痛，咬着牙套坚持了整个系列赛，尽管与总冠军失之交臂，尽管全世界都在庆祝勇士王朝的崩塌，但你做到了，
              你让大家都看到了你的职业精神，你是永远的勇士
            </p>
          </div>
          <div class="video-link-left">
            <a
              href="https://www.bilibili.com/video/BV1pK4y137Nd?share_source=copy_web"
              target="_blank"
              ><img src="~@/assets/img/row2L.jpg" alt=""
            /></a>
          </div>
          <div class="video-link-right">
            <a
              href="https://www.bilibili.com/video/BV1xx411676R?share_source=copy_web"
              target="_blank"
              ><img src="~@/assets/img/row2R.jpg" alt=""
            /></a>
          </div>
          <div class="video-panel-right">
            <h2>金州勇士搞笑瞬间</h2>
            <p>
              为什么会喜欢库里呢？很多人都这样问。他打球没有詹姆斯
              威少那样劲爆的身体 没有欧文 乔治那样的华丽的球风
              没有杜兰特那样的身高
              就只有看似瘦小的身体。可就是这个瘦小的身体改变了整个联盟。这就是库里的伟大！不骄不躁讨喜的性格让你真的很难去讨厌这个家伙。这样一个人怎么会不让人喜欢呢
            </p>
          </div>
        </div>
        <div class="video-row">
          <div class="video-panel-left">
            <h2>骄傲的少年</h2>
            <p>我虽然错过了乔丹，错过了科比，但很幸运我的时代有你 库里</p>
          </div>
          <div class="video-link-left">
            <a
              href="https://www.bilibili.com/video/BV1MK4y1E7cL?p=12&share_source=copy_web"
              target="_blank"
              ><img src="~@/assets/img/row3L.jpg" alt=""
            /></a>
          </div>
          <div class="video-link-right">
            <a
              href="https://www.bilibili.com/video/BV1MK4y1E7cL?p=13&share_source=copy_web"
              target="_blank"
              ><img src="~@/assets/img/row3R.jpg" alt=""
            /></a>
          </div>
          <div class="video-panel-right">
            <h2>Man on Mission</h2>
            <p>我虽然错过了乔丹，错过了科比，但很幸运我的时代有你 库里</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style>
/* video */
.video-body {
  width: 1270px;
  padding: 20px 15px 10px;
  margin: 0px auto;
  position: relative;
}
.video-row {
  display: flex;
  height: 180px;
  justify-content: space-between;
  margin-bottom: 80px;
}
.video-row h2 {
  font-size: 28px;
  color: #000;
}
.video-row p {
  line-height: 1.5;
  color: #3f5b50;
}
.video-panel-left {
  width: 360px;
  text-align: right;
}
.video-link-left img,
.video-link-right img {
  border: 7px double #eee;
  border-radius: 20px;
  width: 220px;
  height: 150px;
}
.video-panel-right {
  width: 360px;
  text-align: left;
}
</style>
