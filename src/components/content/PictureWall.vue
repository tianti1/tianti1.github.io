<template>
  <section class="picture-section" id="picture">
    <div class="pic-header">
      <h2>照片墙</h2>
      <hr class="line" />
      <span class="intro">Pictures</span>
    </div>
    <div class="pic-wrap">
      <div class="row-wrap">
        <div>
          <img src="~@/assets/img/pic1.jpg" alt="" />
        </div>
        <div>
          <img src="~@/assets/img/pic2.jpg" alt="" />
        </div>
        <div>
          <img src="~@/assets/img/pic3.jpg" alt="" />
        </div>
      </div>
      <div class="row-wrap">
        <div>
          <img src="~@/assets/img/pic4.jpg" alt="" />
        </div>
        <div>
          <img src="~@/assets/img/pic5.jpg" alt="" />
        </div>
        <div>
          <img src="~@/assets/img/pic6.jpg" alt="" />
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
/* 照片墙 */
.picture-section {
  background-color: white;
  padding-top: 30px;
}
.pic-wrap {
  /* margin-top: 20px; */
  /* width: 1300px; */
  padding: 10px 120px 10px;
  margin: 10px auto;
}
.row-wrap {
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;
}
.row-wrap img {
  width: 340px;
  height: 240px;
  box-sizing: border-box;
  border-radius: 6px;
}
</style>
