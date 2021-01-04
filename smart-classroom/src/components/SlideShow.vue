<template >
  <div class="contain">
    <div class="carousel">
      <a-carousel autoplay>
        <template v-for="(item,index) in imgList">
          <div class="img-contain">
            <img :src="item.src" class="image">
          </div>
        </template>
      </a-carousel>
    </div>
  </div>
</template>
<script>
import banner from '../assets/banner.png'
export default {
  name: "SlideShow",
  data() {
    return {
      imgList: [
        {
          src: banner,
          name: 'img1'
        },
        {
          src: banner,
          name: 'img1'
        },
        {
          src: banner,
          name: 'img1'
        },
      ]
    }
  }

};
</script>
<style scoped>
  /* For demo */
  .ant-carousel >>> .slick-slide {
    text-align: center;
    height: 158px;
    line-height: 160px;
    border-radius: 10px;
    overflow: hidden;
  }
  .ant-carousel >>> .slick-slide h3 {
    color: #1bcbb4;
  }

  /*自定义样式*/
  .contain{
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
  .carousel{
    width: 1280px;
  }
  .img-contain{
    width: 1280px;
    height: 160px;
  }

</style>


